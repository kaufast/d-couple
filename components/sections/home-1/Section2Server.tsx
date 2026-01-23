import SideBar from "@/components/elements/sidebar";
import Section2Interactive from "./Section2Interactive";

const breakingNewsData = [
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-3.webp",
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
        img: "/assets/imgs/page/img-4.webp",
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
        img: "/assets/imgs/page/img-5.webp",
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
        img: "/assets/imgs/page/img-6.webp",
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
        img: "/assets/imgs/page/img-7.webp",
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
        img: "/assets/imgs/page/img-8.webp",
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
        img: "/assets/imgs/page/img-4.webp",
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
        img: "/assets/imgs/page/img-5.webp",
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
        img: "/assets/imgs/page/img-6.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
];

export default function Section2Server() {
    return (
        <section className="sec-2-home-1 pb-50 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-header">
                                <h6 className="mb-0"># Breaking News</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-0 g-5">
                        <div className="col-lg-8 mt-3">
                            <Section2Interactive newsData={breakingNewsData} />
                        </div>
                        <div className="col-lg-4 mt-3">
                            <SideBar displayFlashNews={true} displayTopAuthors={true} displayFollowUs={true} displayTrendingTopics={true} displayAds={true} />
                        </div>
                    </div>
                </div>
        </section>
    );
}
