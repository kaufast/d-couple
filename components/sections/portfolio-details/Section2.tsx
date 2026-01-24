import Link from "next/link";
import Image from "next/image";

export default function Section2() {
    return (
        <section className="sec-2-portfolio-details pt-60 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-800 fw-bold fs-8 text-uppercase mb-3">Similar Projects</p>
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div className="card-portfolio2 d-flex gap-3 mb-4 mb-lg-0">
                            <div className="card-img-top">
                                <Link href="/portfolio-details">
                                    <Image src="/assets/imgs/page/img-176.webp" alt="d-couple" className="w-100" width={200} height={200} />
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="information justify-content-start">
                                    <Link href="/portfolio" className="tag has-dot text-nowrap">
                                        <span className="text-nowrap link-effect-1">
                                            <span className="text-1">Residential</span>
                                            <span className="text-2">Residential</span>
                                        </span>
                                    </Link>
                                    <div className="date">
                                        <span className="dot"></span>
                                        <span className="text fs-8 fw-medium">Jun 13, 2025</span>
                                    </div>
                                </div>
                                <h6 className="my-2 hover-underline">
                                    <Link href="/portfolio-details" className="card-title">
                                        Solace Boutique Interior Makeover
                                    </Link>
                                </h6>
                                <p className="fs-7">A contemporary residential concept blending open-space living</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div className="card-portfolio2 d-flex gap-3">
                            <div className="card-img-top">
                                <Link href="/portfolio-details">
                                    <Image src="/assets/imgs/page/img-177.webp" alt="d-couple" className="w-100" width={200} height={200} />
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="information justify-content-start">
                                    <Link href="/portfolio" className="tag has-dot text-nowrap">
                                        <span className="text-nowrap link-effect-1">
                                            <span className="text-1">Residential</span>
                                            <span className="text-2">Residential</span>
                                        </span>
                                    </Link>
                                    <div className="date">
                                        <span className="dot"></span>
                                        <span className="text fs-8 fw-medium">Jun 13, 2025</span>
                                    </div>
                                </div>
                                <h6 className="my-2 hover-underline">
                                    <Link href="/portfolio-details" className="card-title">
                                        Solace Boutique Interior Makeover
                                    </Link>
                                </h6>
                                <p className="fs-7">A contemporary residential concept blending open-space living</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
