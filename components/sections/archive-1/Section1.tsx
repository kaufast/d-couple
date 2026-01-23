import Image from "next/image";
import Section1Interactive from "./Section1Interactive";

const blogCardsData = [
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Lifestyle",
        title: "The unseen future behind every interface",
        description: "Design thrives where clarity and depth find their fragile, perfect balance.",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-123.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Where simplicity meets human complexity",
        description: "Each design tells a story — not in words, but in space, light, and flow.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-124.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Stories told through pixels and patterns",
        description: "Where creativity meets psychology, design becomes a language of quiet emotion.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-125.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When the screen becomes the storyteller",
        description: "Great design bridges code and compassion, logic and the living pulse.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-126.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Designing beauty that doesn't demand attention",
        description: "The best interfaces disappear, leaving behind only feeling and flow.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-127.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Where simplicity meets human complexity",
        description: "Silence, space, and stillness — the new luxuries of a restless world.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-128.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Lifestyle",
        title: "Where design ends and experience begins",
        description: "Automation begins to dream in form, crafting patterns we never taught.",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-129.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "How empathy shapes the future of tech",
        description: "Simplicity finds new warmth when design learns to whisper, not shout.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-130.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Where design ends and experience begins",
        description: "The boundary fades as pixels respond, learning to move like human thought.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-131.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Between human touch and machine logic",
        description: "Clarity lives in shades, where balance replaces noise and excess.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-132.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Designing for the world that's always moving",
        description: "In constant motion, design must learn to breathe and change like life.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-133.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When minimalism meets modern emotion",
        description: "Colors speak without words, guiding emotion through rhythm and movement.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-134.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Where simplicity meets human complexity",
        description: "Change begins softly, in details that shape how we live and connect.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-135.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "What the future looks like in grayscale",
        description: "The border between craft and feeling is thinner than we imagine.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-136.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "The unseen future behind every interface",
        description: "Every seamless click hides a heartbeat of structure, care, and intent.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-137.webp",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-1 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-122.webp" alt="foks" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Culture</h1>
                                </li>
                                <li>
                                    <p className="fs-7 text-700 m-0 mt-2 fw-medium">Explore the stories, values, and symbols that shape human identity through the lens of culture.</p>
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
