import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-3/Section1";
import Section2 from "@/components/sections/home-1/Section4";
import Section3 from "@/components/sections/home-3/Section2";
import Section4 from "@/components/sections/home-1/Section3";
import Section5 from "@/components/sections/home-3/Section3";
import Section6 from "@/components/sections/home-3/Section4";
import Section7 from "@/components/sections/home-3/Section5";
export default function Home_3() {
    return (
        <Layout headerStyle={3} footerStyle={3}>
            <Section1 />
            <Section2 classList="text-center" />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
        </Layout>
    );
}
