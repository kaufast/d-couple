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
  }, []);

  return null;
}
