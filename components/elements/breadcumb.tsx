import Link from "next/link";

interface BreadcumbProps {
    pageCurrent: string;
    pageLink?: string;
    subPageCurrent?: string;
    subPageLink?: string;
    position?: "start" | "center" | "end" | "between" | "around" | "evenly";
}

export default function Breadcumb({ pageCurrent, subPageCurrent, subPageLink = "/", position = "start" }: BreadcumbProps) {
    const justifyClass = `justify-content-${position}`;
    const textPositionClass = `text-${position}`;
    const hasSubPage = Boolean(subPageCurrent);
    const subClass = hasSubPage ? "" : "d-none";

    return (
        <div className="sec-breadcumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ul className={`breadcrumb list-unstyled d-flex flex-wrap gap-2 align-items-center ${justifyClass} m-0 ps-0 py-4`}>
                                <li className="breadcrumb-item">
                                    <Link href="/" className="text-600 fs-8 fw-medium hover-dark">
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <span className="icon-shape icon-xxs">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={5} height={9} viewBox="0 0 5 9" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.06066 0L1.59099 0.53033L4.41417 3.35355C4.80477 3.74408 4.80477 4.37724 4.41417 4.76777L1.59099 7.59097L1.06066 8.12137L0 7.06067L0.53033 6.53037L3 4.06066L0.53033 1.59099L0 1.06066L1.06066 0Z" fill="#7D7D7D" />
                                        </svg>
                                    </span>
                                </li>
                                <li className={`breadcrumb-item active text-dark fs-8 ${hasSubPage ? textPositionClass : ""}`} aria-current="page">
                                    {hasSubPage ? (
                                        <Link href={subPageLink} className="text-600 fs-8 hover-dark">
                                            {subPageCurrent}
                                        </Link>
                                    ) : (
                                        pageCurrent
                                    )}
                                </li>
                                <li className={`breadcrumb-item ${subClass}`}>
                                    <span className="icon-shape icon-xxs">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={5} height={9} viewBox="0 0 5 9" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.06066 0L1.59099 0.53033L4.41417 3.35355C4.80477 3.74408 4.80477 4.37724 4.41417 4.76777L1.59099 7.59097L1.06066 8.12137L0 7.06067L0.53033 6.53037L3 4.06066L0.53033 1.59099L0 1.06066L1.06066 0Z" fill="#7D7D7D" />
                                        </svg>
                                    </span>
                                </li>
                                <li className={`breadcrumb-item active text-dark fs-8 ${subClass}`} aria-current="page">
                                    <span>{pageCurrent}</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
