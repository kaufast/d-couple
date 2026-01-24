import Image from "next/image";
import Section1Interactive from "./Section1Interactive";

const blogCardsData = [
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
        img: "/assets/imgs/page/img-145.webp",
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
        img: "/assets/imgs/page/img-146.webp",
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
        img: "/assets/imgs/page/img-147.webp",
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
        img: "/assets/imgs/page/img-148.webp",
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
        img: "/assets/imgs/page/img-149.webp",
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
        img: "/assets/imgs/page/img-150.webp",
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

export default function Section1() {
    return (
        <section className="sec-1-archive-4 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-21.webp" alt="d-couple" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Lifestyle</h1>
                                </li>
                                <li>
                                    <p className="fs-7 text-700 m-0 mt-2 fw-medium">Inspire your everyday living with stories, ideas, and experiences that celebrate life's essence.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 ms-auto col-md-6 col-12">
                        <form action="#" className="mt-2">
                            <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-pill overflow-hidden">
                                <div className="icon size-16 ps-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.875C1.125 2.80394 2.80394 1.125 4.875 1.125C6.94606 1.125 8.625 2.80394 8.625 4.875C8.625 6.94606 6.94606 8.625 4.875 8.625C2.80394 8.625 1.125 6.94606 1.125 4.875ZM4.875 0C2.18261 0 0 2.18261 0 4.875C0 7.56742 2.18261 9.75 4.875 9.75C6.01852 9.75 7.07008 9.35625 7.90147 8.697L10.4773 11.2727L10.875 11.6705L11.6705 10.875L11.2727 10.4773L8.697 7.90147C9.35625 7.07008 9.75 6.01852 9.75 4.875C9.75 2.18261 7.56742 0 4.875 0Z" fill="#7D7D7D"></path>
                                    </svg>
                                </div>
                                <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
                <Section1Interactive blogCards={blogCardsData} />
            </div>
        </section>
    );
}
