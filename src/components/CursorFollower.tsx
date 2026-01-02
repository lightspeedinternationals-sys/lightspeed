"use client";

import { useEffect, useState, useRef } from 'react';
import { Package } from 'lucide-react';

const CursorFollower = () => {
    // Refs for direct DOM manipulation (No re-renders)
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef({ x: 0, y: 0 });
    const followerRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();
    const isVisible = useRef(false);

    // Only use state for hover styles (much less frequent than mousemove)
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Accessibility and Device checks
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const onMouseMove = (e: MouseEvent) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible.current && containerRef.current) {
                isVisible.current = true;
                containerRef.current.style.opacity = "1";
            }
        };

        const onMouseDown = () => setIsHovering(true);
        const onMouseUp = () => setIsHovering(false);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
            if (isClickable) setIsHovering(true);
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
            if (isClickable) setIsHovering(false);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mouseout', onMouseOut);

        const animate = () => {
            // Smooth LERP
            const smoothing = 0.15;
            followerRef.current.x += (cursorRef.current.x - followerRef.current.x) * smoothing;
            followerRef.current.y += (cursorRef.current.y - followerRef.current.y) * smoothing;

            if (containerRef.current) {
                // Direct DOM update - High Performance
                containerRef.current.style.transform = `translate3d(${followerRef.current.x}px, ${followerRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        if (containerRef.current) {
            containerRef.current.style.opacity = "0"; // Start hidden
        }
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseout', onMouseOut);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    // Initial render is null or hidden, visibility handled by ref/style

    return (
        <div
            ref={containerRef}
            className={`cursor-follower fixed pointer-events-none z-[100] transition-colors duration-300 ease-out hidden md:flex items-center justify-center opacity-0
                ${isHovering
                    ? 'w-12 h-12 bg-red-600/10 border-red-500 border-2'
                    : 'w-8 h-8 border-red-500/50 border bg-transparent'}
            `}
            style={{
                left: 0,
                top: 0,
                borderRadius: '50%',
                willChange: 'transform' // Hardware acceleration hint
            }}
        >
            {/* Inner glow/aura */}
            <div className={`absolute inset-0 rounded-full bg-red-500/20 blur-md transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />

            {/* Icon that appears on hover */}
            <Package
                className={`text-red-500 transition-all duration-300 ${isHovering ? 'opacity-100 scale-75' : 'opacity-0 scale-50'}`}
                strokeWidth={2.5}
            />
        </div>
    );
};

export default CursorFollower;
