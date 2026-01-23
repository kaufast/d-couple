"use client";

import { useState, useEffect, useCallback } from "react";

export function usePortfolioFilter(defaultFilter: string = "all") {
    const [activeFilter, setActiveFilter] = useState<string>(defaultFilter);

    const handleFilterClick = useCallback((filterValue: string) => {
        setActiveFilter(filterValue);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const filterButtons = document.querySelectorAll<HTMLElement>(".filter-portfolio .filter-btn");
        const portfolioCards = document.querySelectorAll<HTMLElement>(".card-portfolio");

        if (filterButtons.length === 0 || portfolioCards.length === 0) {
            return;
        }

        // Update active class on filter buttons
        filterButtons.forEach((button) => {
            const filterValue = button.getAttribute("data-filter");
            if (filterValue === activeFilter) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        // Filter portfolio cards with animation
        portfolioCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            if (activeFilter === "all" || cardCategory === activeFilter) {
                // Show card with fade in animation
                card.style.display = "";
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.opacity = "1";
                }, 10);
            } else {
                // Hide card with fade out animation
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    }, [activeFilter]);

    // Set up click event listeners on filter buttons
    useEffect(() => {
        if (typeof window === "undefined") return;

        const filterButtons = document.querySelectorAll<HTMLElement>(".filter-portfolio .filter-btn");

        if (filterButtons.length === 0) {
            return;
        }

        const clickHandlers: Array<{ button: HTMLElement; handler: (e: Event) => void }> = [];

        filterButtons.forEach((button) => {
            const handler = (e: Event) => {
                e.preventDefault();
                const filterValue = button.getAttribute("data-filter");
                if (filterValue) {
                    handleFilterClick(filterValue);
                }
            };

            button.addEventListener("click", handler);
            clickHandlers.push({ button, handler });
        });

        return () => {
            clickHandlers.forEach(({ button, handler }) => {
                button.removeEventListener("click", handler);
            });
        };
    }, [handleFilterClick]);

    return {
        activeFilter,
        setActiveFilter: handleFilterClick,
    };
}
