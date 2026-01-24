import Image from "next/image";
import Section1Interactive from "./Section1Interactive";
import SideBar from "@/components/elements/sidebar2";

const blogCardsData = [
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-90.webp",
        category: "World",
        title: "The rivers have changed their course, but their memories remain",
        description: "The water never truly forgets. Even when redirected, rivers carry traces of what once was — like memory, flowing toward tomorrow.",
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
        title: "Where the last wild creatures roam, we relearn the meaning of existence",
        description: "In the presence of the untamed, we remember humility. The wild teaches what civilization made us forget.",
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
        title: "Under a sky without lights, the darkness becomes an old friend",
        description: "Without the glare of cities, night reveals its depth. In true darkness, we remember how to see again.",
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
        title: "When the ocean withdraws, it leaves behind whispers of vanished lives",
        description: "The tide retreats but doesn't disappear. Every shell, every silence carries a trace of those who once belonged.",
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
        title: "Among cities and concrete, I still hear the call of an unseen wilderness",
        description: "Beneath the hum of machines, something ancient stirs. The wild persists — not gone, just quieter.",
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
        title: "The stories of sand and wind: conversations no one ever witnessed",
        description: "The desert speaks in shifting shapes and brief moments. Its language is written in motion and erased by time.",
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
        title: "At the edge between wilderness and industry, a soul hesitates",
        description: "Between creation and consumption lies a fragile pause. We stand there, unsure of which world we belong to.",
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
        title: "Can we still find the natural world within our own dreams?",
        description: "Maybe the forest survives inside us — its echoes, its rivers, its quiet persistence. The dream is the last refuge of the wild.",
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
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears.",
        imgAuthor: "/assets/imgs/template/author/author-11.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-40.webp",
        category: "Reflection",
        title: "Among cities and concrete, I still hear the call of an unseen wilderness",
        description: "Beneath the hum of machines, something ancient stirs. The wild persists — not gone, just quieter.",
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
        title: "The stories of sand and wind: conversations no one ever witnessed",
        description: "The desert speaks in shifting shapes and brief moments. Its language is written in motion and erased by time.",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-42.webp",
        category: "Entertainment",
        title: "Where the last wild creatures roam, we relearn the meaning of existence",
        description: "In the presence of the untamed, we remember humility. The wild teaches what civilization made us forget.",
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
        title: "Under a sky without lights, the darkness becomes an old friend",
        description: "Without the glare of cities, night reveals its depth. In true darkness, we remember how to see again.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-22.webp",
        category: "Renewal",
        title: "At the edge between wilderness and industry, a soul hesitates",
        description: "Between creation and consumption lies a fragile pause. We stand there, unsure of which world we belong to.",
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
        title: "Can we still find the natural world within our own dreams?",
        description: "Maybe the forest survives inside us — its echoes, its rivers, its quiet persistence. The dream is the last refuge of the wild.",
        imgAuthor: "/assets/imgs/template/author/author-10.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-7 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-140.webp" alt="d-couple" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Science</h1>
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
                <div className="row g-5 pt-4">
                    <div className="col-lg-8 col-12">
                        <div className="bg-card py-4 px-3 shadow-1 rounded-6">
                            <Section1Interactive blogCards={blogCardsData} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <SideBar displayFlashNews={true} displayTopAuthors={true} displayFollowUs={true} displayTrending={true} displayTrendingTopics={false} displayAds={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}
