"use client";

import * as React from "react";
import { Monitor, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function BackgroundToggle() {
    const [bgTheme, setBgTheme] = React.useState("light-gray");

    React.useEffect(() => {
        // Load preference from localStorage
        const saved = localStorage.getItem("bg-theme") || "light-gray";
        setBgTheme(saved);
        document.body.setAttribute("data-bg-theme", saved);
    }, []);

    const handleSetTheme = (theme: string) => {
        setBgTheme(theme);
        localStorage.setItem("bg-theme", theme);
        document.body.setAttribute("data-bg-theme", theme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" title="Switch Background Theme">
                    <Monitor className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle Background</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleSetTheme("default")}>
                    <Square className="mr-2 h-4 w-4 fill-white text-gray-400" />
                    Default (White)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSetTheme("light-gray")}>
                    <div className="mr-2 h-4 w-4 rounded bg-[#D3D3D3] border border-gray-300" />
                    Light Gray
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSetTheme("dark-gray")}>
                    <div className="mr-2 h-4 w-4 rounded bg-[#2E2E2E] border border-gray-600" />
                    Dark Gray
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
