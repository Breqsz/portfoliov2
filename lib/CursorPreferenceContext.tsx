"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

const STORAGE_KEY = "portfolio-cursor-enabled";

type CursorPreferenceContextValue = {
  cursorEnabled: boolean;
  setCursorEnabled: (enabled: boolean) => void;
};

const CursorPreferenceContext = createContext<CursorPreferenceContextValue | null>(null);

export function CursorPreferenceProvider({ children }: { children: React.ReactNode }) {
  const [cursorEnabled, setCursorEnabledState] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "false") setCursorEnabledState(false);
    if (stored === "true") setCursorEnabledState(true);
    setMounted(true);
  }, []);

  const setCursorEnabled = useCallback((enabled: boolean) => {
    setCursorEnabledState(enabled);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, String(enabled));
    }
  }, []);

  const value = mounted ? { cursorEnabled, setCursorEnabled } : { cursorEnabled: true, setCursorEnabled };

  return (
    <CursorPreferenceContext.Provider value={value}>
      {children}
    </CursorPreferenceContext.Provider>
  );
}

export function useCursorPreference() {
  const ctx = useContext(CursorPreferenceContext);
  if (!ctx) return { cursorEnabled: true, setCursorEnabled: () => {} };
  return ctx;
}
