import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="section-footer overflow-hidden pb-4">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-12">
                            <div className="line-dot"></div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-7 pe-lg-5">
                            <Link className="navbar-brand d-flex align-items-center gap-1" href="/">
                                <Image className="dark-mode-invert" src="/assets/imgs/template/logo/favicon.svg" alt="Logo" width={16} height={16} />
                                <strong className="fs-5 text-nowrap">dcouple.</strong>
                            </Link>
                            <p className="fs-7 text-dark mt-2 mb-3">Crafted for writers and storytellers, Oris offers a modern, timeless space where your words truly belong.</p>
                            <p className="fs-8 fw-bold text-uppercase mb-2">Follow Us</p>
                            <div className="d-inline-flex group-social-icons">
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z" fill="#171717" />
                                    </svg>
                                </a>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </a>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.94543 0.0265915C3.55568 0.0738296 2.91668 0.206401 2.15918 0.604115C1.81118 0.786211 1.58768 0.95383 1.27343 1.26621C0.557932 1.98012 0.186682 2.85021 0.0539318 4.12335C0.0314318 4.33593 0.0134318 5.36907 0.00443185 6.93935C-0.0188182 10.8792 0.0396818 11.6967 0.415432 12.6491C0.619432 13.1656 0.848932 13.5199 1.24868 13.9336C1.96343 14.6742 2.81543 15.043 4.12043 15.1763C4.66418 15.2327 10.0694 15.2334 10.7204 15.1778C11.4734 15.1138 11.9392 15.0133 12.4529 14.8045C12.9599 14.5988 13.3094 14.3649 13.7174 13.9588C14.4464 13.2327 14.8094 12.3672 14.9407 11.0414C14.9962 10.4891 14.9969 4.99802 14.9422 4.33669C14.8792 3.57173 14.7802 3.09859 14.5747 2.57669C14.3799 2.08073 14.0868 1.6308 13.7135 1.25488C13.3402 0.878951 12.8948 0.58508 12.4049 0.391544C11.8364 0.162972 11.2769 0.0692581 10.2127 0.0243058C9.41993 -0.00921805 5.95118 -0.00769422 4.94543 0.0265915ZM10.1137 1.39573C10.5052 1.41173 10.9709 1.44678 11.1487 1.47345C12.2722 1.64107 13.0334 2.24145 13.3687 3.22431C13.5832 3.85059 13.6132 4.30012 13.6357 7.12526C13.6604 10.3451 13.6117 11.3165 13.3934 11.9626C13.0694 12.9256 12.3569 13.523 11.2964 13.7226C10.7819 13.8194 10.3552 13.8354 7.91018 13.8514C4.63943 13.8727 3.95018 13.8392 3.29018 13.6289C2.28968 13.3104 1.67393 12.5698 1.48043 11.4529C1.38218 10.8883 1.36268 10.2254 1.36193 7.4605C1.36043 4.67269 1.37543 4.22392 1.48268 3.69973C1.65593 2.85173 2.07593 2.22545 2.72918 1.84145C3.05393 1.65021 3.63443 1.48945 4.17968 1.43992C4.89968 1.37364 8.85593 1.34469 10.1137 1.39573ZM11.3332 2.64754C10.7632 2.73745 10.4279 3.40107 10.6844 3.93212C10.8899 4.35573 11.3542 4.54697 11.8027 4.39231C12.0037 4.32297 12.2669 4.05554 12.3352 3.85135C12.384 3.69836 12.3949 3.5355 12.3669 3.37721C12.3389 3.21892 12.2729 3.0701 12.1747 2.94393C12.0697 2.81364 11.7682 2.65593 11.5904 2.6384C11.5046 2.63209 11.4184 2.63516 11.3332 2.64754ZM6.83843 3.76069C6.05674 3.89859 5.33697 4.2811 4.77968 4.85478C4.03793 5.60602 3.65543 6.54392 3.65543 7.6144C3.65543 8.67878 4.03868 9.61973 4.77968 10.3717C5.22893 10.8289 5.68118 11.1138 6.27518 11.3157C6.68993 11.4567 7.04093 11.5138 7.49543 11.5138C8.00059 11.5198 8.50169 11.4217 8.96847 11.2254C9.43525 11.0291 9.858 10.7387 10.2112 10.3717C10.9544 9.61745 11.3354 8.68107 11.3354 7.61135C11.3354 6.55535 10.9522 5.60754 10.2262 4.8685C10.0757 4.71433 9.9151 4.57076 9.74543 4.43878C9.26068 4.09494 8.70776 3.86298 8.12543 3.75916C7.69823 3.70214 7.2655 3.70265 6.83843 3.76069ZM7.99943 5.13135C8.56085 5.24996 9.06488 5.56151 9.42663 6.0135C9.78837 6.4655 9.98572 7.03034 9.98543 7.61288C9.98692 7.94548 9.92353 8.27509 9.79893 8.58267C9.67432 8.89025 9.49096 9.1697 9.25945 9.40489C9.02793 9.64008 8.75285 9.82635 8.45007 9.95294C8.1473 10.0795 7.82284 10.1439 7.49543 10.1424C6.9177 10.1444 6.35736 9.94175 5.91083 9.56935C5.4643 9.19694 5.15952 8.67807 5.04893 8.10202C4.98293 7.76907 5.00243 7.23878 5.09393 6.91726C5.22187 6.47705 5.46329 6.07958 5.79321 5.76599C6.12314 5.4524 6.52957 5.23408 6.97043 5.13364C7.31078 5.07307 7.65883 5.0723 7.99943 5.13135Z"
                                            fill="#171717"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                    <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4695 0.29272C13.0722 0.45406 13.5459 0.92772 13.7073 1.53045C13.9988 2.62182 14 4.90022 14 4.90022C14 4.90022 14 7.17859 13.7073 8.26999C13.5459 8.87279 13.0722 9.34639 12.4695 9.50769C11.3782 9.80049 6.99998 9.80049 6.99998 9.80049C6.99998 9.80049 2.62183 9.80049 1.53045 9.50769C0.92773 9.34639 0.45407 8.87279 0.29272 8.26999C-2.98023e-08 7.17859 0 4.90022 0 4.90022C0 4.90022 -2.98023e-08 2.62182 0.29272 1.53045C0.45407 0.92772 0.92773 0.45406 1.53045 0.29272C2.62183 8.9407e-08 6.99998 0 6.99998 0C6.99998 0 11.3782 8.9407e-08 12.4695 0.29272ZM9.2362 4.90045L5.59906 7.00019V2.80067L9.2362 4.90045Z" fill="#171717" />
                                    </svg>
                                </a>
                            </div>
                            <p className="text-500 m-0 mt-5">
                                © 2025 <span className="text-dark">dcouple</span>. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="row g-4 justify-content-between">
                                <div className="col-lg-1 mt-0"></div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <p className="fs-8 fw-bold text-uppercase mb-2">Categories</p>
                                    <ul className="list-unstyled ps-0">
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-1">
                                                <span className="text-1">Lifestyle</span>
                                                <span className="text-2">Lifestyle</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-2">
                                                <span className="text-1">Business</span>
                                                <span className="text-2">Business</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-3">
                                                <span className="text-1">Science</span>
                                                <span className="text-2">Science</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-4">
                                                <span className="text-1">Technology</span>
                                                <span className="text-2">Technology</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-5">
                                                <span className="text-1">Gaming</span>
                                                <span className="text-2">Gaming</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-6">
                                                <span className="text-1">Other</span>
                                                <span className="text-2">Other</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <p className="fs-8 fw-bold text-uppercase mb-2">Navigation</p>
                                    <ul className="list-unstyled ps-0">
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/">
                                                <span className="text-1">Home</span>
                                                <span className="text-2">Home</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/about-us">
                                                <span className="text-1">About us</span>
                                                <span className="text-2">About us</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/page-author">
                                                <span className="text-1">Author posts</span>
                                                <span className="text-2">Author posts</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/page-search-results">
                                                <span className="text-1">Search results</span>
                                                <span className="text-2">Search results</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/page-contact">
                                                <span className="text-1">Contact us</span>
                                                <span className="text-2">Contact us</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/not-found">
                                                <span className="text-1">Error 404</span>
                                                <span className="text-2">Error 404</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 d-none d-md-block">
                                    <p className="fs-8 fw-bold text-uppercase mb-2">Utility Pages</p>
                                    <ul className="list-unstyled ps-0">
                                        <li className="mb-2">
                                            <Link className="text-dark link-effect-1" href="/archive-7">
                                                <span className="text-1">Style Guide</span>
                                                <span className="text-2">Style Guide</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2">
                                            <a className="text-dark link-effect-1" href="#">
                                                <span className="text-1">Private policy</span>
                                                <span className="text-2">Private policy</span>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="text-dark link-effect-1" href="#">
                                                <span className="text-1">Term &amp; Condition</span>
                                                <span className="text-2">Term &amp; Condition</span>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="text-dark link-effect-1" href="#">
                                                <span className="text-1">Subscribe</span>
                                                <span className="text-2">Subscribe</span>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="text-dark link-effect-1" href="#">
                                                <span className="text-1">Advertise</span>
                                                <span className="text-2">Advertise</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
