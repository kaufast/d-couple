import CardBlog14 from "@/components/cards/CardBlog14";
import CardBlog15 from "@/components/cards/CardBlog15";

const featuredCardData = {
    classList: "p-2",
    classImg: "rounded-4 overflow-hidden",
    linkPost: "/single-1",
    linkCategory: "/archive-1",
    linkAuthor: "/page-author",
    img: "/assets/imgs/page/img-53.webp",
    category: "World",
    title: "The sea that quietly forgets our names",
    description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
    imgAuthor: "/assets/imgs/template/author/author-5.webp",
    author: "Ren",
    readTime: "6 mins read",
    date: "Jun 13, 2025",
};

const rowCardsData = [
    {
        classList: "col-md-6 col-12",
        classCard: "",
        classBody: "mt-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-99.webp",
        category: "World",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Zain",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-md-6 col-12",
        classCard: "",
        classBody: "mt-2",
        classImg: "rounded-4 overflow-hidden",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-100.webp",
        category: "World",
        title: "When the mountains breathe at first dawn",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Kaen",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-home-8 pb-50 pt-2 overflow-hidden">
            <div className="container">
                <div className="col-12">
                    <div className="col-lg-8 col-12 mx-auto">
                        <span className="fs-8 fw-bold text-uppercase">Trending</span>
                        <div className="pb-3"></div>
                        <CardBlog14 card={featuredCardData} idx={0} />
                        <div className="row g-3">
                            {rowCardsData.map((card, idx) => (
                                <CardBlog15 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
