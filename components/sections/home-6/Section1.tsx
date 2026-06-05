import Link from "next/link";
import Image from "next/image";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const featuredArticlesData = [
    {
        linkPost: "/reports/logistics-monopolies-blueprint",
        linkCategory: "/category/logistics",
        category: "Regional Autonomy",
        title: "The Blueprint for Regional Autonomy: Decoupling from Logistics Monopolies",
        description: "Counteracting centralized technocracies requires more than oversight; it requires the active incubation of regional alternatives. Our latest briefing explores how EU-based logistics networks are utilizing peer-to-peer data mesh technology to bypass global logistics monopolies, returning economic weight to local stakeholders.",
        linkAuthor: "/about-us",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        author: "d-couple Research",
        date: "January 2026",
        readTime: "12 mins read",
        img: "/assets/imgs/page/img-89.webp",
        tags: [
            { link: "/category/logistics", name: "Logistics" },
            { link: "/category/eu-funding", name: "EU Funding" },
            { link: "/category/regional-alternatives", name: "Regional Alternatives" },
            { link: "/category/governance", name: "Governance" },
            { link: "/category/supply-chain", name: "Supply Chain" },
        ],
    },
    {
        linkPost: "/reports/tech-sovereignty-framework",
        linkCategory: "/category/governance",
        category: "Tech Sovereignty",
        title: "Digital Sovereignty Framework: How Regional Cloud Infrastructure Counters Big Tech",
        description: "An analysis of EU-based alternatives to global supply chain technocracies. This report examines GAIA-X, sovereign cloud initiatives, and regional data centers that provide viable alternatives to AWS, Google Cloud, and Azure monopolies.",
        linkAuthor: "/about-us",
        imgAuthor: "/assets/imgs/template/author/author-1.webp",
        author: "d-couple Intelligence",
        date: "January 2026",
        readTime: "15 mins read",
        img: "/assets/imgs/page/img-62.webp",
        tags: [
            { link: "/category/cloud-infrastructure", name: "Cloud Infrastructure" },
            { link: "/category/data-sovereignty", name: "Data Sovereignty" },
            { link: "/category/eu-policy", name: "EU Policy" },
            { link: "/category/tech-monopolies", name: "Tech Monopolies" },
        ],
    },
];

export default function Section1() {
    return (
        <section className="sec-1-home-6 overflow-hidden pt-50 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 mx-auto">
                        <div className="text-center">
                            <Link href="#" className="tag has-dot green text-nowrap rounded-pill">
                                <span className="text-nowrap link-effect-1">
                                    <span className="text-1">10k+ Data Points Tracked</span>
                                    <span className="text-2">10k+ Data Points Tracked</span>
                                </span>
                            </Link>
                            <h1 className="ds-5 mt-3">
                                Decoupling from Global Monopolies through Strategic Autonomy.
                            </h1>
                            <span className="fs-7 text-700">
                                Providing the blueprints, legal frameworks, and regional alternatives <br className="d-none d-md-block" />
                                needed to foster sovereign growth.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row pt-50">
                    <div className="col-12 mb-2">
                        <div className="d-inline-flex align-items-center gap-2">
                            <div className="icon-shape icon-14">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.47104 2.625H8.81479V3.9375H9.47104H11.7583L7.43727 8.2585L5.43099 6.253C5.08926 5.9114 4.53533 5.91146 4.19367 6.25312L0.629567 9.81724L0.165527 10.2812L1.0936 11.2094L1.55764 10.7453L4.81244 7.4905L6.81872 9.49603C7.16045 9.83763 7.71438 9.83754 8.05604 9.49585L12.6863 4.86558V7.15279V7.80904H13.9988V7.15279V3.5C13.9988 3.01675 13.6071 2.625 13.1238 2.625H9.47104Z" fill="#171717" />
                                </svg>
                            </div>
                            <p className="fs-8 fw-bold text-uppercase mb-0">Decoupling Growth Strategy</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="pt-1 swiper slider-1 pb-2 position-relative">
                            <SwiperDynamicServer
                                className="swiper-wrapper"
                                slidesPerView={1}
                                spaceBetween={24}
                                slidesPerGroup={1}
                                centeredSlides={false}
                                loop={true}
                                navigation={{
                                    prevEl: ".swiper-btn-prev",
                                    nextEl: ".swiper-btn-next",
                                }}
                            >
                                {featuredArticlesData.map((card, idx) => (
                                    <div className="swiper-slide" key={idx}>
                                        <div className="card-blog card-feature hover-up hover-zoom-image pt-1 flex-column shadow-0 flex-lg-row bg-body border-0">
                                            <Link href={card.linkPost} className="card-img rounded-6 overflow-hidden">
                                                <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={400} priority />
                                            </Link>
                                            <div className="card-body">
                                                <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                                                    <span className="text-nowrap link-effect-1">
                                                        <span className="text-1">{card.category}</span>
                                                        <span className="text-2">{card.category}</span>
                                                    </span>
                                                </Link>
                                                <h2 className="h4 mb-2 mt-2 hover-underline">
                                                    <Link href={card.linkPost} className="text-truncate-2">
                                                        <span className="card-title">{card.title}</span>
                                                    </Link>
                                                </h2>
                                                <p className="fs-7 text-truncate-3">{card.description}</p>
                                                <div className="information pt-3 mt-3 border-top">
                                                    <Link href={card.linkAuthor} className="author">
                                                        <span className="author-img">
                                                            <Image src={card.imgAuthor} alt={card.author} width={24} height={24} />
                                                        </span>
                                                        <span className="author-info">{card.author}</span>
                                                    </Link>
                                                    <div className="date">
                                                        <span className="dot"></span>
                                                        <span className="text fs-8 fw-medium">{card.date}</span>
                                                    </div>
                                                    <div className="read-time ms-auto">
                                                        <span className="dot"></span>
                                                        <span className="text fs-8 fw-medium">{card.readTime}</span>
                                                    </div>
                                                </div>
                                                <div className="group-tag w-75 mt-4">
                                                    {card.tags.map((tag, tagIdx) => (
                                                        <Link key={tagIdx} href={tag.link} className="tag">
                                                            {tag.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </SwiperDynamicServer>
                            <div className="position-absolute bottom-0 end-0 d-flex gap-6px z-1 mb-4 me-4">
                                <div className="bg-card swiper-btn-prev">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.02462 0.397748L4.42236 0L5.21786 0.795495L4.82011 1.19324L1.84289 4.1705H9.85986H10.4224V5.29549H9.85986H1.84289L4.82011 8.27276L5.21786 8.67049L4.42236 9.46601L4.02462 9.06821L0.219663 5.26332C-0.0732126 4.97043 -0.0732126 4.49555 0.219663 4.20266L4.02462 0.397748Z" fill="#171717" />
                                    </svg>
                                </div>
                                <div className="bg-card swiper-btn-next">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.39775 0.397748L6 0L5.20451 0.795495L5.60225 1.19324L8.57948 4.1705H0.5625H0V5.29549H0.5625H8.57948L5.60225 8.27276L5.20451 8.67049L6 9.46601L6.39775 9.06821L10.2027 5.26332C10.4956 4.97043 10.4956 4.49555 10.2027 4.20266L6.39775 0.397748Z" fill="#171717" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
