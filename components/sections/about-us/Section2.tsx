import AuthorCard2 from "@/components/cards/AuthorCard2";
import TopAuthorCard from "@/components/cards/TopAuthorCard";

const keyContributorsData = [
    {
        classList: "col-lg-3 col-md-6 col-12",
        img: "/assets/imgs/page/img-115.webp",
        name: "James Carter",
        position: "Managing Editor",
        followers: "25k follow",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        img: "/assets/imgs/page/img-116.webp",
        name: "Maya Ortiz",
        position: "Features Editor",
        followers: "25k follow",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        img: "/assets/imgs/page/img-117.webp",
        name: "Sophia Nguyen",
        position: "Senior Writer",
        followers: "25k follow",
    },
    {
        classList: "col-lg-3 col-md-6 col-12",
        img: "/assets/imgs/page/img-118.webp",
        name: "Emma Rossi",
        position: "Editor-in-Chief",
        followers: "25k follow",
    },
];

const topAuthorsData = [
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-1.webp",
        name: "Laura Bennett",
        number: "1",
        position: "Elite author",
        followers: "25k follow",
    },
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-3.webp",
        name: "Author favorite",
        number: "2",
        position: "Exclusive author",
        followers: "12k follow",
    },
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-16.webp",
        name: "Noah Patel",
        number: "3",
        position: "Global News",
        followers: "15k follow",
    },
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-2.webp",
        name: "Daniel Cross",
        number: "4",
        position: "Exclusive author",
        followers: "15k follow",
    },
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-4.webp",
        name: "Sophia Turner",
        number: "4",
        position: "Author favorite",
        followers: "15k follow",
    },
    {
        classList: "",
        linkAuthor: "/page-author",
        img: "/assets/imgs/template/author/author-17.webp",
        name: "Hugo Laurent",
        number: "4",
        position: "Creative",
        followers: "15k follow",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-about pb-5 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-header">
                                <h6 className="mb-0"># Key contributors</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4 g-3">
                        {keyContributorsData.map((card, idx) => (
                            <AuthorCard2 key={idx} card={card} idx={idx} />
                        ))}
                    </div>
                    <div className="top-author pt-40 pb-4">
                        <span className="fs-8 fw-bold text-uppercase mb-2">Top Authors</span>
                        <div className="d-flex flex-wrap justify-content-between">
                            {topAuthorsData.map((card, idx) => (
                                <TopAuthorCard key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
}
