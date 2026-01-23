"use client";

import React, { useRef, useState, useCallback } from "react";
import HeaderInteractive from "./HeaderInteractive";
import useSidebarMenu from "@/util/useSidebarMenu";
import PopupSearch from "@/components/layout/cardPopupSearchServer";
import { HeaderProvider, useHeaderContext } from "./HeaderContext";

// Create a separate context for navbar ref callback (must be defined before use)
const HeaderRefContext = React.createContext<((node: HTMLElement | null) => void) | null>(null);

export function useNavbarRef() {
    return React.useContext(HeaderRefContext);
}

interface HeaderWrapperProps {
    children: React.ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
    const navbarRef = useRef<HTMLElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { toggleSidebar } = useSidebarMenu();

    const handleSearchClick = useCallback(() => {
        setIsSearchOpen(true);
    }, []);

    const handleNavbarTogglerClick = useCallback(() => {
        toggleSidebar(true);
    }, [toggleSidebar]);

    // Store ref in context for NavbarWrapper to use
    const navbarRefCallback = useCallback((node: HTMLElement | null) => {
        if (node) {
            navbarRef.current = node;
        }
    }, []);

    return (
        <HeaderProvider navbarRef={navbarRef} handleSearchClick={handleSearchClick} handleNavbarTogglerClick={handleNavbarTogglerClick}>
            <HeaderRefContext.Provider value={navbarRefCallback}>{children}</HeaderRefContext.Provider>
            <HeaderInteractive navbarRef={navbarRef} onSearchClick={handleSearchClick} onNavbarTogglerClick={handleNavbarTogglerClick} />
            <PopupSearch open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </HeaderProvider>
    );
}

// Note: Use HeaderSearchButton and HeaderNavbarToggler components instead of static properties
// They are exported separately to avoid issues with Next.js Server Components
