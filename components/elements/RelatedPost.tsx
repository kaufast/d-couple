import CardBlog11 from "@/components/cards/CardBlog11";

const relatedPostsData = [
    {
        classList: "col-lg-3 col-md-4 col-6",
        linkPost: "/single-6",
        title: "Beneath the cities, the roots still speak softly",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-81.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-6",
        linkPost: "/single-6",
        title: "The last bird before the morning comes",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-82.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-6",
        linkPost: "/single-6",
        title: "Shadows that never learned to truly hide",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-85.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-6 d-md-none d-lg-block d-block",
        linkPost: "/single-6",
        title: "The sea that quietly forgets our names",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-86.webp",
    },
];

export default function RelatedPost() {
    return (
        <section className="related-post pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <p className="text-800 fw-bold fs-8 text-uppercase mb-3">Related posts</p>
                    </div>
                </div>
                <div className="row g-md-3 g-2">
                    {relatedPostsData.map((card, idx) => (
                        <CardBlog11 key={idx} card={card} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
