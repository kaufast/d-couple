import React from "react";
import "@/public/assets/css/vendors/bootstrap-grid.min.css";

import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/main.css";

import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import { CookieConsent } from "@/components/gdpr/CookieConsent";

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--tc-body-font-family",
});
const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
    variable: "--tc-heading-font-family",
});

export const metadata: Metadata = {
    title: "Strategic Accountability Hub - Institutional Oversight & Governance",
    description: "Corporate governance oversight, civic mobility, and asset preservation tracking platform with 10,000+ institutional profiles.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dmSans.variable} ${bricolageGrotesque.variable}`}>
                <ThemeScript />
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
