import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/portfolio-details/Section1";
import Section2 from "@/components/sections/portfolio-details/Section2";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function Page_Portfolio_Details() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb subPageCurrent="Portfolio" subPageLink="/portfolio" pageCurrent="Terraview Modern Residence Concept" />
            <Section1 />
            <Section2 />
        </Layout>
    );
}
