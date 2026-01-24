import Image from "next/image";
import Link from "next/link";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const featuredArticlesData = [
    {
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        category: "Solitude",
        title: "There is a kind of peace only found in the fading of nature",
        description: "When the green recedes, silence blooms. What's left is fragile — but beautifully still.",
        linkAuthor: "/page-author",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        author: "Lora",
        date: "January 25, 2025",
        readTime: "6 mins read",
        img: "/assets/imgs/page/img-89.webp",
        tags: [
            { link: "/archive-1", name: "silence" },
            { link: "/archive-2", name: "noise" },
            { link: "/archive-3", name: "solitude" },
            { link: "/archive-4", name: "landscape" },
            { link: "/archive-5", name: "mindfulness" },
            { link: "/archive-6", name: "World" },
        ],
    },
    {
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        category: "Solitude",
        title: "There is a kind of peace only found in the fading of nature",
        description: "When the green recedes, silence blooms. What's left is fragile — but beautifully still.",
        linkAuthor: "/page-author",
        imgAuthor: "/assets/imgs/template/author/author-1.webp",
        author: "Lora",
        date: "January 25, 2025",
        readTime: "6 mins read",
        img: "/assets/imgs/page/img-62.webp",
        tags: [
            { link: "/archive-1", name: "silence" },
            { link: "/archive-2", name: "noise" },
            { link: "/archive-3", name: "solitude" },
            { link: "/archive-4", name: "landscape" },
            { link: "/archive-5", name: "mindfulness" },
            { link: "/archive-6", name: "World" },
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
                                    <span className="text-1">10k+ Satisfied Customers</span>
                                    <span className="text-2">10k+ Satisfied Customers</span>
                                </span>
                            </Link>
                            <h1 className="ds-5 mt-3">
                                Discover fresh ideas
                                <span className="d-inline-flex rounded-pill overflow-hidden mx-2">
                                    <Image className="cover-image" src="/assets/imgs/page/img-88.webp" alt="d-couple" width={85} height={44} />
                                </span>
                                and creative inspiration at Foks
                            </h1>
                            <span className="fs-7 text-700">
                                Explore breaking stories and cultural trends from across the globe, and <br className="d-none d-md-block" />
                                hear the voices that are redefining how we see the world today.
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
                            <p className="fs-8 fw-bold text-uppercase mb-0">Featured Article</p>
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
                                                <Image className="image cover-image" src={card.img} alt="d-couple" width={600} height={400} />
                                            </Link>
                                            <div className="card-body">
                                                <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                                                    <span className="text-nowrap link-effect-1">
                                                        <span className="text-1">{card.category}</span>
                                                        <span className="text-2">{card.category}</span>
                                                    </span>
                                                </Link>
                                                <h4 className="mb-2 mt-2 hover-underline">
                                                    <Link href={card.linkPost} className="text-truncate-2">
                                                        <span className="card-title">{card.title}</span>
                                                    </Link>
                                                </h4>
                                                <p className="fs-7 text-truncate-3">{card.description}</p>
                                                <div className="information pt-3 mt-3 border-top">
                                                    <Link href={card.linkAuthor} className="author">
                                                        <span className="author-img">
                                                            <Image src={card.imgAuthor} alt="d-couple" width={24} height={24} />
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
