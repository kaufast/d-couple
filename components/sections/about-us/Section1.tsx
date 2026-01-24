"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { EXTERNAL_URLS } from "@/config/urls";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = EXTERNAL_URLS.YOUTUBE_DEFAULT_VIDEO_ID;

    return (
        <>
            <section className="sec-1-about pt-3 pb-5 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-0 ds-5 mb-4">
                                Connecting minds through <br />
                                meaningful and powerful storytelling
                            </h1>
                        </div>
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <Image src="/assets/imgs/page/img-108.webp" alt="d-couple" className="cover-image" width={600} height={400} />
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <Image src="/assets/imgs/page/img-109.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                                <Image src="/assets/imgs/page/img-110.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                            </div>
                            <h5 className="my-3">
                                Crafting tales that echo <br />
                                across minds and borders
                            </h5>
                            <p className="text-850 fw-medium">At Foks, we believe stories have the power to transcend language and geography. Crafting tales that echo across minds and borders reflects our mission to create narratives that spark emotion, provoke thought, and build bridges between cultures.</p>
                            <Link href="/about-me" className="btn btn-dark">
                                <span className="text-nowrap">See our itinerary</span>
                                <span className="group-icon">
                                    <span className="group-icon-inner dark-mode-invert">
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                                        </svg>
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12">
                            <div className="block-header">
                                <h6 className="mb-0"># About us</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-6 col-12">
                            <Image src="/assets/imgs/page/img-111.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Image src="/assets/imgs/page/img-112.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Image src="/assets/imgs/page/img-113.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Image src="/assets/imgs/page/img-114.webp" alt="d-couple" className="cover-image" width={300} height={200} />
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-6 col-12">
                            <div className="block-content">
                                <h3>Vision</h3>
                                <p className="text-850 fw-medium">At Foks, we believe stories have the power to transcend language and geography. Crafting tales that echo across minds and borders reflects our mission to create narratives that spark emotion, provoke thought, and build bridges between cultures.</p>
                            </div>
                            <div className="block-content">
                                <h3>Mission</h3>
                                <ul className="ps-3">
                                    <li>
                                        <p className="text-850 fw-medium mb-0">Deliver thoughtful journalism that informs, inspires, and challenges perspectives.</p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">Showcase diverse voices across culture, design, technology, lifestyle, science, and society.</p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">Make complex ideas accessible, engaging, and relevant for a global audience.</p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">Celebrate creativity, innovation, and the ever-evolving pulse of modern life.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="block-content">
                                <h3>Awards</h3>
                                <p className="text-850 fw-medium mb-3">Over the years, Foks has been recognized for its commitment to creative storytelling, journalistic integrity, and design excellence. These honors reflect the dedication of our team and the trust of our readers worldwide.</p>
                                <ul className="ps-3 text-dark">
                                    <li>
                                        <p className="text-850 fw-medium mb-0">
                                            <span className="text-dark">Best Digital Magazine Design</span> – Global Media Awards 2024
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">
                                            <span className="text-dark">Excellence in Independent Journalism</span> – World Press Guild 2023
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">
                                            <span className="text-dark">Top 10 Emerging Online Publications</span> – Media Innovation Forum 2023
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">
                                            <span className="text-dark">Outstanding Editorial Concept</span> – Creative Media Awards 2022
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-850 fw-medium mb-0">
                                            <span className="text-dark">Innovation in Storytelling</span> – Digital Publishing Awards 2022
                                        </p>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center gap-2 pt-3">
                                    <Link href="/page-contact" className="btn btn-outline">
                                        <span className="text-nowrap">Subscribe now</span>
                                        <span className="group-icon">
                                            <span className="group-icon-inner dark-mode-invert">
                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                                                </svg>
                                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </Link>
                                    <a
                                        href={EXTERNAL_URLS.YOUTUBE_DEFAULT_VIDEO}
                                        className="hover-up play-btn popup-video"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(true);
                                        }}
                                    >
                                        <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.4705 4.13888C8.58563 4.19646 8.58563 4.36081 8.4705 4.41839L0.226125 8.54058C0.122237 8.59252 0 8.51695 0 8.40083V0.156453C0 0.0402968 0.122237 -0.035247 0.226125 0.0166968L8.4705 4.13888Z" fill="#171717" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 col-12 pt-5">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">12+</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Years experience</h6>
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-1.svg" alt="d-couple" width={50} height={50} />
                                </div>
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">250+</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Projects finished</h6>
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-2.svg" alt="d-couple" width={50} height={50} />
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-3.svg" alt="d-couple" width={50} height={50} />
                                </div>
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">2k</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Happy Clients</h6>
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-4.svg" alt="d-couple" width={50} height={50} />
                                </div>
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">15k+</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Positive Reviews</h6>
                                </div>
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">2M+</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Social Followers</h6>
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-5.svg" alt="d-couple" width={50} height={50} />
                                </div>
                                <div className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                    <h5 className="mb-1">17</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">Global Branch</h6>
                                </div>
                                <div className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                    <Image src="/assets/imgs/template/icons/icon-6.svg" alt="d-couple" width={50} height={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
        </>
    );
}
