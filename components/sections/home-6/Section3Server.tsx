import CardBlog12 from "@/components/cards/CardBlog12";
import SideBar3 from "@/components/elements/sidebar3";
import Section3Interactive from "./Section3Interactive";

const latestArticlesData = [
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-90.webp",
        category: "World",
        title: "When nature stops waiting for us to return",
        description: "There comes a time when the wild no longer looks for us. Forests learn to grow without footsteps, and rivers forget the sound of bridges.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Tair",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-42.webp",
        category: "Entertainment",
        title: "Beneath the soil, seeds whisper about another day",
        description: "Even in stillness, life speaks softly. Hidden under the quiet earth, small voices promise a future we can't yet see.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-12.webp",
        category: "Fashion",
        title: "Stories the stones keep to themselves",
        description: "The earth remembers everything — our footsteps, our fires, our silence. Stones keep their own kind of truth, patient and wordless.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-25.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-40.webp",
        category: "Reflection",
        title: "Listening to the earth between storms",
        description: "There's a calm voice in the pause before thunder. Sometimes, silence is the loudest form of understanding.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Arin",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-91.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-22.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-9.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-92.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-10.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-93.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-11.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
];

export default function Section3Server() {
    return (
        <section className="sec-3-home-6 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-2">
                        <div className="d-flex align-items-center gap-2">
                            <div className="icon-shape icon-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.71154 0L0.490105 8.23179L0 9.1875H1.07405H4.57405C4.69486 9.1875 4.7928 9.28541 4.7928 9.40625V14H6.18657L10.408 5.76821L10.8981 4.8125H9.82405H6.32405C6.20324 4.8125 6.1053 4.71456 6.1053 4.59375V0H4.71154ZM4.57405 7.875H2.1481L4.7928 2.71784V4.59375C4.7928 5.43944 5.47837 6.125 6.32405 6.125H8.74998L6.1053 11.2822V9.40625C6.1053 8.56056 5.41974 7.875 4.57405 7.875Z" fill="#171717" />
                                </svg>
                            </div>
                            <p className="fs-8 fw-bold text-uppercase mb-0">Latest Articles</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-0 g-5">
                    <div className="col-lg-8 mt-3">
                        <Section3Interactive articlesData={latestArticlesData} />
                    </div>
                    <div className="col-lg-4 mt-3">
                        <SideBar3 displayFollowUs={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}
