import Layout from "@/components/layout/Layout";
import FeaturedArticleHero from "@/components/sections/home-6/Section1";
import PreviousHero from "@/components/sections/home-4/Section1";
import Section2 from "@/components/sections/home-1/Section4";
import Section3 from "@/components/sections/home-1/Section3";

export default function Home() {
    return (
        <Layout headerStyle={4} footerStyle={4}>
            <FeaturedArticleHero />
            <PreviousHero />
            <Section2 classList="text-start" />
            <Section3 />
        </Layout>
    );
}
