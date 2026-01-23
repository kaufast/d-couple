import Section3Interactive from "./Section3Interactive";

const latestArticlesData = [
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-101.webp",
        category: "World",
        title: "The rivers have changed their course, but their memories remains",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-102.webp",
        category: "World",
        title: "Among cities and concrete, I still hear the call of an unseen wilderness",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-103.webp",
        category: "World",
        title: "The stories of sand and wind: conversations no one ever witnessed",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-104.webp",
        category: "World",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-105.webp",
        category: "World",
        title: "There is a kind of peace only found in the fading of nature",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-106.webp",
        category: "World",
        title: "When the rains return, it feels as if the world forgives everything",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-107.webp",
        category: "World",
        title: "In the places where humans no longer are, life begins to whisper again",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-102.webp",
        category: "World",
        title: "Among cities and concrete, I still hear the call of an unseen wilderness",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-103.webp",
        category: "World",
        title: "The stories of sand and wind: conversations no one ever witnessed",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "p-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-104.webp",
        category: "World",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
];

export default function Section3Server() {
    return (
        <section className="sec-3-home-8 pb-100 overflow-hidden">
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 mx-auto">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="icon-shape icon-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.71154 0L0.490105 8.23179L0 9.1875H1.07405H4.57405C4.69486 9.1875 4.7928 9.28541 4.7928 9.40625V14H6.18657L10.408 5.76821L10.8981 4.8125H9.82405H6.32405C6.20324 4.8125 6.1053 4.71456 6.1053 4.59375V0H4.71154ZM4.57405 7.875H2.1481L4.7928 2.71784V4.59375C4.7928 5.43944 5.47837 6.125 6.32405 6.125H8.74998L6.1053 11.2822V9.40625C6.1053 8.56056 5.41974 7.875 4.57405 7.875Z" fill="#171717" />
                                    </svg>
                                </div>
                                <p className="fs-8 fw-bold text-uppercase mb-0">Latest Articles</p>
                            </div>
                            <Section3Interactive latestArticlesData={latestArticlesData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
