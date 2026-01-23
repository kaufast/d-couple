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
        img: "/assets/imgs/page/img-40.webp",
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
        img: "/assets/imgs/page/img-41.webp",
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
        img: "/assets/imgs/page/img-42.webp",
    },
];

export default function Section3() {
    return (
        <section className="sec-3-home-3 position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Popular Posts</h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 g-3">
                    {/* prettier-ignore */}
                    {popularPostsData.map((card, idx) => (
                        <CardBlog5 key={idx} card={card} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
