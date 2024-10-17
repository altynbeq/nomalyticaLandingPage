import React, { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


function cn(...inputs) {
    return twMerge(clsx(...inputs));
  }
  

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // ... (keep the existing gradientCoordinates calculation)
  const gradientCoordinates = reverse
  ? {
      x1: ["90%", "-10%"],
      x2: ["100%", "0%"],
      y1: ["0%", "0%"],
      y2: ["0%", "0%"],
    }
  : {
      x1: ["10%", "110%"],
      x2: ["0%", "100%"],
      y1: ["0%", "0%"],
      y2: ["0%", "0%"],
    };
    
    useEffect(() => {
        const updatePath = () => {
          // Check if all refs are available
          if (!containerRef.current || !fromRef.current || !toRef.current) {
            console.warn("AnimatedBeam: One or more refs are not available");
            return;
          }
      
          try {
            const containerRect = containerRef.current.getBoundingClientRect();
            const fromRect = fromRef.current.getBoundingClientRect();
            const toRect = toRef.current.getBoundingClientRect();
      
            const svgWidth = containerRect.width || 0;
            const svgHeight = containerRect.height || 0;
      
            setSvgDimensions({ width: svgWidth, height: svgHeight });
      
            const fromCenterX = (fromRect.left + fromRect.width / 2 - containerRect.left) || 0;
            const fromCenterY = (fromRect.top + fromRect.height / 2 - containerRect.top) || 0;
            const toCenterX = (toRect.left + toRect.width / 2 - containerRect.left) || svgWidth;
            const toCenterY = (toRect.top + toRect.height / 2 - containerRect.top) || svgHeight;
      
            const startX = fromCenterX + startXOffset;
            const startY = fromCenterY + startYOffset;
            const endX = toCenterX + endXOffset;
            const endY = toCenterY + endYOffset;
      
            const deltaX = endX - startX;
            const deltaY = endY - startY;
      
            const controlX = startX + deltaX / 2;
            const controlY = startY + deltaY / 2 - curvature;
      
            const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
            setPathD(d);
          } catch (error) {
            console.error("Error in AnimatedBeam updatePath:", error);
          }
        };
      
        const resizeObserver = new ResizeObserver(() => {
          requestAnimationFrame(updatePath);
        });
      
        if (containerRef.current) {
          resizeObserver.observe(containerRef.current);
        } else {
          console.warn("AnimatedBeam: containerRef is not available for observation");
        }
      
        // Initial update
        updatePath();
      
        return () => {
          resizeObserver.disconnect();
        };
      }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
      ]);

  // ... (keep the existing return statement with the SVG content)
  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
