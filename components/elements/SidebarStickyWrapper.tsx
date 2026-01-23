"use client";
import { useEffect, useRef, useCallback } from "react";

interface SidebarStickyWrapperProps {
    children: React.ReactNode;
    topSpacing?: number;
    bottomSpacing?: number;
    containerSelector?: string;
    stickyClass?: string;
    minWidth?: number;
}

type AffixType = "STATIC" | "VIEWPORT-TOP" | "VIEWPORT-BOTTOM" | "CONTAINER-BOTTOM";

interface Dimensions {
    translateY: number;
    topSpacing: number;
    bottomSpacing: number;
    sidebarHeight: number;
    sidebarWidth: number;
    containerTop: number;
    containerHeight: number;
    containerBottom: number;
    viewportHeight: number;
    viewportTop: number;
    viewportBottom: number;
    sidebarLeft: number;
}

export default function SidebarStickyWrapper({ children, topSpacing = 20, bottomSpacing = 0, containerSelector, stickyClass = "is-affixed", minWidth = 0 }: SidebarStickyWrapperProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const sidebarInnerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement | null>(null);
    const runningRef = useRef(false);
    const directionRef = useRef<"up" | "down">("down");
    const affixedTypeRef = useRef<AffixType>("STATIC");
    const lastScrollYRef = useRef(0);
    const dimensionsRef = useRef<Dimensions>({
        translateY: 0,
        topSpacing: topSpacing,
        bottomSpacing: bottomSpacing,
        sidebarHeight: 0,
        sidebarWidth: 0,
        containerTop: 0,
        containerHeight: 0,
        containerBottom: 0,
        viewportHeight: 0,
        viewportTop: 0,
        viewportBottom: 0,
        sidebarLeft: 0,
    });

    // Calculate dimensions
    const calcDimensions = useCallback(() => {
        if (!sidebarRef.current || !sidebarInnerRef.current) return;

        const sidebar = sidebarRef.current;
        const sidebarInner = sidebarInnerRef.current;
        const container = containerRef.current || sidebar.parentElement;

        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        dimensionsRef.current = {
            ...dimensionsRef.current,
            containerTop: containerRect.top + scrollY,
            containerHeight: containerRect.height,
            containerBottom: containerRect.bottom + scrollY,
            sidebarHeight: sidebarInner.offsetHeight,
            sidebarWidth: sidebarInner.offsetWidth,
            viewportHeight: window.innerHeight,
            sidebarLeft: sidebarRect.left,
        };
    }, []);

    // Calculate dimensions with scroll
    const calcDimensionsWithScroll = useCallback(() => {
        if (!sidebarRef.current) return;

        const sidebar = sidebarRef.current;
        const sidebarRect = sidebar.getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        dimensionsRef.current = {
            ...dimensionsRef.current,
            viewportTop: scrollY,
            viewportBottom: scrollY + dimensionsRef.current.viewportHeight,
            sidebarLeft: sidebarRect.left,
            topSpacing: topSpacing,
            bottomSpacing: bottomSpacing,
        };
    }, [topSpacing, bottomSpacing]);

    // Observe scroll direction
    const observeScrollDir = useCallback(() => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        directionRef.current = currentScrollY > lastScrollYRef.current ? "down" : "up";
        lastScrollYRef.current = currentScrollY;
    }, []);

    // Check if sidebar fits viewport
    const isSidebarFitsViewport = useCallback((dims: Dimensions) => {
        return dims.sidebarHeight + dims.topSpacing + dims.bottomSpacing < dims.viewportHeight;
    }, []);

    // Get affix type
    const getAffixType = useCallback((): AffixType => {
        calcDimensionsWithScroll();

        const dims = dimensionsRef.current;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const colliderTop = scrollY + dims.topSpacing;
        const colliderBottom = scrollY + dims.viewportHeight - dims.bottomSpacing;
        const sidebarBottom = dims.sidebarHeight + dims.containerTop;
        const isScrollingDown = directionRef.current === "down";

        // Check if should be static
        if (colliderTop <= dims.containerTop || dims.containerHeight <= dims.sidebarHeight) {
            dims.translateY = 0;
            return "STATIC";
        }

        // Check if sidebar fits in viewport
        if (isSidebarFitsViewport(dims)) {
            // Sidebar fits, can stick to top
            if (dims.sidebarHeight + colliderTop >= dims.containerBottom) {
                // Reached container bottom
                dims.translateY = dims.containerBottom - sidebarBottom;
                return "CONTAINER-BOTTOM";
            } else if (colliderTop >= dims.containerTop) {
                // Stick to top
                dims.translateY = colliderTop - dims.containerTop;
                return "VIEWPORT-TOP";
            }
        } else {
            // Sidebar doesn't fit, need to handle based on scroll direction
            // Calculate sidebar bottom position in document (absolute position)
            const sidebarBottomPosition = dims.containerTop + dims.sidebarHeight;
            // Calculate viewport bottom position in document
            const viewportBottomPosition = scrollY + dims.viewportHeight - dims.bottomSpacing;
            const hasReachedContainerBottom = dims.containerBottom <= colliderBottom;
            const hasReachedContainerTop = scrollY <= dims.containerTop;

            if (isScrollingDown) {
                // When scrolling down: sidebar scrolls normally with content until bottom has scrolled past viewport bottom
                // Check if sidebar bottom has scrolled past viewport bottom
                if (sidebarBottomPosition <= viewportBottomPosition) {
                    // Sidebar bottom has scrolled past viewport bottom - now stick bottom
                    if (hasReachedContainerBottom) {
                        // Reached container bottom
                        dims.translateY = dims.containerBottom - sidebarBottom;
                        return "CONTAINER-BOTTOM";
                    } else {
                        // Stick bottom to viewport bottom
                        dims.translateY = colliderBottom - sidebarBottom;
                        return "VIEWPORT-BOTTOM";
                    }
                } else {
                    // Sidebar is still scrolling normally with content (bottom hasn't scrolled past yet)
                    dims.translateY = 0;
                    return "STATIC";
                }
            } else {
                // When scrolling up: keep bottom sticky until scrolled back enough for sidebar to scroll normally
                if (hasReachedContainerTop) {
                    // Reached container top - scrolled back to beginning
                    dims.translateY = 0;
                    return "STATIC";
                } else if (hasReachedContainerBottom) {
                    // Still at container bottom
                    dims.translateY = dims.containerBottom - sidebarBottom;
                    return "CONTAINER-BOTTOM";
                } else if (sidebarBottomPosition <= viewportBottomPosition) {
                    // Sidebar bottom still at or past viewport bottom - keep sticky bottom
                    dims.translateY = colliderBottom - sidebarBottom;
                    return "VIEWPORT-BOTTOM";
                } else {
                    // Scrolled back enough - sidebar can scroll normally again
                    dims.translateY = 0;
                    return "STATIC";
                }
            }
        }

        return affixedTypeRef.current;
    }, [calcDimensionsWithScroll, isSidebarFitsViewport]);

    // Apply sticky position
    const stickyPosition = useCallback(
        (force = false) => {
            if (!sidebarRef.current || !sidebarInnerRef.current) return;

            const sidebar = sidebarRef.current;
            const sidebarInner = sidebarInnerRef.current;

            const affixType = getAffixType();
            const dims = dimensionsRef.current;

            if ((affixedTypeRef.current !== affixType || force) && affixType) {
                // Update class
                if (affixType === "STATIC") {
                    sidebar.classList.remove(stickyClass);
                } else {
                    sidebar.classList.add(stickyClass);
                }

                // Reset styles first
                sidebar.style.height = "";
                sidebar.style.position = "";
                sidebarInner.style.position = "";
                sidebarInner.style.top = "";
                sidebarInner.style.left = "";
                sidebarInner.style.bottom = "";
                sidebarInner.style.width = "";
                sidebarInner.style.transform = "";

                // Apply styles based on affix type
                switch (affixType) {
                    case "VIEWPORT-TOP":
                        sidebar.style.height = `${dims.sidebarHeight}px`;
                        sidebar.style.position = "relative";
                        sidebarInner.style.position = "fixed";
                        sidebarInner.style.top = `${dims.topSpacing}px`;
                        sidebarInner.style.left = `${dims.sidebarLeft}px`;
                        sidebarInner.style.width = `${dims.sidebarWidth}px`;
                        break;

                    case "VIEWPORT-BOTTOM":
                        sidebar.style.height = `${dims.sidebarHeight}px`;
                        sidebar.style.position = "relative";
                        sidebarInner.style.position = "fixed";
                        sidebarInner.style.top = "auto";
                        sidebarInner.style.bottom = `${dims.bottomSpacing}px`;
                        sidebarInner.style.left = `${dims.sidebarLeft}px`;
                        sidebarInner.style.width = `${dims.sidebarWidth}px`;
                        break;

                    case "CONTAINER-BOTTOM":
                        sidebar.style.height = `${dims.sidebarHeight}px`;
                        sidebar.style.position = "relative";
                        sidebarInner.style.position = "absolute";
                        sidebarInner.style.top = `${dims.translateY}px`;
                        sidebarInner.style.width = `${dims.sidebarWidth}px`;
                        break;

                    case "STATIC":
                        // Already reset above
                        break;
                }

                affixedTypeRef.current = affixType;
            } else {
                // Update left position only for VIEWPORT-TOP
                if (affixedTypeRef.current === "VIEWPORT-TOP") {
                    sidebarInner.style.left = `${dims.sidebarLeft}px`;
                }
            }
        },
        [stickyClass, getAffixType]
    );

    // Update sticky
    const updateSticky = useCallback(
        (event?: Event) => {
            if (runningRef.current) return;
            runningRef.current = true;

            requestAnimationFrame(() => {
                const eventType = event?.type || "resize";

                switch (eventType) {
                    case "scroll":
                        observeScrollDir();
                        calcDimensionsWithScroll();
                        stickyPosition();
                        break;

                    case "resize":
                    default:
                        // Check min width breakpoint
                        if (minWidth > 0 && window.innerWidth <= minWidth) {
                            if (sidebarRef.current && sidebarInnerRef.current) {
                                sidebarRef.current.classList.remove(stickyClass);
                                sidebarRef.current.removeAttribute("style");
                                sidebarInnerRef.current.removeAttribute("style");
                            }
                            affixedTypeRef.current = "STATIC";
                            runningRef.current = false;
                            return;
                        }

                        calcDimensions();
                        stickyPosition(true);
                        break;
                }

                runningRef.current = false;
            });
        },
        [calcDimensions, calcDimensionsWithScroll, observeScrollDir, stickyPosition, minWidth, stickyClass]
    );

    // Initialize
    useEffect(() => {
        if (!sidebarRef.current || !sidebarInnerRef.current) return;

        const sidebar = sidebarRef.current;
        const sidebarInner = sidebarInnerRef.current;

        // Find container
        if (containerSelector) {
            const containers = document.querySelectorAll(containerSelector);
            containers.forEach((container) => {
                if (container.contains(sidebar)) {
                    containerRef.current = container as HTMLElement;
                }
            });
        } else {
            containerRef.current = sidebar.parentElement;
        }

        if (!containerRef.current) return;

        // Initial calculation
        const initSticky = () => {
            calcDimensions();
            stickyPosition(true);
        };

        // Wait for layout to be ready
        setTimeout(initSticky, 100);

        // Bind events
        window.addEventListener("scroll", updateSticky, { passive: true });
        window.addEventListener("resize", updateSticky, { passive: true });

        // ResizeObserver for sidebar and container
        const resizeObserver = new ResizeObserver(() => {
            updateSticky();
        });

        if (sidebarInner) {
            resizeObserver.observe(sidebarInner);
        }
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener("scroll", updateSticky);
            window.removeEventListener("resize", updateSticky);
            resizeObserver.disconnect();
        };
    }, [calcDimensions, stickyPosition, updateSticky, containerSelector]);

    return (
        <div ref={sidebarRef} className="sidebar-sticky-wrapper">
            <div ref={sidebarInnerRef} className="inner-wrapper-sticky">
                {children}
            </div>
        </div>
    );
}
