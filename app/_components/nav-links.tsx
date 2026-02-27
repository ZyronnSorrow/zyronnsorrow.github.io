"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { pages } from "@/app/_data/pages";

interface NavLinksProps {
    onLinkClicked?: () => void;
}

export default function NavLinks({ onLinkClicked }: NavLinksProps) {
    const pathname = usePathname();

    const handleClick = () => {
        onLinkClicked?.();
    };

    return (
        <nav>
            {pages.map((page) => (
                <Link
                    key={page.path}
                    href={page.path}
                    className={clsx("mx-4",
                        { 'text-black': pathname == page.path }
                    )}
                    onClick={handleClick}
                >
                    {page.name}
                </Link>
            ))}
        </nav>
    );
}
