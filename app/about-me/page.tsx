import Breadcumb from "@/components/elements/breadcumb";
import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/about-me/Section1";
import Section2 from "@/components/sections/about-me/Section2";
import Section3 from "@/components/sections/about-me/Section3";
import Section4 from "@/components/sections/home-7/Section4";
import Section5 from "@/components/sections/about-me/Section4";

export default function AboutMe() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="About me" />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 display="d-none" />
            <Section5 />
        </Layout>
    );
}
