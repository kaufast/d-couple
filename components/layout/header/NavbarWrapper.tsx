"use client";

import { useNavbarRef } from "./HeaderWrapper";

interface NavbarWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function NavbarWrapper({ children, className = "" }: NavbarWrapperProps) {
    const navbarRefCallback = useNavbarRef();

    // Handle null case - if context is not available, use a no-op callback
    const refCallback = navbarRefCallback || (() => {});

    return (
        <nav ref={refCallback} className={`navbar ${className}`}>
            {children}
        </nav>
    );
}

