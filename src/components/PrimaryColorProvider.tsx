"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type PrimaryColor = "default" | "red" | "blue" | "green" | "orange" | "rose";

interface PrimaryColorContextType {
    primaryColor: PrimaryColor;
    setPrimaryColor: (color: PrimaryColor) => void;
}

const PrimaryColorContext = createContext<PrimaryColorContextType | undefined>(
    undefined
);

export function PrimaryColorProvider({ children }: { children: React.ReactNode }) {
    const [primaryColor, setPrimaryColor] = useState<PrimaryColor>("red");

    useEffect(() => {
        // Load from local storage
        const stored = localStorage.getItem("primary-color") as PrimaryColor;
        if (stored) {
            setPrimaryColor(stored);
        }
    }, []);

    useEffect(() => {
        // Apply to document
        const root = document.documentElement;
        if (primaryColor === "default") {
            root.removeAttribute("data-primary");
        } else {
            root.setAttribute("data-primary", primaryColor);
        }
        localStorage.setItem("primary-color", primaryColor);
    }, [primaryColor]);

    return (
        <PrimaryColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
            {children}
        </PrimaryColorContext.Provider>
    );
}

export function usePrimaryColor() {
    const context = useContext(PrimaryColorContext);
    if (context === undefined) {
        throw new Error("usePrimaryColor must be used within a PrimaryColorProvider");
    }
    return context;
}
