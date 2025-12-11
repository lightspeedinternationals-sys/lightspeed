"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Zinc (Default)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("red")}>
                    Red
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("blue")}>
                    Blue
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("green")}>
                    Green
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("orange")}>
                    Orange
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("rose")}>
                    Rose
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
