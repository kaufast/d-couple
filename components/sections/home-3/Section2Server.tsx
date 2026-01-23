import Section2Interactive from "./Section2Interactive";

const latestNewsData = [
    {
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
    {
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
    {
        classList: "col-lg-5 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Reflection",
        title: "Where design ends and experience begins",
        description: "When the noise fades, we meet our own echoes among the trees. The silence isn't empty",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-63.webp",
    },
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When minimalism meets modern emotion",
        description: "about another dayIn the quiet dark, life hums beneath our forgetting.",
        date: "January 26, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-64.webp",
    },
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Observation",
        title: "The art of creating digital calm",
        description: "There are places that refuse to be mapped — not because they're far",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-148.webp",
    },
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Solitude",
        title: "The silent language of color and motion",
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
        title: "The unseen future behind every interface",
        description: "here's wisdom in the quiet before the sky breaks open.",
        date: "February 10, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-22.webp",
    },
    {
        classList: "col-lg-5 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Lifestyle",
        title: "At the edge between wilderness and industry, a soul hesitates",
        description: "hey have seen it all before. Our lights flicker, but theirs endure — indifferent, eternal.",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-20.webp",
    },
];

export default function Section2Server() {
    return (
        <section className="sec-2-home-3 pb-80 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Latest news</h6>
                        </div>
                    </div>
                </div>
                <Section2Interactive latestNewsData={latestNewsData} />
            </div>
        </section>
    );
}
