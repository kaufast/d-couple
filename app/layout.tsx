import React from "react";
import "@/public/assets/css/vendors/bootstrap-grid.min.css";

import "@/public/assets/css/vendors/swiper-bundle.min.css";
import "@/public/assets/css/main.css";

import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/gdpr/CookieConsent";
import { generateWebSiteSchema } from "@/lib/seo/advanced-schemas";
import { generateLLMMetaTags, generateAICrawlersMeta } from "@/lib/seo/llm-optimization";

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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://d-couple.com'),
    title: {
        default: "Strategic Accountability Hub - Institutional Oversight & Governance",
        template: "%s | Strategic Accountability Hub"
    },
    description: "Corporate governance oversight, civic mobility, and asset preservation tracking platform with 10,000+ institutional profiles. Track entities, submit reports, and access strategic intelligence.",
    keywords: ["corporate governance", "institutional oversight", "asset preservation", "civic mobility", "accountability", "compliance tracking", "entity directory", "strategic intelligence"],
    authors: [{ name: "Strategic Accountability Hub" }],
    creator: "Strategic Accountability Hub",
    publisher: "Strategic Accountability Hub",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://d-couple.com",
        siteName: "Strategic Accountability Hub",
        title: "Strategic Accountability Hub - Institutional Oversight & Governance",
        description: "Corporate governance oversight, civic mobility, and asset preservation tracking platform with 10,000+ institutional profiles.",
        images: [
            {
                url: "/assets/imgs/template/logo/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Strategic Accountability Hub",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Strategic Accountability Hub - Institutional Oversight & Governance",
        description: "Corporate governance oversight, civic mobility, and asset preservation tracking platform.",
        images: ["/assets/imgs/template/logo/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    other: {
        ...generateLLMMetaTags(),
        ...generateAICrawlersMeta(),
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const webSiteSchema = generateWebSiteSchema();

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${dmSans.variable} ${bricolageGrotesque.variable}`}>
                {/* WebSite Schema with Sitelinks SearchBox for Google */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
                />
                <ThemeScript />
                <Analytics />
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
