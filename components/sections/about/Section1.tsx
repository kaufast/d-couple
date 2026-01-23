import Link from "next/link";
import Image from "next/image";

export default function Section1() {
    return (
        <section className="sec-1-about-me overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-12 mx-auto text-center position-relative">
                        <Link href="/archive-4" className="tag has-dot green text-nowrap rounded-pill">
                            <span className="text-nowrap link-effect-1">
                                <span className="text-1">Available for Work</span>
                                <span className="text-2">Available for Work</span>
                            </span>
                        </Link>
                        <div className="d-flex flex-column align-items-center justify-content-center mt-3">
                            <div className="size-100 rounded-circle overflow-hidden">
                                <Image src="/assets/imgs/template/author/author-13.webp" alt="foks" className="cover-image" width={100} height={100} />
                            </div>
                            <h1 className="my-1 h3">Thomas Foks</h1>
                            <p className="fs-6 mb-2">
                                Crafting engaging, authentic stories that inspire <br />
                                and connect with audiences.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-10 col-12 mx-auto position-relative mt-3">
                        <div className="d-flex align-items-center gap-2 justify-content-center">
                            <Link href="/portfolio" className="btn btn-dark d-none d-md-flex">
                                <span className="text-nowrap">See my work</span>
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
                            <Link href="#" className="btn btn-outline">
                                <span className="text-nowrap">Download CV</span>
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
        </section>
    );
}
