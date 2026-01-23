import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-5/Section1";
import Section2 from "@/components/sections/home-1/Section4";
import Section3 from "@/components/sections/home-5/Section2";
import Section4 from "@/components/sections/home-5/Section3";
import Section5 from "@/components/sections/home-5/Section4";
import Section6 from "@/components/sections/home-1/Section3";
export default function Home_5() {
    return (
        <Layout headerStyle={5} footerStyle={5}>
            <Section1 />
            <Section2 classList="d-none" />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </Layout>
    );
}
