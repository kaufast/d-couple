import SideBar3 from "@/components/elements/sidebar3";
import Section1Interactive from "./Section1Interactive";

const searchResultsData = [
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
        linkPost: "/single-2",
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
        linkPost: "/single-3",
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
        linkPost: "/single-4",
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
        linkPost: "/single-5",
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
        linkPost: "/single-6",
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
        linkPost: "/single-7",
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
        linkPost: "/single-8",
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
        linkPost: "/single-9",
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

export default function Section1Server() {
    return (
        <section className="sec-search-results overflow-hidden pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title pb-4 mb-4 border-bottom-400">
                            <h1 className="mb-0 h2">
                                <span> Found 19 results for "you" </span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row mt-0 g-5">
                    <div className="col-lg-8 mt-3">
                        <Section1Interactive articlesData={searchResultsData} />
                    </div>
                    <div className="col-lg-4 mt-3">
                        <SideBar3 displayFollowUs={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}
