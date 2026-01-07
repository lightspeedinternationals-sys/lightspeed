# Product Requirements Document (PRD): Interactive Cobe Globe Animation

## 1. Overview
The **Interactive Cobe Globe** is a premium, high-performance 3D visualization component designed to showcase the global logistics capabilities of Lightspeed International. It utilizes the lightweight `cobe` WebGL library to render a stunning, interactive globe that aligns with the specialized "premium logistics" aesthetic of the user interface.

## 2. Goals & Objectives
- **Visual Impact**: Create a "wow" factor layout element that immediately communicates global reach.
- **Interactivity**: Allow users to engage with the globe (drag to rotate), enhancing time-on-site and engagement.
- **Brand Alignment**: Use brand colors (Primary Red and Gold) for globe elements to ensure seamless visual integration.
- **Performance**: Ensure 60fps performance on all devices using `cobe`'s optimized WebGL rendering, with a small bundle size footprint (<5kb).

## 3. Visual Design Requirements
The design will replicate the popular "Cobe" aesthetic—a dotted, holographic representation of the earth—customized for Lightspeed International.

### 3.1. Aesthetic Details
- **Globe Base**: A grid of dots (points) representing landmasses, offering a futuristic, tech-forward look.
- **Colors**:
    - **Base Dots**: Muted/Dark tone to blend with the background (e.g., `#334155` or transparent).
    - **Active/Highlighted Dots**: Brand Primary Red (`hsl(354, 70%, 58%)`) or Gold (`hsl(43, 80%, 45%)`) to highlight active regions.
    - **Markers**: Glowing "hotspots" indicating key logistical hubs (e.g., NY, London, Mumbai, Tokyo).
- **Background**: Transparent canvas to allow placement over dark gradients or glassmorphism panels.
- **Micro-interactions**:
    - Smooth inertia when releasing a drag.
    - Gentle auto-rotation when idle.

### 3.2. Responsive Design
- The globe must scale appropriately:
    - **Desktop**: 600px+ size, positioned alongside text content.
    - **Mobile**: Smaller (~300-400px), centered, potentially acting as a background element.

## 4. Functional Requirements

### 4.1. Core Features
| Feature | Description | Priority |
| :--- | :--- | :--- |
| **3D Rendering** | Real-time WebGL rendering of the Earth sphere. | P0 |
| **Draggable** | Users can click/touch and drag to rotate the globe. | P0 |
| **Auto-Rotation** | Globe rotates slowly on its axis when not being interacted with. | P1 |
| **Markers** | Visual markers (colored dots/rings) at specific lat/long coordinates. | P1 |
| **Inertia** | Smooth deceleration after dragging. | P1 |

### 4.2. Logistics Data Visualization
- **Hub Locations**: Display markers for major logistics hubs (approximate lat/long):
    - New York (40.7128, -74.0060)
    - London (51.5074, -0.1278)
    - Dubai (25.2048, 55.2708)
    - Singapore (1.3521, 103.8198)
    - Sydney (-33.8688, 151.2093)

## 5. Technical Implementation Plan

### 5.1. Dependencies
- **`cobe`**: The core library for the globe (Essential).
- **`react-spring`** (Optional): Can be used for smoother state transitions (like opacity or size) but standard React `useRef` + `requestAnimationFrame` is sufficient for `cobe` internal state.

### 5.2. Component Architecture
**File**: `src/components/ui/LogisticsGlobe.tsx`

```tsx
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// Props interface for customization
interface LogisticsGlobeProps {
  className?: string;
}

export function LogisticsGlobe({ className }: LogisticsGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1, // 1 for dark mode style
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3], // RGB vectors
      markerColor: [1, 0.2, 0.2], // Brand Red
      glowColor: [1, 0.8, 0.2], // Brand Gold
      markers: [
        { location: [40.7128, -74.0060], size: 0.1 }, // NY
        // ... other markers
      ],
      onRender: (state) => {
        // Animation logic (auto-rotation + drag)
        state.phi = phi;
        phi += 0.005; 
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
```

### 5.3. Integration Strategy
- **Location**: Create a new section component `src/components/sections/GlobalReach.tsx`.
- **Layout**:
    - **Left/Top**: "Global Reach" typography, identifying Lightspeed as a worldwide carrier.
    - **Right/Bottom**: The `LogisticsGlobe` component.
- **Styling**: Wrap the canvas in a container that handles sizing `w-full max-w-[600px] aspect-square`.

## 6. Detailed Styling Specification
- **Canvas Size**: Double the display size for high DPI (Retina) clarity.
- **Colors (GLSL equivalents)**:
    - Primary Red: `[0.93, 0.26, 0.27]`
    - Gold: `[0.85, 0.64, 0.0]`
    - Background: Transparent (handled by CSS `opacity` or standard canvas clear).

## 7. Action Plan
1.  **Install**: `npm install cobe`
2.  **Create Component**: Implement `LogisticsGlobe.tsx`.
3.  **Create Section**: Implement `GlobalReach.tsx`.
4.  **Update Page**: Add `GlobalReach` to the Landing Page.
5.  **Verify**: Check performance and visuals on Main and Mobile breakpoints.
