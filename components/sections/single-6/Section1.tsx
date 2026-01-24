import Link from "next/link";
import Image from "next/image";
import ContentSingle4 from "@/components/elements/ContentSingle4";

export default function Section1() {
    return (
        <section className="sec-1-single-6 pb-70 overflow-hidden">
            <div className="container">
                <div className="row main-content align-items-end">
                    <div className="col-lg-7 col-md-10 mx-auto">
                        <div className="information pt-3 mt-3 justify-content-center">
                            <Link href="/page-author" className="author">
                                <span className="author-img">
                                    <Image className="size-24" src="/assets/imgs/template/author/author-12.webp" alt="d-couple" width={24} height={24} />
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
                        <h1 className="mt-2 text-center h2">
                            When nature stops waiting <br className="d-none d-md-block" />
                            for us to return
                        </h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="image rounded-6 overflow-hidden mt-3">
                            <Image className="w-100 cover-image" src="/assets/imgs/page/img-166.webp" alt="d-couple" width={1200} height={500} />
                        </div>
                    </div>
                </div>
                <div className="row main-content position-relative mt-4">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ContentSingle4 classList="" separationLine="" separation="***" image="/assets/imgs/page/img-168.webp" />
                    </div>
                </div>
            </div>
        </section>
    );
}
