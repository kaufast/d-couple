"use client";

import { useSidebarContext } from "./SidebarContext";

export default function SidebarOverlay() {
    const { overlayRef, closeSidebar } = useSidebarContext();
    return (
        <div
            ref={overlayRef as React.RefObject<HTMLDivElement>}
            className="sidebar-overlay"
            onClick={closeSidebar}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    closeSidebar();
                }
            }}
            aria-label="Close sidebar"
        />
    );
}
