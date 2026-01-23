import Image from "next/image";
import Section1Interactive from "./Section1Interactive";
import SideBar from "@/components/elements/sidebar2";

const blogCardsData = [
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-48.webp",
        category: "World",
        title: "When nature stops waiting for us to return",
        description: "There comes a time when the wild no longer looks for us. Forests learn to grow without footsteps, and rivers forget the sound of bridges.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Tair",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-49.webp",
        category: "Entertainment",
        title: "Beneath the soil, seeds whisper about another day",
        description: "Even in stillness, life speaks softly. Hidden under the quiet earth, small voices promise a future we can't yet see.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-50.webp",
        category: "Fashion",
        title: "Stories the stones keep to themselves",
        description: "The earth remembers everything — our footsteps, our fires, our silence. Stones keep their own kind of truth, patient and wordless.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Reflection",
        title: "Listening to the earth between storms",
        description: "There's a calm voice in the pause before thunder. Sometimes, silence is the loudest form of understanding.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-53.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-151.webp",
        category: "Renewal",
        title: "At the edge between wilderness and industry, a soul hesitates",
        description: "Between creation and consumption lies a fragile pause. We stand there, unsure of which world we belong to.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-49.webp",
        category: "Entertainment",
        title: "Beneath the soil, seeds whisper about another day",
        description: "Even in stillness, life speaks softly. Hidden under the quiet earth, small voices promise a future we can't yet see.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-50.webp",
        category: "Fashion",
        title: "Stories the stones keep to themselves",
        description: "The earth remembers everything — our footsteps, our fires, our silence. Stones keep their own kind of truth, patient and wordless.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Reflection",
        title: "Listening to the earth between storms",
        description: "There's a calm voice in the pause before thunder. Sometimes, silence is the loudest form of understanding.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        date: "Jun 13, 2025",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-5 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-17.webp" alt="foks" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Hobbies</h1>
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
                        <Section1Interactive blogCards={blogCardsData} />
                    </div>
                    <div className="col-lg-4">
                        <SideBar displayFlashNews={true} displayTopAuthors={true} displayFollowUs={true} displayTrending={true} displayTrendingTopics={false} displayAds={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}
