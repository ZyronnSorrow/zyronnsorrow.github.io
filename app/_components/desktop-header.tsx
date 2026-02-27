import NavLinks from "@/app/_components/nav-links";

export default function DesktopHeader() {
    return (
        <div className="desktop-only bg-red-800 sticky top-0 z-50">
            <h1>Kev The Dev</h1>
            <NavLinks />
        </div>
    );
}
