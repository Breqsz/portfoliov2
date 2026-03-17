"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLocale } from "@/lib/i18n/context";
import { useCursorPreference } from "@/lib/CursorPreferenceContext";

const SPRING_MAIN = { stiffness: 500, damping: 28 };
const SPRING_TRAIL = { stiffness: 150, damping: 20 };
const SPOTLIGHT_SIZE = 480;
const CURSOR_SIZE = 14;
const TRAIL_SIZE = 9;
const SCALE_LINK = 1.6;
const SCALE_PROJECT = 1.8;

type CursorState = "default" | "link" | "card" | "project";

function getCursorState(x: number, y: number): CursorState {
  if (typeof document === "undefined") return "default";
  const elements = document.elementsFromPoint(x, y);
  for (const el of elements) {
    const cursor = el.getAttribute?.("data-cursor");
    if (cursor === "project" || cursor === "link" || cursor === "card") {
      return cursor as CursorState;
    }
  }
  return "default";
}

function getCursorLabel(x: number, y: number, state: CursorState, defaultViewLabel: string): string {
  if (typeof document === "undefined") return "";
  if (state === "default") return "";
  const elements = document.elementsFromPoint(x, y);
  for (const el of elements) {
    const customLabel = el.getAttribute?.("data-cursor-label");
    if (customLabel) return customLabel;
  }
  if (state === "project") return defaultViewLabel;
  return "";
}

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const { cursorEnabled } = useCursorPreference();
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  const mouseX = useSpring(0, SPRING_MAIN);
  const mouseY = useSpring(0, SPRING_MAIN);
  const trailX = useSpring(0, SPRING_TRAIL);
  const trailY = useSpring(0, SPRING_TRAIL);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorLabel, setCursorLabel] = useState("");

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const state = getCursorState(e.clientX, e.clientY);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      setCursorState(state);
      setCursorLabel(getCursorLabel(e.clientX, e.clientY, state, t("projects.viewProject")));
    },
    [mouseX, mouseY, trailX, trailY, t]
  );

  useEffect(() => {
    setMounted(true);
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 1024;
    setIsPointer(!coarse && !narrow);
  }, []);

  useEffect(() => {
    if (!mounted || reducedMotion || !isPointer || !cursorEnabled) return;
    document.body.classList.add("cursor-custom-active");
    window.addEventListener("mousemove", handleMove);
    return () => {
      document.body.classList.remove("cursor-custom-active");
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mounted, reducedMotion, isPointer, cursorEnabled, handleMove]);

  if (!mounted || reducedMotion || !isPointer || !cursorEnabled) return null;

  const scale =
    cursorState === "project" ? SCALE_PROJECT : cursorState === "link" || cursorState === "card" ? SCALE_LINK : 1;
  const showLabel = cursorState !== "default" && cursorLabel !== "";

  return (
    <>
      {/* Spotlight: positioned at cursor so gradient stays centered */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          width: SPOTLIGHT_SIZE * 2,
          height: SPOTLIGHT_SIZE * 2,
          background: "radial-gradient(circle, rgba(59,130,246,0.11) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Trail dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border border-white/35 bg-white/15"
        style={{
          width: TRAIL_SIZE,
          height: TRAIL_SIZE,
          left: trailX,
          top: trailY,
          x: "-50%",
          y: "-50%",
        }}
        aria-hidden
      />

      {/* Main cursor + label */}
      <motion.div
        className="pointer-events-none fixed z-[9999] flex items-center gap-2"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
        }}
        aria-hidden
      >
        <motion.div
          className="rounded-full border-2 border-white/50 bg-white/25 shadow-[0_0_16px_rgba(59,130,246,0.25)]"
          style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
        <motion.span
          className="whitespace-nowrap text-xs font-medium text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: showLabel ? 1 : 0,
            scale: showLabel ? 1 : 0.8,
          }}
          transition={{ duration: 0.15 }}
        >
          {showLabel ? cursorLabel : ""}
        </motion.span>
      </motion.div>
    </>
  );
}
