import Image from "next/image";
import CardFeature from "@/components/cards/CardFeature";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";
import Section1Interactive from "./Section1Interactive";

const featuredArticlesData = [
    {
        linkPost: "/single-1",
        linkCategory: "/archive-3",
        category: "Solitude",
        title: "There is a kind of peace only found in the fading of nature",
        description: "When the green recedes, silence blooms. What's left is fragile — but beautifully still.",
        linkAuthor: "/page-author",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        author: "Lora",
        date: "January 25, 2025",
        readTime: "6 mins read",
        img: "/assets/imgs/page/img-66.webp",
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
        linkCategory: "/archive-4",
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

const blogCardsData = [
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
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Listening to the earth between great stormss",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-22.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "The silent language of color and motion",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-138.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Where design ends and experience begins",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-139.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "What the future looks like in grayscale",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-140.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Stories told through pixels and patterns",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-141.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "The invisible rhythm behind good UI",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-142.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "Designing beauty that doesn't demand attention",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-143.webp",
    },
    {
        classList: "col-lg-3 col-md-4 col-12",
        linkPost: "/single-6",
        title: "When machines begin to dream of trees",
        date: "January 13, 2025",
        img: "/assets/imgs/page/img-144.webp",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-3 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-131.webp" alt="d-couple" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Technology</h1>
                                </li>
                                <li>
                                    <p className="fs-7 text-700 m-0 mt-2 fw-medium">Explore the stories, values, and symbols that shape human identity through the lens of culture.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 ms-auto col-md-6 col-12">
                        <form action="#" className="mt-2">
                            <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-pill overflow-hidden">
                                <div className="icon size-16 ps-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.875C1.125 2.80394 2.80394 1.125 4.875 1.125C6.94606 1.125 8.625 2.80394 8.625 4.875C8.625 6.94606 6.94606 8.625 4.875 8.625C2.80394 8.625 1.125 6.94606 1.125 4.875ZM4.875 0C2.18261 0 0 2.18261 0 4.875C0 7.56742 2.18261 9.75 4.875 9.75C6.01852 9.75 7.07008 9.35625 7.90147 8.697L10.4773 11.2727L10.875 11.6705L11.6705 10.875L11.2727 10.4773L8.697 7.90147C9.35625 7.07008 9.75 6.01852 9.75 4.875C9.75 2.18261 7.56742 0 4.875 0Z" fill="#7D7D7D"></path>
                                    </svg>
                                </div>
                                <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="pt-1 swiper slider-1 pb-2">
                            <SwiperDynamicServer
                                className="swiper slider-1 pt-1 pb-2"
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
                                        <CardFeature card={card} idx={idx} />
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
                <Section1Interactive blogCards={blogCardsData} />
            </div>
        </section>
    );
}
