"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";

const testimonialsData = [
    {
        quote: "Thomas has an incredible ability to turn ideas into stories that truly connect with audiences. His creative direction elevated our entire campaign.",
        author: "Lora Melia",
        position: "CEO at Vibe Media",
        avatar: "/assets/imgs/template/author/author-1.webp",
    },
    {
        quote: "Thomas has an incredible ability to turn ideas into stories that truly connect with audiences. His creative direction elevated our entire campaign.",
        author: "Lora Melia",
        position: "CEO at Vibe Media",
        avatar: "/assets/imgs/template/author/author-14.webp",
    },
    {
        quote: "Thomas has an incredible ability to turn ideas into stories that truly connect with audiences. His creative direction elevated our entire campaign.",
        author: "Lora Melia",
        position: "CEO at Vibe Media",
        avatar: "/assets/imgs/template/author/author-13.webp",
    },
    {
        quote: "Thomas has an incredible ability to turn ideas into stories that truly connect with audiences. His creative direction elevated our entire campaign.",
        author: "Lora Melia",
        position: "CEO at Vibe Media",
        avatar: "/assets/imgs/template/author/author-15.webp",
    },
    {
        quote: "Thomas has an incredible ability to turn ideas into stories that truly connect with audiences. His creative direction elevated our entire campaign.",
        author: "Lora Melia",
        position: "CEO at Vibe Media",
        avatar: "/assets/imgs/template/author/author-16.webp",
    },
];

const zIndexClasses = ["z-1", "z-2", "z-3", "z-4", "z-5"];

export default function Section3() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [mainSwiper, setMainSwiper] = useState<any>(null);

    const handleThumbClick = (index: number) => {
        if (mainSwiper && !mainSwiper.destroyed) {
            mainSwiper.slideTo(index);
        }
    };

    return (
        <section className="sec-3-about-me pb-50 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-8 col-12 mx-auto">
                            <div className="text-center">
                                <h5>Client's Testimonials</h5>
                                <div className="swiper testimonials-thumbs px-4">
                                    <SwiperDynamicServer
                                        className="swiper-wrapper testimonials-block-author block-author pt-3"
                                        slidesPerView={5}
                                        spaceBetween={16}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        loop={true}
                                        autoplay={{ delay: 4000 }}
                                        onSwiper={setThumbsSwiper}
                                        breakpoints={{
                                            1200: { slidesPerView: 5 },
                                            992: { slidesPerView: 5 },
                                            768: { slidesPerView: 5 },
                                            576: { slidesPerView: 4 },
                                            0: { slidesPerView: 4 },
                                        }}
                                    >
                                        {testimonialsData.map((testimonial, idx) => (
                                            <div className="swiper-slide" key={idx} onClick={() => handleThumbClick(idx)} style={{ cursor: "pointer" }}>
                                                <div className={`avatar avatar-lg rounded-6 m-0 overflow-hidden border-4 border-white shadow-1 ${zIndexClasses[idx]} hover-up-scale`}>
                                                    <Image className="cover-image rounded-6" src={testimonial.avatar} alt="foks" width={80} height={80} />
                                                </div>
                                            </div>
                                        ))}
                                    </SwiperDynamicServer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-12 mx-auto">
                            <div className="text-center">
                                <div className="swiper testimonials-swiper">
                                    <SwiperDynamicServer className="swiper-wrapper" slidesPerView={1} spaceBetween={0} loop={true} freeMode={false} autoplay={{ delay: 4000 }} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} onSwiper={setMainSwiper}>
                                        {testimonialsData.map((testimonial, idx) => (
                                            <div className="swiper-slide" key={idx}>
                                                <p className="fs-4 text-850 fw-medium mt-3">"{testimonial.quote}"</p>
                                                <h6 className="fs-6">
                                                    <Link href="/page-author">{testimonial.author}</Link>
                                                </h6>
                                                <p className="fs-7 text-700 mb-0">{testimonial.position}</p>
                                            </div>
                                        ))}
                                    </SwiperDynamicServer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
