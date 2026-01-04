"use client";

import { useEffect, useState, useRef } from 'react';
import { Package } from 'lucide-react';

const CursorFollower = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null); // Wrap icon in div for ref access

    const cursorRef = useRef({ x: 0, y: 0 });
    const followerRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();
    const isVisible = useRef(false);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        // Visual state refs to avoid reading DOM
        let isHovering = false;

        const updateHoverState = (hover: boolean) => {
            if (isHovering === hover) return;
            isHovering = hover;

            if (containerRef.current && glowRef.current && iconContainerRef.current) {
                if (hover) {
                    // Hover State
                    containerRef.current.style.width = '48px';
                    containerRef.current.style.height = '48px';
                    containerRef.current.style.backgroundColor = 'rgba(220, 38, 38, 0.1)'; // bg-red-600/10
                    containerRef.current.style.borderColor = 'rgb(239, 68, 68)'; // border-red-500
                    containerRef.current.style.borderWidth = '2px';

                    glowRef.current.style.opacity = '1';

                    iconContainerRef.current.style.opacity = '1';
                    iconContainerRef.current.style.transform = 'scale(0.75)';
                } else {
                    // Normal State
                    containerRef.current.style.width = '32px';
                    containerRef.current.style.height = '32px';
                    containerRef.current.style.backgroundColor = 'transparent';
                    containerRef.current.style.borderColor = 'rgba(239, 68, 68, 0.5)'; // border-red-500/50
                    containerRef.current.style.borderWidth = '1px';

                    glowRef.current.style.opacity = '0';

                    iconContainerRef.current.style.opacity = '0';
                    iconContainerRef.current.style.transform = 'scale(0.5)';
                }
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible.current && containerRef.current) {
                isVisible.current = true;
                containerRef.current.style.opacity = "1";
            }
        };

        const onMouseDown = () => updateHoverState(true);
        const onMouseUp = () => updateHoverState(false);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, textarea, select, [role="button"], .interactive')) {
                updateHoverState(true);
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, textarea, select, [role="button"], .interactive')) {
                updateHoverState(false);
            }
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        window.addEventListener('mousedown', onMouseDown, { passive: true });
        window.addEventListener('mouseup', onMouseUp, { passive: true });
        window.addEventListener('mouseover', onMouseOver, { passive: true });
        window.addEventListener('mouseout', onMouseOut, { passive: true });

        const animate = () => {
            const smoothing = 0.25;
            followerRef.current.x += (cursorRef.current.x - followerRef.current.x) * smoothing;
            followerRef.current.y += (cursorRef.current.y - followerRef.current.y) * smoothing;

            if (containerRef.current) {
                containerRef.current.style.transform = `translate3d(${followerRef.current.x}px, ${followerRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        if (containerRef.current) {
            containerRef.current.style.opacity = "0";
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

    return (
        <div
            ref={containerRef}
            className="cursor-follower fixed pointer-events-none z-[100] transition-colors duration-300 ease-out hidden md:flex items-center justify-center opacity-0 border-red-500/50 border bg-transparent w-8 h-8"
            style={{
                left: 0,
                top: 0,
                borderRadius: '50%',
                willChange: 'transform, width, height, border-color'
            }}
        >
            <div
                ref={glowRef}
                className="absolute inset-0 rounded-full bg-red-500/20 blur-md transition-opacity duration-300 opacity-0"
            />

            <div ref={iconContainerRef} className="transition-all duration-300 opacity-0 transform scale-50">
                <Package
                    className="text-red-500"
                    strokeWidth={2.5}
                />
            </div>
        </div>
    );
};

export default CursorFollower;
