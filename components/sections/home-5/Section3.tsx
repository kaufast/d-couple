import CardBlog5 from "@/components/cards/CardBlog5";
import CardBlog10 from "@/components/cards/CardBlog10";

const featuredCard = {
    classList: "col-lg-5 col-12",
    linkPost: "/single-6",
    linkCategory: "/archive-4",
    category: "Reflection",
    title: "When the forests grow silent, and humans finally hear themselves again",
    description: "When the noise fades, we meet our own echoes among the trees. The silence isn't empty",
    date: "January 13, 2025",
    readTime: "10 min read",
    img: "/assets/imgs/page/img-76.webp",
};

const row1Cards = [
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Hobbies",
        title: "Returning to the unnamed wild the maps",
        description: "There are places that refuse to be mapped not because they're far",
        date: "January 26, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-77.webp",
    },
];

const row2Cards = [
    {
        classList: "pt-0",
        classCard: "pt-0",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-78.webp",
        title: "Time slowly fades where moss grows",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "",
        classCard: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-1.webp",
        title: "The weight of light in endless fields",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "",
        classCard: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-79.webp",
        title: "What the fire gently leaves behind",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "",
        classCard: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-45.webp",
        title: "A meadow quietly built from memory",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
];

export default function Section3() {
    return (
        <section className="sec-3-home-5 pb-4 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Editor Picked</h6>
                        </div>
                    </div>
                </div>
                <div className="row g-3 pt-4">
                    <CardBlog5 card={featuredCard} idx={0} />
                    <div className="col-lg-7">
                        <div className="row g-3">
                            {row1Cards.map((card, idx) => (
                                <CardBlog5 key={idx} card={card} idx={idx} />
                            ))}
                            <div className="col-md-6 col-12">
                                {row2Cards.map((card, idx) => (
                                    <CardBlog10 key={idx} card={card} idx={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
