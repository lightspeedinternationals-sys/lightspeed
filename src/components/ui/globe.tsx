"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
    className?: string;
}

export function Globe({ className }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [239 / 255, 68 / 255, 68 / 255], // Primary Red #EF4444 (approx)
            glowColor: [234 / 255, 179 / 255, 8 / 255], // Gold #EAB308
            opacity: 0.8,
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
                { location: [40.7128, -74.006], size: 0.03 }, // New York
                { location: [51.5074, -0.1278], size: 0.03 }, // London
                { location: [25.2048, 55.2708], size: 0.05 }, // Dubai (Hub)
                { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
                { location: [-33.8688, 151.2093], size: 0.03 }, // Sydney
                { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
                { location: [19.076, 72.8777], size: 0.03 }, // Mumbai
                { location: [55.7558, 37.6173], size: 0.03 }, // Moscow
                { location: [-23.5505, -46.6333], size: 0.03 }, // Sao Paulo
                { location: [4.7110, -74.0721], size: 0.03 }, // Bogota
                { location: [6.5244, 3.3792], size: 0.03 }, // Lagos
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={cn("w-full max-w-[600px] aspect-square mx-auto relative cursor-grab active:cursor-grabbing", className)}>
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', opacity: 0 }}
                className="w-full h-full transition-opacity duration-1000 ease-in-out opacity-100"
            />
        </div>
    );
}
