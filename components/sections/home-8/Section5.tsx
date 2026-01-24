import Link from "next/link";
import Image from "next/image";

const authorAvatars = [
    { img: "/assets/imgs/template/author/author-1.webp", link: "/page-author", zIndex: "z-1" },
    { img: "/assets/imgs/template/author/author-2.webp", link: "/page-author", zIndex: "z-2" },
    { img: "/assets/imgs/template/author/author-3.webp", link: "/page-author", zIndex: "z-3" },
    { img: "/assets/imgs/template/author/author-4.webp", link: "/page-author", zIndex: "z-4" },
    { img: "/assets/imgs/page/img-60.webp", link: "/page-author", zIndex: "z-5" },
];

export default function Section5() {
    return (
        <section className="sec-5-home-7 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-author d-flex align-items-center justify-content-center position-relative pt-2">
                            {authorAvatars.map((author, idx) => (
                                <div key={idx} className={`avatar avatar-sm rounded-circle overflow-hidden border-2 border-white ${author.zIndex} hover-up`}>
                                    <Link href={author.link}>
                                        <Image src={author.img} alt="d-couple" width={40} height={40} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <h4 className="text-center mb-3 mt-2">
                            Subscribe our newsletter <br className="d-none d-md-block" />
                            and Stay updated each week
                        </h4>
                    </div>
                    <div className="col-lg-4 col-md-6 mx-auto d-flex flex-column align-items-center">
                        <form action="#" className="mt-2">
                            <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-6 overflow-hidden">
                                <div className="icon size-16 ps-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z" fill="#7D7D7D" />
                                    </svg>
                                </div>
                                <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Your email address" />
                                <button className="btn btn-dark btn-sm" type="submit">
                                    Subscribe
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
                                </button>
                            </div>
                        </form>
                        <ul className="ps-3 m-0 mt-3">
                            <li>
                                <span className="fs-8 text-700">No spam emails, just valuable content.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
