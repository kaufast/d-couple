import Link from "next/link";
import CardBlog9 from "@/components/cards/CardBlog9";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const sliderData = [
    {
        classList: "swiper-slide",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Solitude",
        title: "The sea that quietly forgets our names",
        description: "To be forgotten by the sea is to return to something larger than memory.",
        date: "January 26, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-67.webp",
    },
    {
        classList: "swiper-slide",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "The morning touches their peaks like memory. Light and stone share a quiet",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-68.webp",
    },
    {
        classList: "swiper-slide",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        category: "Renewal",
        title: "When the mountains breathe at first dawn",
        description: "The morning touches their peaks like memory. Light and stone share a quiet",
        date: "February 6, 2025",
        readTime: "10 min read",
        img: "/assets/imgs/page/img-69.webp",
    },
];

const trendingTags = [
    { name: "Business,", href: "/archive-5" },
    { name: "Technology,", href: "/archive-5" },
    { name: "Automotive,", href: "/archive-5" },
    { name: "Science,", href: "/archive-5" },
    { name: "Social Issues,", href: "/archive-5" },
    { name: "Entertainment,", href: "/archive-5" },
    { name: "Gaming,", href: "/archive-5" },
    { name: "Solitude,", href: "/archive-5" },
    { name: "Ocean,", href: "/archive-5" },
    { name: "Lifestyle,", href: "/archive-5" },
];

export default function Section1() {
    return (
        <section className="sec-1-home-5 overflow-hidden pt-4 pb-4">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12">
                        <div className="swiper slider-3">
                            <SwiperDynamicServer className="swiper-wrapper" slidesPerView={1} spaceBetween={24} loop={true} autoplay={{ delay: 3000 }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                                {sliderData.map((card, idx) => (
                                    <div className="swiper-slide" key={idx}>
                                        <CardBlog9 card={card} idx={idx} />
                                    </div>
                                ))}
                            </SwiperDynamicServer>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-12">
                        <div className="d-flex flex-wrap align-items-center gap-3 p-3 border-top-900 border-bottom-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6349 0H9.88487V1.5H10.6349H13.2489L8.31056 6.43829L6.01767 4.14629C5.62712 3.75589 4.99406 3.75595 4.60359 4.14642L0.530331 8.2197L0 8.75L1.06066 9.8107L1.59099 9.2803L5.31076 5.56057L7.60365 7.8526C7.9942 8.243 8.62726 8.2429 9.01773 7.8524L14.3095 2.56066V5.17462V5.92462H15.8095V5.17462V1C15.8095 0.44772 15.3618 0 14.8095 0H10.6349Z" fill="#7D7D7D" />
                            </svg>
                            <h6 className="fs-6 mb-0">What's trending:</h6>
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2 ps-0 m-0">
                                {trendingTags.map((tag, idx) => (
                                    <li key={idx} className="hover-up">
                                        <Link href={tag.href} className="badge fs-7 text-700 hover-dark">
                                            {tag.name}
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
