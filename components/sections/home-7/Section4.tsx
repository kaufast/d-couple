export default function Section4({ display = "d-block" }: { display?: string }) {
    const statsData = [
        { number: "12+", label: "Years experience" },
        { number: "2k", label: "Happy Clients" },
        { number: "250+", label: "Projects finished" },
        { number: "15k+", label: "Positive Reviews" },
        { number: "17", label: "Global Branch" },
        { number: "2M+", label: "Social Followers" },
    ];

    return (
        <section className="sec-4-home-7 pb-60 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className={`${display ? display : "d-none"} mb-4`}>Broad, proven expertise</h5>
                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                            {statsData.map((stat, idx) => (
                                <div key={idx} className="size-100 rounded-6 bg-card border-300 p-3 d-flex flex-column align-items-center justify-content-center text-center hover-shadow-4">
                                    <h5 className="mb-1">{stat.number}</h5>
                                    <h6 className="fs-7 text-700 mb-0 fw-medium">{stat.label}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 text-center pt-5">
                        <div className="d-flex gap-5 flex-wrap justify-content-center">
                            <span className="fs-8 text-dark fw-bold text-uppercase">Trusted by</span>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3364)">
                                        <path d="M9.1399 9.13989C6.71585 9.13989 4.39108 10.1028 2.67701 11.8169C0.962951 13.531 0 15.8557 0 18.2798H4.56995C4.56995 17.0678 5.05142 15.9054 5.90845 15.0483C6.76549 14.1913 7.92787 13.7098 9.1399 13.7098C10.3519 13.7098 11.5143 14.1913 12.3713 15.0483C13.2284 15.9054 13.7098 17.0678 13.7098 18.2798H18.2798C18.2798 15.8557 17.3168 13.531 15.6028 11.8169C13.8887 10.1028 11.5639 9.13989 9.1399 9.13989Z" fill="#7D7D7D" />
                                        <path d="M18.2798 0H13.7098C13.7098 1.21203 13.2284 2.37441 12.3713 3.23144C11.5143 4.08847 10.3519 4.56995 9.1399 4.56995C7.92787 4.56995 6.76549 4.08847 5.90845 3.23144C5.05142 2.37441 4.56995 1.21203 4.56995 0L0 0C0 2.42405 0.962951 4.74882 2.67701 6.46288C4.39108 8.17695 6.71585 9.1399 9.1399 9.1399C11.5639 9.1399 13.8887 8.17695 15.6028 6.46288C17.3168 4.74882 18.2798 2.42405 18.2798 0Z" fill="#7D7D7D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3364">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3372)">
                                        <path d="M18.2798 6.09326L12.1865 0H6.09326V6.09326H0V12.1865L6.09326 18.2798H12.1865V12.1865H18.2798V6.09326Z" fill="#7D7D7D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3372">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3369)">
                                        <path
                                            d="M9.1399 9.1399C6.71585 9.1399 4.39108 10.1028 2.67701 11.8169C0.962951 13.531 0 15.8557 0 18.2798C2.42405 18.2798 4.74882 17.3168 6.46288 15.6028C8.17695 13.8887 9.1399 11.5639 9.1399 9.1399ZM9.1399 9.1399C9.1399 6.71585 8.17695 4.39108 6.46288 2.67701C4.74882 0.962951 2.42405 0 0 0C0 2.42405 0.962951 4.74882 2.67701 6.46288C4.39108 8.17695 6.71585 9.1399 9.1399 9.1399ZM18.2798 0C15.8557 0 13.531 0.962951 11.8169 2.67701C10.1028 4.39108 9.1399 6.71585 9.1399 9.1399C11.5639 9.1399 13.8887 8.17695 15.6028 6.46288C17.3168 4.74882 18.2798 2.42405 18.2798 0ZM18.2798 18.2798C18.2798 15.8557 17.3168 13.531 15.6028 11.8169C13.8887 10.1028 11.5639 9.1399 9.1399 9.1399C9.1399 11.5639 10.1028 13.8887 11.8169 15.6028C13.531 17.3168 15.8557 18.2798 18.2798 18.2798Z"
                                            fill="#7D7D7D"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3369">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3375)">
                                        <path
                                            d="M18.2798 0H9.1399C6.71585 0 4.39108 0.962951 2.67701 2.67701C0.962951 4.39108 0 6.71585 0 9.1399L0 18.2798H9.1399C11.5639 18.2798 13.8887 17.3168 15.6028 15.6028C17.3168 13.8887 18.2798 11.5639 18.2798 9.1399V0ZM13.7098 9.1399C13.7098 10.3519 13.2284 11.5143 12.3713 12.3713C11.5143 13.2284 10.3519 13.7098 9.1399 13.7098H4.56995V9.1399C4.56995 7.92787 5.05142 6.76549 5.90845 5.90845C6.76549 5.05142 7.92787 4.56995 9.1399 4.56995H13.7098V9.1399ZM18.2798 0H9.1399C6.71585 0 4.39108 0.962951 2.67701 2.67701C0.962951 4.39108 0 6.71585 0 9.1399L0 18.2798H9.1399C11.5639 18.2798 13.8887 17.3168 15.6028 15.6028C17.3168 13.8887 18.2798 11.5639 18.2798 9.1399V0ZM13.7098 9.1399C13.7098 10.3519 13.2284 11.5143 12.3713 12.3713C11.5143 13.2284 10.3519 13.7098 9.1399 13.7098H4.56995V9.1399C4.56995 7.92787 5.05142 6.76549 5.90845 5.90845C6.76549 5.05142 7.92787 4.56995 9.1399 4.56995H13.7098V9.1399Z"
                                            fill="#7D7D7D"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3375">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3378)">
                                        <path d="M12.1865 0V9.1399C12.1865 7.52386 11.5446 5.97402 10.4019 4.83131C9.25914 3.6886 7.7093 3.04663 6.09326 3.04663C4.47723 3.04663 2.92738 3.6886 1.78468 4.83131C0.641967 5.97402 0 7.52386 0 9.1399L0 18.2798H6.09326V9.1399C6.09326 10.7559 6.73523 12.3058 7.87794 13.4485C9.02065 14.5912 10.5705 15.2332 12.1865 15.2332C13.8026 15.2332 15.3524 14.5912 16.4951 13.4485C17.6378 12.3058 18.2798 10.7559 18.2798 9.1399V0H12.1865Z" fill="#7D7D7D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3378">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <g clipPath="url(#clip0_5740_3381)">
                                        <path d="M9.1399 0H0C0 2.42405 0.962951 4.74882 2.67701 6.46288C4.39108 8.17695 6.71585 9.1399 9.1399 9.1399H18.2798C18.2798 6.71585 17.3168 4.39108 15.6028 2.67701C13.8887 0.962951 11.5639 0 9.1399 0ZM9.1399 9.1399H0C0 11.5639 0.962951 13.8887 2.67701 15.6028C4.39108 17.3168 6.71585 18.2798 9.1399 18.2798H18.2798C18.2798 15.8557 17.3168 13.531 15.6028 11.8169C13.8887 10.1028 11.5639 9.1399 9.1399 9.1399Z" fill="#7D7D7D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5740_3381">
                                            <rect width="18.2798" height="18.2798" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
