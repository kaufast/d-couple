import Link from "next/link";
import Image from "next/image";
import ContentSingle1 from "@/components/elements/ContentSingle1";

export default function Section1() {
    return (
        <section className="sec-1-single-2 pb-70 overflow-hidden">
            <div className="container">
                <div className="row main-content align-items-end">
                    <div className="col-lg-12">
                        <div className="mt-4"></div>
                    </div>
                    <div className="col-lg-6 pb-4 pb-lg-0">
                        <div className="information justify-content-start">
                            <span className="tag has-dot text-nowrap">
                                <span className="text-nowrap link-effect-1">
                                    <span className="text-1">Lifestyle</span>
                                    <span className="text-2">Lifestyle</span>
                                </span>
                            </span>
                            <span className="readers d-flex align-items-center gap-1 fs-8 text-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.71154 0L0.490105 8.23179L0 9.1875H1.07405H4.57405C4.69486 9.1875 4.7928 9.28541 4.7928 9.40625V14H6.18657L10.408 5.76821L10.8981 4.8125H9.82405H6.32405C6.20324 4.8125 6.1053 4.71456 6.1053 4.59375V0H4.71154ZM4.57405 7.875H2.1481L4.7928 2.71784V4.59375C4.7928 5.43944 5.47837 6.125 6.32405 6.125H8.74998L6.1053 11.2822V9.40625C6.1053 8.56056 5.41974 7.875 4.57405 7.875Z" fill="#7D7D7D" />
                                </svg>
                                <span>
                                    <span className="text-nowrap"></span>168 views
                                </span>
                            </span>
                            <Link href="#comments" className="comment d-flex align-items-center fs-8 gap-1 text-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.52998 9.10245L2.61036 9.30282C2.82545 9.83894 3.0625 10.5914 3.0625 11.375C3.0625 11.6889 3.02435 11.999 2.96426 12.2933C3.23432 12.2015 3.51233 12.0889 3.78803 11.9511C4.26902 11.7106 4.67216 11.4285 4.9962 11.1581L5.44662 10.7823L6.02708 10.8671C6.34245 10.9133 6.66745 10.9375 7 10.9375C10.3113 10.9375 12.6875 8.62373 12.6875 6.125C12.6875 3.62627 10.3113 1.3125 7 1.3125C3.68877 1.3125 1.3125 3.62627 1.3125 6.125C1.3125 7.15903 1.6995 8.13157 2.38965 8.93839L2.52998 9.10245ZM2.46181 13.7946C1.54084 14 0.875 14 0.875 14C0.875 14 1.25407 13.396 1.5132 12.6321C1.64777 12.2355 1.75 11.7957 1.75 11.375C1.75 10.8348 1.58141 10.2631 1.39225 9.79151C0.517864 8.76934 0 7.50008 0 6.125C0 2.74226 3.134 0 7 0C10.866 0 14 2.74226 14 6.125C14 9.50775 10.866 12.25 7 12.25C6.60381 12.25 6.21531 12.2212 5.83707 12.1658C5.44757 12.4909 4.96021 12.8324 4.375 13.125C3.70445 13.4603 3.03391 13.6671 2.46181 13.7946Z"
                                        fill="#7D7D7D"
                                    />
                                </svg>
                                <span>
                                    <span className="text-nowrap"></span>3 comments
                                </span>
                            </Link>
                        </div>
                        <h1 className="mt-2 h2">When nature stops waiting for us to return</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="information justify-content-lg-end justify-content-start">
                            <Link href="/page-author" className="author">
                                <span className="author-img">
                                    <Image className="size-24" src="/assets/imgs/template/author/author-12.webp" alt="foks" width={24} height={24} />
                                </span>
                                <span className="author-info">Lora</span>
                            </Link>
                            <div className="date">
                                <span className="dot"></span>
                                <span className="text fs-8 fw-medium">January 25, 2025</span>
                            </div>
                            <div className="read-time">
                                <span className="dot"></span>
                                <span className="text fs-8 fw-medium">6 mins read</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-4">
                        <div className="image rounded-6 overflow-hidden">
                            <Image className="w-100 cover-image" src="/assets/imgs/page/img-162.webp" alt="foks" width={700} height={400} />
                        </div>
                    </div>
                </div>
                <ContentSingle1 classList="" separationLine="" separation="***" image="/assets/imgs/page/img-159.webp" />
            </div>
        </section>
    );
}
