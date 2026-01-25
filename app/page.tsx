import Layout from "@/components/layout/Layout";
import FeaturedArticleHero from "@/components/sections/home-6/Section1";
import PreviousHero from "@/components/sections/home-4/Section1";
import Section2 from "@/components/sections/home-1/Section4";
import Section3 from "@/components/sections/home-1/Section3";
import type { Metadata } from 'next';
import { generateOrganizationSchema } from '@/lib/seo/structured-data';

export const metadata: Metadata = {
    title: "Strategic Accountability Hub - Track Institutional Governance & Civic Mobility",
    description: "Access comprehensive oversight data on 10,000+ entities. Track corporate governance, asset preservation strategies, and civic mobility patterns through field intelligence reports.",
    openGraph: {
        title: "Strategic Accountability Hub - Institutional Oversight Intelligence",
        description: "Track corporate governance, asset preservation, and civic mobility across 10,000+ institutional profiles.",
    },
};

export default function Home() {
    const organizationSchema = generateOrganizationSchema();

    return (
        <Layout headerStyle={4} footerStyle={4}>
            {/* JSON-LD Organization Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <FeaturedArticleHero />
            <PreviousHero />
            <Section2 classList="text-start" />
            <Section3 />
        </Layout>
    );
}
