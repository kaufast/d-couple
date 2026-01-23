import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/portfolio/Section1";
import Section2 from "@/components/sections/home-3/Section5";

export default function Page_Portfolio() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="Portfolio" />
            <Section1 />
            <Section2 />
        </Layout>
    );
}
