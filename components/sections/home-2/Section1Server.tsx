import Link from "next/link";
import CardBlog5 from "@/components/cards/CardBlog5";
import Section1Interactive from "./Section1Interactive";

const mainCard = {
    classList: "",
    linkPost: "/single-6",
    linkCategory: "/archive-4",
    category: "Wilderness",
    title: "The loneliness of wolves reminds us of forgotten freedom",
    description: "Their cry reaches something ancient in us. The wilderness is not lost — only waiting for our courage to return.",
    date: "January 13, 2025",
    readTime: "10 min read",
    img: "/assets/imgs/page/img-20.webp",
};

const sideCards = [
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Solitude",
        title: "The sea that quietly forgets our names",
        description: "To be forgotten by the sea is to return to something larger than memory.",
        date: "January 26, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-21.webp",
    },
    {
        classList: "col-md-6 col-12",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "The morning touches their peaks like memory. Light and stone share a quiet",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-22.webp",
    },
];

const trendingTags = [
    { name: "Business", link: "/archive-2" },
    { name: "Technology", link: "/archive-2" },
    { name: "Automotive", link: "/archive-2" },
    { name: "Science", link: "/archive-2" },
    { name: "Social Issues", link: "/archive-2" },
    { name: "Entertainment", link: "/archive-2" },
    { name: "Gaming", link: "/archive-2" },
    { name: "Solitude", link: "/archive-2" },
    { name: "Ocean", link: "/archive-2" },
    { name: "Lifestyle", link: "/archive-2" },
];

export default function Section1Server() {
    return (
        <section className="sec-1-home-2 pt-50 pb-50 overflow-hidden">
            <div className="container">
                <div className="row pb-4 align-items-end">
                    <div className="col-lg-5">
                        <div className="position-relative">
                            <h1 className="ds-5 text-700">
                                Explore <span className="text-900">trending stories</span> worldwide
                            </h1>
                            <div className="position-absolute bottom-0 end-0 mb-4 d-none d-lg-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z" fill="#171717" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pe-5">
                        <div className="line-dot mb-3"></div>
                    </div>
                    <div className="col-lg-2 ms-auto">
                        <Section1Interactive />
                    </div>
                </div>
                <div className="row mb-3 g-3">
                    <div className="col-lg-5">
                        <CardBlog5 card={mainCard} idx={0} />
                    </div>
                    <div className="col-lg-7 g-3">
                        <div className="row">
                            {sideCards.map((card, idx) => (
                                <CardBlog5 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-12">
                        <div className="d-flex flex-wrap align-items-center gap-3 bg-card p-3 rounded-6 shadow-1">
                            <h6 className="fs-6 mb-0">What's trending:</h6>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2 ps-0 m-0">
                                {trendingTags.map((tag, idx) => (
                                    <li key={idx} className="hover-up">
                                        <Link href={tag.link} className="badge fs-7 text-700 hover-dark">
                                            {tag.name}
                                            {idx < trendingTags.length - 1 ? "," : ""}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
