import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/single-7/Section1";
import Section2 from "@/components/elements/RelatedPost";
import Section3 from "@/components/sections/home-6/Section5";

export default function Single7() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="Culture" />
            <Section1 />
            <Section2 />
            <Section3 />
        </Layout>
    );
}
