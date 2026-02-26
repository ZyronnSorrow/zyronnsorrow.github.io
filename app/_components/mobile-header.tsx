"use client"

import { useState } from "react";
import clsx from "clsx";

import NavLinks from "@/app/_components/nav-links";

export default function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClicked = () => {
        setIsOpen(false);
    };

    return (
        <div className="mobile-only">
            <button onClick={handleClick}>X</button>
            <div className={clsx("absolute z-40", { "hidden": !isOpen })}>
                <NavLinks onLinkClicked={handleLinkClicked} />
            </div>
        </div>
    );
}
