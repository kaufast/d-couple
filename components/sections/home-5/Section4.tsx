import CardBlog11 from "@/components/cards/CardBlog11";

const cards = [
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Listening to the earth between great stormss",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-80.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Beneath the cities, the roots still speak softly",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-81.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "The last bird before the morning comes",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-82.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "ListeThe wild that waits beneath our endless noise",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-83.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Where the river turns back into silence",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-84.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Shadows that never learned to truly hide",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-85.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "The sea that quietly forgets our names",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-86.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "When machines begin to dream of trees",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-87.webp",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-5 pb-70 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-header">
                            <h6 className="mb-0"># Editor Picked</h6>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 g-3">
                    {cards.map((card, idx) => (
                        <CardBlog11 key={idx} card={card} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
