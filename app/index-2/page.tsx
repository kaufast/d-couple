import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-2/Section1";
import Section2 from "@/components/sections/home-2/Section2";
import Section3 from "@/components/sections/home-2/Section3";
import Section4 from "@/components/sections/home-1/Section3";
export default function Home_2() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Layout>
    );
}
