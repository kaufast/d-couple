import CategoryCard2 from "@/components/cards/CategoryCard2";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const categoryData = [
    {
        linkCategory: "/category/capital-lab",
        img: "/assets/imgs/page/img-14.webp",
        category: "Capital Lab",
        articlesCount: "42",
    },
    {
        linkCategory: "/category/logistics-autonomy",
        img: "/assets/imgs/page/img-15.webp",
        category: "Logistics Autonomy",
        articlesCount: "67",
    },
    {
        linkCategory: "/category/sovereign-tech",
        img: "/assets/imgs/page/img-16.webp",
        category: "Sovereign Tech",
        articlesCount: "89",
    },
    {
        linkCategory: "/category/jurisdictional-law",
        img: "/assets/imgs/page/img-17.webp",
        category: "Jurisdictional Law",
        articlesCount: "54",
    },
    {
        linkCategory: "/category/field-intel",
        img: "/assets/imgs/page/img-18.webp",
        category: "Field Intel",
        articlesCount: "128",
    },
    {
        linkCategory: "/category/work-trade-autonomy",
        img: "/assets/imgs/page/img-19.webp",
        category: "Work/Trade Autonomy",
        articlesCount: "76",
    },
];

export default function Section4({ classList }: { classList?: string }) {
    return (
        <section className="sec-4-home-1 pb-50 overflow-hidden">
                <div className="container">
                    <div className="row g-3">
                        <div className={`col-12 ${classList}`}>
                            <span className="fs-7 text-800 fw-bold">Strategic Sectors</span>
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
