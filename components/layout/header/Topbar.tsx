import Link from "next/link";

export default function Topbar() {
    return (
        <div className="topbar py-1 bg-card d-none d-md-block">
            <div className="overflow-hidden">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center justify-content-center gap-4">
                        <span className="fs-8 text-dark d-flex align-items-center justify-content-center gap-1">
                            Get weekly updates with our
                            <Link href="#newsletter" className="link-effect-1">
                                <span className="text-1 text-700"> Newsletter </span>
                                <span className="text-2 text-700"> Newsletter </span>
                                <svg className="ms-1 dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.40693 0.336148L5.07078 0L4.39848 0.672297L4.73463 1.00845L7.25077 3.52461H0.475386H0V4.47538H0.475386H7.25077L4.73463 6.99156L4.39848 7.32769L5.07078 8.00001L5.40693 7.66382L8.62261 4.44819C8.87013 4.20066 8.87013 3.79933 8.62261 3.5518L5.40693 0.336148Z" fill="#171717" />
                                </svg>
                            </Link>
                        </span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <div className="information justify-content-start">
                            <div className="date">
                                <span className="dot"></span>
                                <span className="text fs-8 fw-medium text-dark">Friday, 28 Nov 2025</span>
                            </div>
                        </div>
                        <a href="#" className="navbar-toggler size-16 d-none d-md-block">
                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="#171717" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
