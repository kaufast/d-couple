import Image from "next/image";
import Section1Interactive from "./Section1Interactive";

const blogCardsData = [
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-155.webp",
        category: "Technology",
        title: "There is a kind of peace only found in the fading of nature",
        description: "As the world slows and colors begin to fade, nature reveals a quieter kind of beauty — one that doesn't shout, but whispers. The falling leaves, the dimming light, and the still air all speak of rest",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Tair",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-156.webp",
        category: "Entertainment",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "Maybe the forest survives inside us — its echoes, its rivers, its quiet persistence. The dream is the last refuge of the wild.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-157.webp",
        category: "Fashion",
        title: "There is a kind of peace only found in the fading of nature",
        description: "As the world slows and colors begin to fade, nature reveals a quieter kind of beauty — one that doesn't shout, but whispers. The falling leaves, the dimming light, and the still air all speak of rest, reminding us that endings can be gentle, even sacred.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-158.webp",
        category: "Solitude",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Even when the world sleeps, the earth prepares to begin again.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-156.webp",
        category: "Entertainment",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "Maybe the forest survives inside us — its echoes, its rivers, its quiet persistence. The dream is the last refuge of the wild.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-159.webp",
        category: "Reflection",
        title: "There is a kind of peace only found in the fading of nature",
        description: "The desert speaks in shifting shapes and brief moments. Its language is written in motion and erased by time. The forests grow without us, the rivers flow on. In their patience, nature has already forgiven what we left undone.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-157.webp",
        category: "Fashion",
        title: "There is a kind of peace only found in the fading of nature",
        description: "As the world slows and colors begin to fade, nature reveals a quieter kind of beauty — one that doesn't shout, but whispers. The falling leaves, the dimming light, and the still air all speak of rest, reminding us that endings can be gentle, even sacred.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-9 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-40.webp" alt="foks" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Technology</h1>
                                </li>
                                <li>
                                    <p className="fs-7 text-700 m-0 mt-2 fw-medium">Explore innovations, insights, and breakthroughs shaping the future of technology.</p>
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
                <div className="row g-5 pt-5">
                    <div className="col-12">
                        <Section1Interactive blogCards={blogCardsData} />
                    </div>
                </div>
            </div>
        </section>
    );
}
