import SideBar from "@/components/elements/sidebar";
import Section3Interactive from "./Section3Interactive";

const breakingNewsData = [
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Arin",
        img: "/assets/imgs/page/img-29.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Tair",
        img: "/assets/imgs/page/img-30.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-9.webp",
        author: "Elen",
        img: "/assets/imgs/page/img-31.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Ryn",
        img: "/assets/imgs/page/img-32.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-10.webp",
        author: "Zain",
        img: "/assets/imgs/page/img-33.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-11.webp",
        author: "Morn",
        img: "/assets/imgs/page/img-34.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Arin",
        img: "/assets/imgs/page/img-29.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-9.webp",
        author: "Elen",
        img: "/assets/imgs/page/img-31.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Ryn",
        img: "/assets/imgs/page/img-32.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-11.webp",
        author: "Morn",
        img: "/assets/imgs/page/img-34.webp",
    },
    {
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "January 13, 2025",
        readTime: "10 min read",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Tair",
        img: "/assets/imgs/page/img-30.webp",
    },
];

export default function Section3Server() {
    return (
        <section className="sec-3-home-2 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Breaking News</h6>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 g-5">
                    <div className="col-lg-8">
                        <Section3Interactive breakingNewsData={breakingNewsData} />
                    </div>
                    <div className="col-lg-4">
                        <SideBar displayFlashNews={true} displayTopAuthors={true} displayFollowUs={false} displayTrendingTopics={false} displayAds={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}
