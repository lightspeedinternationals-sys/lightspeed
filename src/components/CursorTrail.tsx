"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Point {
    x: number;
    y: number;
    id: number;
}

const CursorTrail = () => {
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPoints((prev) => {
                const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };
                return [...prev.slice(-20), newPoint];
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            <AnimatePresence>
                {points.map((point, index) => (
                    <motion.div
                        key={point.id}
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute rounded-full bg-primary/30 blur-sm"
                        style={{
                            left: point.x,
                            top: point.y,
                            width: 10 + index * 0.5, // Larger for more recent points
                            height: 10 + index * 0.5,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrail;
