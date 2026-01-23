// util/useSidebarMenu.ts
import { useCallback } from "react";

const useSidebarMenu = () => {
    // Toggle sidebar function - uses fallback DOM manipulation
    // This is used by HeaderWrapper which is outside SidebarProvider
    // In a perfect world, we'd wrap HeaderWrapper and OffcanvasClient in a shared provider
    // But for now, this provides backward compatibility
    const toggleSidebar = useCallback((isOpen: boolean) => {
        if (typeof window === "undefined") return;

        const sidebarLeft = document.querySelector(".sidebar-left");
        const sidebarOverlay = document.querySelector(".sidebar-overlay");

        if (!sidebarLeft || !sidebarOverlay) return;

        if (isOpen) {
            sidebarLeft.classList.add("active");
            sidebarOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        } else {
            sidebarLeft.classList.remove("active");
            sidebarOverlay.classList.remove("active");
            document.body.style.overflow = "";
        }
    }, []);

    return { toggleSidebar };
};

export default useSidebarMenu;
