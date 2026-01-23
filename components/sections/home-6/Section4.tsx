import CardBlog10 from "@/components/cards/CardBlog10";

const editorsPicksData = [
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-21.webp",
        title: "The sea that quietly forgets our names",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-94.webp",
        title: "Shadows that never learned to truly hide",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-11.webp",
        title: "Where the river turns back into silence",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse border-lg-0",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-95.webp",
        title: "When the mountains breathe at first dawn",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse border-lg-0",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-96.webp",
        title: "The sea that quietly forgets our names",
        date: "Jun 5, 2025",
        readTime: "10 min read",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "flex-row-reverse border-lg-0",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-97.webp",
        title: "Beneath the soil, seeds whisper about another day",
        date: "Jun 26, 2025",
        readTime: "10 min read",
    },
];

export default function Section4() {
    return (
        <section className="sec-4-home-6 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-2">
                        <div className="d-flex align-items-center gap-2">
                            <div className="icon-shape icon-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 1.125C5.37868 1.125 4.875 1.62868 4.875 2.25C4.875 2.87132 5.37868 3.375 6 3.375C6.62132 3.375 7.125 2.87132 7.125 2.25C7.125 1.62868 6.62132 1.125 6 1.125ZM3.75 2.25C3.75 1.00736 4.75736 0 6 0C7.24264 0 8.25 1.00736 8.25 2.25C8.25 3.29841 7.53293 4.17934 6.5625 4.42912V10.8442C8.81003 10.5968 10.5736 8.8845 10.8401 6.75H10.3125H9.75V5.625H10.3125H11.4375H12V6.1875C12 9.4161 9.29498 12 6 12C2.70506 12 0 9.4161 0 6.1875V5.625H0.5625H1.6875H2.25V6.75H1.6875H1.15989C1.42637 8.8845 3.18995 10.5968 5.4375 10.8442V4.42912C4.46706 4.17934 3.75 3.29841 3.75 2.25Z" fill="#171717" />
                                </svg>
                            </div>
                            <p className="fs-8 fw-bold text-uppercase mb-0">Editor's Picks</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {editorsPicksData.map((card, idx) => (
                        <CardBlog10 key={idx} card={card} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
