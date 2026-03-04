"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const initialThemeSet = useRef(false);

    useEffect(() => {
        const t = setTimeout(() => {
            setMounted(true);
            if (!initialThemeSet.current) {
                initialThemeSet.current = true;
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                setTheme(prefersDark ? "dark" : "light");
            }
        }, 0);
        return () => clearTimeout(t);
    }, [setTheme]);

    if (!mounted) {
        return null;
    }

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
}
