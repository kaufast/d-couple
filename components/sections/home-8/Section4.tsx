import CategoryCard1 from "@/components/cards/CategoryCard1";

const categoriesData = [
    {
        classList: "",
        img: "/assets/imgs/page/img-44.webp",
        linkCategory: "/archive-1",
        category: "Work Life",
        count: "130",
    },
    {
        classList: "",
        img: "/assets/imgs/page/img-24.webp",
        linkCategory: "/archive-2",
        category: "Culture",
        count: "160",
    },
    {
        classList: "",
        img: "/assets/imgs/page/img-5.webp",
        linkCategory: "/archive-3",
        category: "Lifestyle",
        count: "180",
    },
    {
        classList: "",
        img: "/assets/imgs/page/img-40.webp",
        linkCategory: "/archive-4",
        category: "Gaming",
        count: "120",
    },
    {
        classList: "",
        img: "/assets/imgs/page/img-42.webp",
        linkCategory: "/archive-5",
        category: "Science",
        count: "148",
    },
    {
        classList: "",
        img: "/assets/imgs/page/img-14.webp",
        linkCategory: "/archive-6",
        category: "Hobbies",
        count: "158",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-8 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-4 text-center">
                        <span className="fs-8 fw-bold text-uppercase">Popular Categories</span>
                    </div>
                    <div className="col-12 pt-3">
                        <div className="d-flex flex-wrap align-items-center gap-4 justify-content-lg-between justify-content-md-start">
                            {categoriesData.map((card, idx) => (
                                <CategoryCard1 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
