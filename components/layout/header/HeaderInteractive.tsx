"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import useSidebarMenu from "@/util/useSidebarMenu";
import { useScrollState } from "@/util/useScrollState";
import PopupSearch from "@/components/layout/cardPopupSearchServer";

interface HeaderInteractiveProps {
    navbarRef: React.RefObject<HTMLElement | null>;
    onSearchClick: () => void;
    onNavbarTogglerClick: () => void;
}

export default function Header1Interactive({ navbarRef, onSearchClick, onNavbarTogglerClick }: HeaderInteractiveProps) {
    const scroll = useScrollState();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);
    const initialNavbarStylesRef = useRef<{ transition: string; transform: string } | null>(null);

    // Note: Search state is managed internally, but we still call onSearchClick for consistency
    // The actual popup opening is handled by isSearchOpen state

    // Handle sticky navbar classes
    useEffect(() => {
        const stickyClasses = ["navbar-stick", "top-0", "position-fixed", "w-100"];

        const navbar = navbarRef?.current;

        if (!navbar) {
            return;
        }

        stickyClasses.forEach((className) => {
            if (scroll) {
                navbar.classList.add(className);
            } else {
                navbar.classList.remove(className);
            }
        });
    }, [scroll, navbarRef]);

    // Initialize navbar styles
    useEffect(() => {
        const navbar = navbarRef?.current;

        if (!navbar) {
            return;
        }

        if (!initialNavbarStylesRef.current) {
            initialNavbarStylesRef.current = {
                transition: navbar.style.transition,
                transform: navbar.style.transform,
            };
        }

        if (!navbar.style.transition) {
            navbar.style.transition = "transform 0.3s ease";
        }

        return () => {
            if (!initialNavbarStylesRef.current || !navbar) {
                return;
            }

            navbar.style.transition = initialNavbarStylesRef.current.transition;
            navbar.style.transform = initialNavbarStylesRef.current.transform;
        };
    }, [navbarRef]);

    // Handle navbar hide/show on scroll
    useEffect(() => {
        const navbar = navbarRef?.current;

        if (!navbar) {
            return;
        }

        const defaultTransform = initialNavbarStylesRef.current?.transform ?? "";

        navbar.style.transform = isNavbarHidden ? "translateY(-100%)" : defaultTransform || "translateY(0)";
    }, [isNavbarHidden, navbarRef]);

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        if (typeof window === "undefined") {
            return;
        }

        // eslint-disable-next-line no-restricted-globals
        let lastScrollY = window.scrollY;

        const handleScrollDirection = () => {
            // eslint-disable-next-line no-restricted-globals
            if (typeof window === "undefined") {
                return;
            }

            // eslint-disable-next-line no-restricted-globals
            const currentScrollY = window.scrollY;

            setIsNavbarHidden((prevHidden) => {
                if (currentScrollY <= 100) {
                    return false;
                }

                if (currentScrollY > lastScrollY) {
                    return true;
                }

                if (currentScrollY < lastScrollY) {
                    return false;
                }

                return prevHidden;
            });

            lastScrollY = currentScrollY;
        };

        // eslint-disable-next-line no-restricted-globals
        window.addEventListener("scroll", handleScrollDirection, { passive: true });

        return () => {
            // eslint-disable-next-line no-restricted-globals
            if (typeof window !== "undefined") {
                // eslint-disable-next-line no-restricted-globals
                window.removeEventListener("scroll", handleScrollDirection);
            }
        };
    }, []);

    // Note: handlers are passed via props, no need to store

    return (
        <>
            {/* Search popup with state management */}
            <PopupSearch open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
