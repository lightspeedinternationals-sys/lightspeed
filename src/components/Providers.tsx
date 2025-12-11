"use client";

import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import CursorTrail from "@/components/CursorTrail";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate content loading and show splash for minimum time
        const minLoadTime = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(minLoadTime);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
                <TooltipProvider>
                    <CursorTrail />
                    <SplashScreen isLoading={isLoading} />
                    <Toaster />
                    <Sonner />
                    {children}
                </TooltipProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
