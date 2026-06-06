import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-7/Section1";
import Section2 from "@/components/sections/home-7/Section2";
import Section3 from "@/components/sections/home-7/Section3";
import Section4 from "@/components/sections/home-7/Section4";
import Section5 from "@/components/sections/home-7/Section5";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function Home_7() {
    return (
        <Layout headerStyle={7} footerStyle={7}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </Layout>
    );
}
