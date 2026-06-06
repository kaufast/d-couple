import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home-4/Section1";
import Section2 from "@/components/sections/home-1/Section4";
import Section3 from "@/components/sections/home-1/Section3";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function Home_4() {
    return (
        <Layout headerStyle={4} footerStyle={4}>
            <Section1 />
            <Section2 classList="text-start" />
            <Section3 />
        </Layout>
    );
}
