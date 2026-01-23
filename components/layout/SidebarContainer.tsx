"use client";

import { useSidebarContext } from "./SidebarContext";

interface SidebarContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function SidebarContainer({ children, className = "" }: SidebarContainerProps) {
    const { sidebarRef } = useSidebarContext();
    return (
        <div ref={sidebarRef as React.RefObject<HTMLDivElement>} className={`sidebar-left ${className}`}>
            {children}
        </div>
    );
}
