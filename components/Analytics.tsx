"use client";

import { useEffect } from "react";

const GA4_ID = "G-KS43T0KHK9";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function Analytics() {
  useEffect(() => {
    if (!GA4_ID) return;

    // Defer GA4 loading to avoid blocking the main thread during initial render
    const loadGA = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer!.push(args as unknown as Record<string, unknown>);
      }

      gtag("js", new Date());
      gtag("config", GA4_ID);

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadGA);
    } else {
      setTimeout(loadGA, 3500);
    }
  }, []);

  return null;
}
