import Breadcumb from "@/components/elements/breadcumb";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

import Section1 from "@/components/sections/about-us/Section1";
import Section2 from "@/components/sections/about-us/Section2";
import Section3 from "@/components/sections/about-us/Section3";
import Section4 from "@/components/sections/home-6/Section5";

export const metadata: Metadata = {
    title: "About Us - Strategic Accountability Hub",
    description: "Learn about our mission to monitor centralized actors and foster sovereign economic growth through regional alternatives. Meet the team behind d-couple.",
    openGraph: {
        title: "About Us - Strategic Accountability Hub",
        description: "Learn about our mission to monitor centralized actors and foster sovereign economic growth through regional alternatives.",
    },
};

export default function AboutUs() {
    return (
        <Layout headerStyle={6} footerStyle={6}>
            <Breadcumb pageCurrent="About us" />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Layout>
    );
}
