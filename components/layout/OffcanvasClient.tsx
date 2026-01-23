"use client";

import SidebarWrapper from "./SidebarWrapper";
import SidebarContainer from "./SidebarContainer";
import SidebarOverlay from "./SidebarOverlay";
import OffcanvasServerContent from "./OffcanvasServerContent";

export default function OffcanvasClient() {
    return (
        <SidebarWrapper>
            <SidebarContainer>
                <OffcanvasServerContent />
            </SidebarContainer>
            <SidebarOverlay />
        </SidebarWrapper>
    );
}
