import Image from "next/image";

export default function Section1() {
    return (
        <section className="sec-1-portfolio-details">
            <div className="container">
                <div className="row main-content align-items-end">
                    <div className="col-lg-12">
                        <div className="mt-4"></div>
                    </div>

                    <div className="col-lg-5 pb-3 pb-lg-0">
                        <span className="tag has-dot text-nowrap border-0">
                            <span className="text-nowrap link-effect-1">
                                <span className="text-1">Commercial</span>
                                <span className="text-2">Commercial</span>
                            </span>
                        </span>
                        <h1 className="mt-2 h2">Terraview Modern Residence Concept</h1>
                    </div>

                    <div className="col-lg-7">
                        <div className="d-flex align-items-lg-end align-items-start justify-content-end gap-3 flex-column flex-md-row">
                            <p className="fs-6 mb-0">
                                A contemporary residential concept blending open-space living with natural light optimization and sustainable <br className="d-none d-lg-block" />
                                material selections.
                            </p>
                            <a href="#" className="btn btn-outline">
                                <span className="text-nowrap">Live Demo</span>
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
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-12 pt-4">
                        <div className="image rounded-6 overflow-hidden mb-4">
                            <Image src="/assets/imgs/page/img-166.webp" alt="Terraview Modern Residence Concept" className="w-100" width={1200} height={500} style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 1200px" priority />
                        </div>
                    </div>
                </div>

                <div className="row g-md-5 g-3">
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="pb-2 border-bottom-900">
                            <p className="fs-8 fw-bold text-uppercase mb-2">Client</p>
                            <h6>Solace Boutique & Co.</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="pb-2 border-bottom-900">
                            <p className="fs-8 fw-bold text-uppercase mb-2">Timeline</p>
                            <h6>Feb 2024 – Mar 2024</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="pb-2 border-bottom-900">
                            <p className="fs-8 fw-bold text-uppercase mb-2">Budget</p>
                            <h6>$9,500 - $11,800</h6>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="pb-2 border-bottom-900">
                            <p className="fs-8 fw-bold text-uppercase mb-2">Tools</p>
                            <h6>SketchUp, AutoCAD</h6>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-10 col-12 mx-auto">
                        <div className="pt-5"></div>
                        <h3 className="mb-2">Overview</h3>
                        <p className="fs-18 text-850">Terraview Modern Residence Concept is a contemporary housing design focused on minimalism, natural light, and a seamless connection with the surrounding environment. The project emphasizes open-plan living, sustainable materials, and a warm yet refined aesthetic.</p>
                        <p className="fs-18 text-850">Beyond visual appeal, the concept prioritizes spatial flexibility, allowing homeowners to adapt the layout to fit their lifestyle and evolving family needs.</p>
                    </div>

                    <div className="col-lg-9 ms-auto col-12">
                        <Image src="/assets/imgs/page/img-175.webp" alt="Terraview Modern Residence Interior" className="w-100" width={800} height={400} style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 800px" />
                    </div>

                    <div className="col-lg-6 col-md-10 col-12 mx-auto">
                        <div className="pt-5">
                            <h3 className="mb-2">Challenge</h3>
                            <ul className="m-0 ps-3 d-flex flex-column">
                                <li>
                                    <p className="fs-18 mb-0 text-850">Create a modern architectural style that still feels warm and suitable for family living.</p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">Maximize natural light on a narrow site that faces intense afternoon sunlight.</p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">Integrate sustainable materials without significantly increasing construction costs.</p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">Enhance natural ventilation to minimize the dependence on air conditioning.</p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">Establish a continuous indoor–outdoor flow while maintaining privacy for the residents.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-5">
                            <h3 className="mb-2">Key Features</h3>
                            <ul className="list-unstyled m-0 ps-0 d-flex flex-column">
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Open-plan layout</span> seamlessly connecting the living room, kitchen, and garden to enhance spaciousness.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold"> </span> to bring in natural light and improve airflow throughout the home.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Minimalist facade</span> featuring raw concrete, tempered glass, and heat-treated timber for a balanced modern–organic aesthetic.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Smart sun-shading system</span> designed to reduce heat gain and improve energy efficiency.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Flexible functional spaces</span>, including a work-from-home area, multipurpose room, and children's play zone.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Eco-friendly material palette</span>, such as recycled timber, low-e glass, and natural insulation.
                                    </p>
                                </li>
                                <li>
                                    <p className="fs-18 mb-0 text-850">
                                        <span className="text-dark fw-bold">Rear pocket garden</span> that functions as a climate buffer and a private relaxation area.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex group-social-icons mt-4 pt-4 border-top-400">
                            <p className="text-800 fw-bold fs-8 text-uppercase mb-0">Share</p>
                            <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6403 18.1173C15.7561 17.7275 18.1667 15.0691 18.1667 11.8476C18.1667 8.35785 15.3377 5.52881 11.8479 5.52881C8.35809 5.52881 5.52905 8.35785 5.52905 11.8476C5.52905 14.8627 7.64066 17.3845 10.4656 18.0148V13.7672H9.0834V11.8476H10.4656V11.0102C10.4656 8.86352 11.2828 7.86965 13.3891 7.86965C13.7877 7.86965 14.4763 7.94785 14.7588 8.02605V9.77162C14.61 9.75648 14.3502 9.74892 14.0299 9.74892C12.9956 9.74892 12.6377 10.1399 12.6377 11.159V11.8476H14.658L14.3048 13.7672H12.6403V18.1173Z" fill="#171717" />
                                </svg>
                            </a>
                            <a href="#" className="icon-shape icon-30 bg-card border-300 rounded-4 hover-up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
