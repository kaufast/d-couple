import Link from "next/link";
import { Section2Provider, Section2Tabs, Section2Content } from "./Section2Interactive";

const highlightData = {
    featured: {
        classList: "col-lg-5 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Reflection",
        title: "When the forests grow silent, and humans finally hear themselves again",
        description: "When the noise fades, we meet our own echoes among the trees. The silence isn't empty",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-70.webp",
    },
    row1: [
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Renewal",
            title: "Beneath the soil, seeds whisper about another day",
            description: "about another dayIn the quiet dark, life hums beneath our forgetting.",
            date: "January 26, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-71.webp",
        },
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Observation",
            title: "The language of rain on fragile glass",
            description: "There are places that refuse to be mapped — not because they're far",
            date: "February 6, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-75.webp",
        },
    ],
    row2: [
        {
            classList: "col-lg-4 col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Solitude",
            title: "The weight of light in endless fields",
            description: "Ashes speak of warmth once shared. Destruction, too, has a strange tenderness.",
            date: "February 7, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-72.webp",
        },
        {
            classList: "col-lg-4 col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Lifestyle",
            title: "Listening to the earth between great storms",
            description: "here's wisdom in the quiet before the sky breaks open.",
            date: "February 10, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-73.webp",
        },
        {
            classList: "col-lg-4 col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Lifestyle",
            title: "Listening to the earth between great storms",
            description: "here's wisdom in the quiet before the sky breaks open.",
            date: "February 10, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-74.webp",
        },
    ],
};

const trendingData = {
    featured: {
        classList: "col-lg-5 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Reflection",
        title: "When the forests grow silent, and humans finally hear themselves again",
        description: "When the noise fades, we meet our own echoes among the trees. The silence isn't empty",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-20.webp",
    },
    row1: [
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Renewal",
            title: "Beneath the soil, seeds whisper about another day",
            description: "about another dayIn the quiet dark, life hums beneath our forgetting.",
            date: "January 26, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-21.webp",
        },
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Observation",
            title: "The language of rain on fragile glass",
            description: "There are places that refuse to be mapped — not because they're far",
            date: "February 6, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-22.webp",
        },
    ],
    row2: [
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Solitude",
            title: "The weight of light in endless fields",
            description: "Ashes speak of warmth once shared. Destruction, too, has a strange tenderness.",
            date: "February 7, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-65.webp",
        },
        {
            classList: "col-md-6 col-12",
            linkPost: "/single-6",
            linkCategory: "/archive-4",
            category: "Lifestyle",
            title: "Listening to the earth between great storms",
            description: "here's wisdom in the quiet before the sky breaks open.",
            date: "February 10, 2025",
            readTime: "10 min read",
            img: "/assets/imgs/page/img-64.webp",
        },
    ],
    featured2: {
        classList: "col-lg-5 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Lifestyle",
        title: "The stars quietly watch as we tear down the ancient woods",
        description: "hey have seen it all before. Our lights flicker, but theirs endure — indifferent, eternal.",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-63.webp",
    },
};

export default function Section2Server() {
    return (
        <Section2Provider highlightData={highlightData} trendingData={trendingData}>
            <section className="sec-2-home-5 pb-4 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs d-flex flex-row flex-wrap pb-2 ps-0 m-0">
                                <Section2Tabs />
                                <li className="ms-auto">
                                    <Link href="/archive-5" className="btn py-0">
                                        <span className="text-dark">
                                            <span className="text-1">View All</span>
                                        </span>
                                        <span className="group-icon">
                                            <span className="group-icon-inner dark-mode-invert">
                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                                                </svg>
                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Section2Content />
            </section>
        </Section2Provider>
    );
}
