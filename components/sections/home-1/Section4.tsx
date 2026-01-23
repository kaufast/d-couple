import CategoryCard2 from "@/components/cards/CategoryCard2";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const categoryData = [
    {
        linkCategory: "/archive-1",
        img: "/assets/imgs/page/img-14.webp",
        category: "Lifestyle",
        articlesCount: "158",
    },
    {
        linkCategory: "/archive-2",
        img: "/assets/imgs/page/img-15.webp",
        category: "Culture",
        articlesCount: "48",
    },
    {
        linkCategory: "/archive-3",
        img: "/assets/imgs/page/img-16.webp",
        category: "Science",
        articlesCount: "256",
    },
    {
        linkCategory: "/archive-4",
        img: "/assets/imgs/page/img-17.webp",
        category: "Hobbies",
        articlesCount: "128",
    },
    {
        linkCategory: "/archive-5",
        img: "/assets/imgs/page/img-18.webp",
        category: "Gaming",
        articlesCount: "64",
    },
    {
        linkCategory: "/archive-6",
        img: "/assets/imgs/page/img-19.webp",
        category: "Work Life",
        articlesCount: "32",
    },
];

export default function Section4({ classList }: { classList?: string }) {
    return (
        <section className="sec-4-home-1 pb-50 overflow-hidden">
                <div className="container">
                    <div className="row g-3">
                        <div className={`col-12 ${classList}`}>
                            <span className="fs-7 text-800 fw-bold">Browse by Category</span>
                        </div>

                        <div className="col-12">
                            <div className="swiper category-swiper">
                                <SwiperDynamicServer
                                    className="swiper-wrapper"
                                    slidesPerView={2}
                                    spaceBetween={12}
                                    loop={true}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 5,
                                            spaceBetween: 12,
                                        },
                                        992: {
                                            slidesPerView: 6,
                                            spaceBetween: 12,
                                        },
                                    }}
                                >
                                    {categoryData.map((card, idx) => (
                                        <div className="swiper-slide" key={idx}>
                                            <CategoryCard2 card={card} idx={idx} noColumnClasses={true} />
                                        </div>
                                    ))}
                                </SwiperDynamicServer>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
