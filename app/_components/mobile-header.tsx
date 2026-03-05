"use client"

import { useState } from "react";
import clsx from "clsx";

import NavLinks from "@/app/_components/nav-links";
import ThemeToggle from "@/app/_components/theme-toggle";

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClicked = () => {
        setIsOpen(false);
    };

    const handleThemeToggleClicked = () => {
        setIsOpen(false);
    };

    return (
        <div className="mobile-only sticky top-0 z-50">
            <button onClick={handleClick}>X</button>
            <div className={clsx("bg-red-800 max-w-1/2", { "hidden": !isOpen })}>
                <ThemeToggle onToggleClicked={handleThemeToggleClicked} />
                <NavLinks onLinkClicked={handleLinkClicked} />
            </div>
        </div>
    );
}
