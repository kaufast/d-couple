import CardBlog10 from "@/components/cards/CardBlog10";
import CardBlog8 from "@/components/cards/CardBlog8";
import SideBar2 from "@/components/elements/sidebar2";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";
import Section1Interactive from "./Section1Interactive";

const sliderData = [
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-9.webp",
        title: "Time slowly fades where moss grows",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-10.webp",
        title: "The weight of light in endless fields",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-11.webp",
        title: "What the fire gently leaves behind",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-10.webp",
        title: "The weight of light in endless fields",
        date: "Jun 13, 2025",
        readTime: "10 min read",
    },
];

const featuredCardData = {
    classList: "col-12",
    classCard: "",
    linkPost: "/single-6",
    linkCategory: "/archive-4",
    linkAuthor: "/page-author",
    category: "Lifestyle",
    title: "The breath of the mountains stays warm, even when humanity walks away",
    description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
    date: "January 13, 2025",
    readTime: "10 min read",
    author: "John Doe",
    imgAuthor: "/assets/imgs/template/author/author-12.webp",
    img: "/assets/imgs/page/img-47.webp",
};

const latestNewsData = [
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-48.webp",
        category: "World",
        title: "When nature stops waiting for us to return",
        description: "There comes a time when the wild no longer looks for us. Forests learn to grow without footsteps, and rivers forget the sound of bridges.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Tair",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-49.webp",
        category: "Entertainment",
        title: "Beneath the soil, seeds whisper about another day",
        description: "Even in stillness, life speaks softly. Hidden under the quiet earth, small voices promise a future we can't yet see.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-50.webp",
        category: "Fashion",
        title: "Stories the stones keep to themselves",
        description: "The earth remembers everything — our footsteps, our fires, our silence. Stones keep their own kind of truth, patient and wordless.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Nira",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Reflection",
        title: "Listening to the earth between storms",
        description: "There's a calm voice in the pause before thunder. Sometimes, silence is the loudest form of understanding.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-53.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Solitude",
        title: "When the mountains breathe at first dawn",
        description: "Morning finds its way through mist and memory. The mountains inhale light as if they're waking from an ancient dream.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Reflection",
        title: "Listening to the earth between storms",
        description: "There's a calm voice in the pause before thunder. Sometimes, silence is the loudest form of understanding.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-53.webp",
        category: "Renewal",
        title: "Beneath the soil, seeds whisper about another day",
        description: "In the quiet dark, life hums beneath our forgetting. Tiny seeds dream of sunlight that has not yet arrived, carrying the memory of rain and patience.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Kaen",
        date: "Jun 13, 2025",
    },
];

export default function Section1Server() {
    return (
        <section className="sec-1-home-4 pt-2 pb-60 overflow-hidden">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="swiper slider-3">
                            <SwiperDynamicServer className="swiper-wrapper" slidesPerView={1} spaceBetween={24} loop={true} autoplay={{ delay: 3000 }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                                {sliderData.map((card, idx) => (
                                    <div className="swiper-slide" key={idx}>
                                        <CardBlog10 card={card} idx={idx} />
                                    </div>
                                ))}
                            </SwiperDynamicServer>
                        </div>
                    </div>
                </div>
                <div className="row g-5 pt-4">
                    <div className="col-lg-8 col-12">
                        <CardBlog8 card={featuredCardData} idx={0} />
                        <div className="col-12 pt-4 pb-3">
                            <div className="block-header">
                                <h6 className="mb-0"># Latest news</h6>
                            </div>
                        </div>
                        <Section1Interactive newsData={latestNewsData} />
                    </div>
                    <div className="col-lg-4">
                        <SideBar2 displayFlashNews={true} displayTopAuthors={true} displayFollowUs={true} displayTrendingTopics={true} displayAds={true} />
                    </div>
                </div>
            </div>
        </section>
    );
}
