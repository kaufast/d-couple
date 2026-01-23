"use client";
import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

declare global {
    interface Window {
        foksThemeConfig?: {
            defaultDarkMode?: boolean;
        };
    }
}

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("light");
    const [isMounted, setIsMounted] = useState(false);

    // Apply theme to document element (no querySelector needed)
    const applyTheme = useCallback((newTheme: Theme) => {
        if (typeof window === "undefined") return;

        try {
            // Update data-theme attribute on document element
            document.documentElement.setAttribute("data-bs-theme", newTheme);

            // Save to localStorage
            localStorage.setItem("theme", newTheme);
        } catch (error) {
            console.warn("Error applying theme:", error);
        }
    }, []);

    useEffect(() => {
        // Mark component as mounted
        setIsMounted(true);

        // Get theme from localStorage first, then fallback to WordPress config or default
        const getInitialTheme = (): Theme => {
            if (typeof window === "undefined") return "light";

            try {
                // Get default theme from WordPress config or default to 'light'
                const defaultTheme: Theme = window.foksThemeConfig?.defaultDarkMode === true ? "dark" : "light";

                // Priority: localStorage > current attribute > WordPress config > default
                const savedTheme = localStorage.getItem("theme") as Theme;
                let currentTheme: Theme;

                if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
                    currentTheme = savedTheme;
                } else {
                    const currentThemeAttr = document.documentElement.getAttribute("data-bs-theme") as Theme;
                    currentTheme = currentThemeAttr || defaultTheme;
                }

                // Apply theme immediately if different from current
                if (document.documentElement.getAttribute("data-bs-theme") !== currentTheme) {
                    document.documentElement.setAttribute("data-bs-theme", currentTheme);
                }

                return currentTheme;
            } catch (error) {
                // Fallback to light theme if there's any error
                console.warn("Error reading theme preference:", error);
                return "light";
            }
        };

        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
    }, []);

    // Apply theme to document when theme state changes
    useEffect(() => {
        if (isMounted) {
            applyTheme(theme);
        }
    }, [theme, isMounted, applyTheme]);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            return newTheme;
        });
    }, []);

    const setThemeMode = useCallback((newTheme: Theme) => {
        setTheme(newTheme);
    }, []);

    return {
        theme,
        isMounted,
        toggleTheme,
        setThemeMode,
        isDark: theme === "dark",
        isLight: theme === "light",
    };
};
