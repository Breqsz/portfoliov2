"use client";

import { useState, useCallback, useRef } from "react";

interface SpotlightPosition {
  x: number;
  y: number;
  opacity: number;
}

export function useSpotlight() {
  const [position, setPosition] = useState<SpotlightPosition>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y, opacity: 1 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition((p) => ({ ...p, opacity: 0 }));
  }, []);

  return { ref, position, handleMouseMove, handleMouseLeave };
}
