"use client";

import { useRef, useCallback } from "react";
import { SidebarProvider } from "./SidebarContext";

interface SidebarWrapperProps {
    children: React.ReactNode;
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
    const sidebarRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLElement>(null);

    const toggleSidebar = useCallback((open: boolean) => {
        if (sidebarRef.current) {
            if (open) {
                sidebarRef.current.classList.add("active");
            } else {
                sidebarRef.current.classList.remove("active");
            }
        }
        if (overlayRef.current) {
            if (open) {
                overlayRef.current.classList.add("active");
            } else {
                overlayRef.current.classList.remove("active");
            }
        }
        if (typeof document !== "undefined") {
            if (open) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }
    }, []);

    const closeSidebar = useCallback(() => {
        toggleSidebar(false);
    }, [toggleSidebar]);

    return (
        <SidebarProvider sidebarRef={sidebarRef} overlayRef={overlayRef} closeSidebar={closeSidebar} toggleSidebar={toggleSidebar}>
            {children}
        </SidebarProvider>
    );
}
