import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/archive-6/Section1";
import Section2 from "@/components/sections/home-6/Section5";

export default function Archive6() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="Science" />
            <Section1 />
            <Section2 />
        </Layout>
    );
}
