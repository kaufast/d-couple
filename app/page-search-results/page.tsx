import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/search-results/Section1";
import Section2 from "@/components/sections/home-6/Section5";

export default function Page_Search_Results() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="Search Results for: you" />
            <Section1 />
            <Section2 />
        </Layout>
    );
}
