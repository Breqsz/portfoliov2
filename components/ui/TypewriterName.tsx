"use client";

import { useState, useEffect } from "react";

const FULL_NAME = "Guilherme Rocha Bianchini";
const TYPO_AT = "Guilherme Rochha Bianchini"; // extra 'h' in Rocha
const TYPO_INDEX = 12; // position where typo occurs (after "Roch")

export function TypewriterName() {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "typo-pause" | "backspace" | "fix" | "done">("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (phase === "typing") {
      if (display.length < TYPO_AT.length) {
        const timer = setTimeout(() => {
          setDisplay(TYPO_AT.slice(0, display.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      }
      setPhase("typo-pause");
      return;
    }

    if (phase === "typo-pause") {
      const timer = setTimeout(() => setPhase("backspace"), 800);
      return () => clearTimeout(timer);
    }

    if (phase === "backspace") {
      if (display.length > TYPO_INDEX) {
        const timer = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, 60);
        return () => clearTimeout(timer);
      }
      setPhase("fix");
      return;
    }

    if (phase === "fix") {
      if (display.length < FULL_NAME.length) {
        const timer = setTimeout(() => {
          setDisplay(FULL_NAME.slice(0, display.length + 1));
        }, 70);
        return () => clearTimeout(timer);
      }
      setPhase("done");
    }
  }, [display, phase]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block">
      {display}
      <span
        className={`inline-block w-0.5 align-middle transition-opacity duration-100 ${
          cursorVisible && (phase === "typing" || phase === "typo-pause" || phase === "backspace" || phase === "fix")
            ? "opacity-100"
            : "opacity-0"
        }`}
        style={{ height: "0.9em", marginLeft: "2px", background: "currentColor" }}
        aria-hidden
      />
    </span>
  );
}
