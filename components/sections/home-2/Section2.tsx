import CardBlog5 from "@/components/cards/CardBlog5";

const popularPostsData = [
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Lifestyle",
        title: "When the mountains breathe at first dawn",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        date: "January 13, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-23.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-24.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "The sea that quietly forgets our names",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-25.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-26.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "Beneath the cities, the roots still speak softly",
        description: "Even under steel, the old forest murmurs. The earth hasn't stopped dreaming of green.",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-27.webp",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "The sea that quietly forgets our names",
        description: "The waves erase without cruelty. To be forgotten by the sea is to return to something",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-28.webp",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-home-2 pb-3 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Popular Posts</h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-0 g-4">
                    {popularPostsData.map((card, idx) => (
                        <CardBlog5 key={idx} card={card} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
