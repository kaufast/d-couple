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

export default function Section2() {
    return (
        <section className="sec-2-home-6 pb-60 overflow-hidden">
            <div className="container">
                <div className="row pb-2">
                    <div className="col-12 mb-2">
                        <div className="d-flex align-items-center gap-2">
                            <div className="icon-shape icon-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.92073 0L7.49686 1.05642L9.18767 4.15671L12.6587 4.80671L13.8414 5.0282L13.0147 5.9026L10.5887 8.46869L11.0431 11.9707L11.198 13.164L10.1109 12.648L6.92073 11.1336L3.73054 12.648L2.64348 13.164L2.79832 11.9707L3.25274 8.46869L0.826677 5.9026L0 5.0282L1.18276 4.80671L4.65379 4.15671L6.34458 1.05642L6.92073 0ZM6.92073 2.74126L5.65691 5.05862L5.50776 5.33211L5.20156 5.38944L2.60709 5.8753L4.42049 7.79336L4.6345 8.01972L4.59442 8.32865L4.25475 10.9463L6.6393 9.81435L6.92073 9.68074L7.20215 9.81435L9.58667 10.9463L9.24699 8.32865L9.20692 8.01972L9.42094 7.79336L11.2344 5.8753L8.63988 5.38944L8.33369 5.33211L8.18453 5.05862L6.92073 2.74126Z" fill="#171717" />
                                </svg>
                            </div>
                            <p className="fs-8 fw-bold text-uppercase mb-0">Popular Categories</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
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
