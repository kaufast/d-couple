import Link from "next/link";
import Image from "next/image";

const statsData = [
    { number: "12+", label: "Years experience", type: "stat" },
    { icon: "icon-1.svg", type: "icon" },
    { number: "250+", label: "Projects finished", type: "stat" },
    { icon: "icon-2.svg", type: "icon" },
    { icon: "icon-3.svg", type: "icon" },
    { number: "2k", label: "Happy Clients", type: "stat" },
    { icon: "icon-4.svg", type: "icon" },
    { number: "15k+", label: "Positive Reviews", type: "stat" },
    { number: "2M+", label: "Social Followers", type: "stat" },
    { icon: "icon-5.svg", type: "icon" },
    { number: "17", label: "Global Branch", type: "stat" },
    { icon: "icon-6.svg", type: "icon" },
];

export default function Section4() {
    return (
        <section className="sec-4-home-3 pt-70 pb-70 overflow-hidden">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-7">
                        <div className="block-experience p-md-4 pe-md-5 p-3 border-300 rounded-6 bg-white position-relative">
                            <div className="position-absolute bottom-0 end-0 mb-3 me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M0 10.5H21M10.5 0V21" stroke="#A8A8A8"></path>
                                </svg>
                            </div>
                            <Link href="/archive-4" className="tag has-dot green text-nowrap rounded-pill">
                                <span className="text-nowrap link-effect-1">
                                    <span className="text-1">Available for Work</span>
                                    <span className="text-2">Available for Work</span>
                                </span>
                            </Link>
                            <h4 className="mb-3 mt-3 hover-underline">
                                <Link href="/single-6" className="card-title">
                                    Proven experience across diverse projects and industries
                                </Link>
                            </h4>
                            <p className="mb-5">Broad experience across varied projects and sectors, bringing flexibility and practical skills to every endeavor.</p>
                            <div className="d-flex gap-3">
                                <Link href="/contact" className="btn btn-dark d-none d-md-flex">
                                    <span className="text-nowrap">Get in touch</span>
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
                    <div className="col-lg-5 col-md-8 col-12 mx-auto">
                        <div className="d-flex flex-wrap justify-content-center">
                            {statsData.map((item, idx) => {
                                if (item.type === "stat") {
                                    return (
                                        <div key={idx} className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center">
                                            <h5 className="mb-1">{item.number}</h5>
                                            <h6 className="fs-7 text-700 mb-0 fw-medium">{item.label}</h6>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={idx} className="size-100 d-flex flex-column align-items-center justify-content-center text-center dark-mode-invert">
                                            <Image src={`/assets/imgs/template/icons/${item.icon}`} alt="foks" width={32} height={32} />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
