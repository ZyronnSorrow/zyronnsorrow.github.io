"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
    onToggleClicked?: () => void;
}

export default function ThemeToggle({ onToggleClicked}: ThemeToggleProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const initialThemeSet = useRef(false);

    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        onToggleClicked?.();
    };

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
        <button onClick={handleClick}>
            {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
    );
}
