"use client";

import { useRef, useCallback } from "react";
import { useSpring } from "framer-motion";

interface UseMagneticEffectOptions {
  strength?: number;
  stiffness?: number;
  damping?: number;
}

export function useMagneticEffect(options: UseMagneticEffectOptions = {}) {
  const {
    strength = 0.35,
    stiffness = 300,
    damping = 25,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const springConfig = { stiffness, damping };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      x.set(deltaX);
      y.set(deltaY);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}
