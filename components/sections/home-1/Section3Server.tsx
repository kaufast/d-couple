import Section3Interactive from "./Section3Interactive";

export default function Section3Server() {
    return (
        <section className="sec-3-home-1 pb-60 position-relative">
                <div className="container">
                    <div className="block-newsletter position-relative" id="newsletter">
                        <div className="position-absolute top-0 start-100 translate-middle mt-2px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M0 10.5H21M10.5 0V21" stroke="#A8A8A8" />
                            </svg>
                        </div>
                        <div className="position-absolute top-100 start-0 mt-1 translate-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M0 10.5H21M10.5 0V21" stroke="#A8A8A8" />
                            </svg>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 col-12 mx-auto text-center position-relative">
                                <div className="position-absolute top-0 end-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1 2.5C7.90356 2.5 13.5 8.09644 13.5 15H15C15 7.26801 8.73199 1 1 1V2.5ZM8 15C8 11.134 4.86599 8 1 8V6.5C5.69442 6.5 9.5 10.3056 9.5 15H8ZM2.5 15C2.5 14.1716 1.82843 13.5 1 13.5V12C2.65685 12 4 13.3431 4 15H2.5Z" fill="#A8A8A8" />
                                    </svg>
                                </div>
                                <h2 className="h4 mb-2">Subscribe to our newsletter</h2>
                                <p className="fs-7 text-700">Get the best blog stories into your inbox!</p>
                            </div>
                            <div className="col-lg-7 col-md-10 col-12 mx-auto position-relative">
                                <div className="position-absolute bottom-0 end-100 me-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M20.7852 18.25H0.865234L10.8252 0.999023L20.7852 18.25Z" stroke="#A8A8A8" />
                                    </svg>
                                </div>
                                <Section3Interactive />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

