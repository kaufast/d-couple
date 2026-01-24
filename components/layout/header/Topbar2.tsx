import Link from "next/link";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";

export default function Topbar2() {
    return (
        <div className="topbar py-1 bg-card w-100">
            <div className="overflow-hidden">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="information justify-content-start d-none d-md-block">
                        <div className="date">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium text-dark">Friday, 28 Nov 2025</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-4 d-none d-md-block">
                        <Link href="/reports/submit" className="btn btn-sm btn-dark rounded-pill px-3 py-2 fs-8 fw-medium">
                            📊 Submit Field Intel
                        </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3 ms-auto">
                        <div data-bs-toggle="modal" data-bs-target="#popupSearch" className="search-btn d-none d-md-flex align-items-center justify-content-center">
                            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.875C1.125 2.80394 2.80394 1.125 4.875 1.125C6.94606 1.125 8.625 2.80394 8.625 4.875C8.625 6.94606 6.94606 8.625 4.875 8.625C2.80394 8.625 1.125 6.94606 1.125 4.875ZM4.875 0C2.18261 0 0 2.18261 0 4.875C0 7.56742 2.18261 9.75 4.875 9.75C6.01852 9.75 7.07008 9.35625 7.90147 8.697L10.4773 11.2727L10.875 11.6705L11.6705 10.875L11.2727 10.4773L8.697 7.90147C9.35625 7.07008 9.75 6.01852 9.75 4.875C9.75 2.18261 7.56742 0 4.875 0Z" fill="#171717" />
                            </svg>
                            <span className="text-700 fs-8 fw-medium ms-1">Search</span>
                        </div>
                        <div className="size-28 rounded-circle position-relative">
                            <div className="dark-light-mode position-absolute top-50 start-50 translate-middle">
                                <ThemeSwitcher />
                            </div>
                        </div>
                        <a href="#" className="navbar-toggler size-16">
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
