"use client";

import { useSidebarContext } from "./SidebarContext";
import CloseSidebarButton from "./CloseSidebarButton";

export default function CloseSidebarButtonWrapper() {
    const { closeSidebar } = useSidebarContext();
    return <CloseSidebarButton onClick={closeSidebar} />;
}
