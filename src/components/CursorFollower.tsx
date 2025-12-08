"use client";

import { useEffect, useState, useRef } from 'react';
import { Package } from 'lucide-react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Refs for smooth animation
    const cursorRef = useRef({ x: 0, y: 0 });
    const followerRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();
    const prefersReducedMotion = useRef(false);

    useEffect(() => {
        // Accessibility and Device checks
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReducedMotion.current = mediaQuery.matches;

        if (isTouchDevice) return;

        const onMouseMove = (e: MouseEvent) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const onMouseDown = () => setIsHovering(true);
        const onMouseUp = () => setIsHovering(false);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expanded interactivity check
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
            if (isClickable) {
                setIsHovering(true);
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"], .interactive');
            if (isClickable) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mouseout', onMouseOut);

        const animate = () => {
            if (prefersReducedMotion.current) {
                // No smoothing for reduced motion preferences
                followerRef.current.x = cursorRef.current.x;
                followerRef.current.y = cursorRef.current.y;
            } else {
                // Linear interpolation (LERP) for smooth following (Momentum effect)
                // Lower value = heavier/slower (more momentum), Higher = lighter/faster
                const smoothing = 0.12;

                followerRef.current.x += (cursorRef.current.x - followerRef.current.x) * smoothing;
                followerRef.current.y += (cursorRef.current.y - followerRef.current.y) * smoothing;
            }

            setPosition({ x: followerRef.current.x, y: followerRef.current.y });
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mouseout', onMouseOut);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className={`cursor-follower fixed pointer-events-none z-[100] transition-all duration-500 ease-out hidden md:flex items-center justify-center
                ${isHovering
                    ? 'w-12 h-12 bg-red-600/10 border-red-500 border-2'
                    : 'w-8 h-8 border-red-500/50 border bg-transparent'}
            `}
            style={{
                left: 0,
                top: 0,
                transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
                borderRadius: '50%',
                willChange: 'transform, width, height, border-color'
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
