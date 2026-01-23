"use client";

import { createContext, useContext, ReactNode } from "react";

interface SidebarContextValue {
    sidebarRef: React.RefObject<HTMLElement | null>;
    overlayRef: React.RefObject<HTMLElement | null>;
    closeSidebar: () => void;
    toggleSidebar: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children, sidebarRef, overlayRef, closeSidebar, toggleSidebar }: { children: ReactNode; sidebarRef: React.RefObject<HTMLElement | null>; overlayRef: React.RefObject<HTMLElement | null>; closeSidebar: () => void; toggleSidebar: (isOpen: boolean) => void }) {
    return (
        <SidebarContext.Provider
            value={{
                sidebarRef,
                overlayRef,
                closeSidebar,
                toggleSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebarContext() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within SidebarProvider");
    }
    return context;
}
