import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/author/Section1";
import Section2 from "@/components/sections/author/Section2";
import Section3 from "@/components/sections/home-6/Section5";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

export default function Page_Author() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb subPageCurrent="Author" subPageLink="/page-author" pageCurrent="Thomas Foks" />
            <Section1 />
            <Section2 />
            <Section3 />
        </Layout>
    );
}
