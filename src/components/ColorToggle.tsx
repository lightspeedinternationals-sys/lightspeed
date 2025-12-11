"use client";

import * as React from "react";
import { Palette } from "lucide-react";
import { usePrimaryColor } from "@/components/PrimaryColorProvider";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

export function ColorToggle() {
  const { setPrimaryColor, primaryColor } = usePrimaryColor();

  const colors = [
    { name: "Zinc (Default)", value: "default", class: "bg-zinc-400" },
    { name: "Red", value: "red", class: "bg-red-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Orange", value: "orange", class: "bg-orange-500" },
    { name: "Rose", value: "rose", class: "bg-rose-500" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Toggle color</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colors.map((color) => (
          <DropdownMenuItem
            key={color.value}
            onClick={() => setPrimaryColor(color.value as any)}
            className="flex items-center gap-2"
          >
            <div className={cn("h-4 w-4 rounded-full border", color.class)} />
            {color.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
