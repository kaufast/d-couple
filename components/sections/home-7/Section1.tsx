import Link from "next/link";
import Image from "next/image";

export default function Section1() {
    return (
        <section className="sec-1-home-7 overflow-hidden">
            <div className="container">
                <div className="block-newsletter bg-transparent border-0 position-relative pb-4 pt-5">
                    <div className="row">
                        <div className="col-lg-9 col-12 mx-auto text-center position-relative">
                            <Link href="#" className="tag has-dot green text-nowrap rounded-pill">
                                <span className="text-nowrap link-effect-1">
                                    <span className="text-1">10k+ Satisfied Customers</span>
                                    <span className="text-2">10k+ Satisfied Customers</span>
                                </span>
                            </Link>
                            <div className="position-relative">
                                <div className="position-absolute top-0 end-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1 2.5C7.90356 2.5 13.5 8.09644 13.5 15H15C15 7.26801 8.73199 1 1 1V2.5ZM8 15C8 11.134 4.86599 8 1 8V6.5C5.69442 6.5 9.5 10.3056 9.5 15H8ZM2.5 15C2.5 14.1716 1.82843 13.5 1 13.5V12C2.65685 12 4 13.3431 4 15H2.5Z" fill="#A8A8A8" />
                                    </svg>
                                </div>
                                <h1 className="mb-2 mt-2 h3">
                                    Get the latest updates <br className="d-none d-md-block" />
                                    from around the world
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-10 col-12 mx-auto position-relative mt-3">
                            <div className="position-absolute top-0 end-100 me-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                    <path d="M20.7852 18.25H0.865234L10.8252 0.999023L20.7852 18.25Z" stroke="#A8A8A8" />
                                </svg>
                            </div>
                            <div className="d-flex align-items-center gap-4 justify-content-center">
                                <div className="author-card style-1">
                                    <div className="card-img-container">
                                        <Link href="/page-author" className="card-img">
                                            <Image className="cover-image" src="/assets/imgs/template/author/author-12.webp" alt="d-couple" width={60} height={60} />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="hover-underline">
                                            <Link href="/page-author" className="card-title">
                                                Thomas Foks
                                            </Link>
                                        </h6>
                                        <p className="fs-8 m-0 text-start">
                                            <span>Content Creator</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="vertical-line"></div>
                                <Link href="/portfolio" className="btn btn-outline">
                                    <span className="text-nowrap">See my work</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
