"use client";

import { createContext, useContext, useRef, ReactNode, useState, useCallback } from "react";

interface HeaderContextValue {
    navbarRef: React.RefObject<HTMLElement | null>;
    handleSearchClick: () => void;
    handleNavbarTogglerClick: () => void;
}

const HeaderContext = createContext<HeaderContextValue | null>(null);

export function HeaderProvider({ children, navbarRef, handleSearchClick, handleNavbarTogglerClick }: { children: ReactNode; navbarRef: React.RefObject<HTMLElement | null>; handleSearchClick: () => void; handleNavbarTogglerClick: () => void }) {
    return (
        <HeaderContext.Provider
            value={{
                navbarRef,
                handleSearchClick,
                handleNavbarTogglerClick,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeaderContext() {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error("useHeaderContext must be used within HeaderProvider");
    }
    return context;
}
