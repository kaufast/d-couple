"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePortfolioFilter } from "@/util/usePortfolioFilter";

interface PortfolioCard {
    category: string;
    tag: string;
    date: string;
    title: string;
    description: string;
    client: string;
    timeline: string;
    budget: string;
    img: string;
}

interface Section1InteractiveProps {
    portfolioData: PortfolioCard[];
}

function PortfolioCardItem({ card }: { card: PortfolioCard }) {
    return (
        <div className="card-portfolio hover-up hover-zoom-image" data-category={card.category}>
            <div className="card-body">
                <div className="information justify-content-start">
                    <Link href="/archive-1" className="tag has-dot text-nowrap">
                        <span className="text-nowrap link-effect-1">
                            <span className="text-1">{card.tag}</span>
                            <span className="text-2">{card.tag}</span>
                        </span>
                    </Link>
                    <div className="date">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.date}</span>
                    </div>
                </div>
                <h4 className="my-3 hover-underline">
                    <Link href="/portfolio-details" className="card-title">
                        {card.title}
                    </Link>
                </h4>
                <p className="fs-6">{card.description}</p>
                <ul className="list-unstyled m-0 ps-0 hover-underline d-flex flex-column pt-3 border-top-400">
                    <li>
                        <p className="text-dark mb-0 fs-6">
                            <span className="fw-semi-bold">Client: </span>
                            {card.client}
                        </p>
                    </li>
                    <li>
                        <p className="text-dark mb-0 fs-6">
                            <span className="fw-semi-bold">Timeline: </span>
                            {card.timeline}
                        </p>
                    </li>
                    <li>
                        <p className="text-dark mb-0 fs-6">
                            <span className="fw-semi-bold">Budget: </span>
                            {card.budget}
                        </p>
                    </li>
                </ul>
                <Link href="/portfolio-details" className="btn btn-outline shadow-1 mt-5">
                    <span className="text-nowrap">View details</span>
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
            <Link href="/portfolio-details" className="card-img d-inline-block">
                <Image className="image cover-image" src={card.img} alt="foks" width={600} height={400} />
            </Link>
        </div>
    );
}

export default function Section1Interactive({ portfolioData }: Section1InteractiveProps) {
    const { activeFilter } = usePortfolioFilter("all");
    const [displayCount, setDisplayCount] = useState(5);

    // Filter cards based on activeFilter
    const filteredData = portfolioData.filter((card) => {
        if (activeFilter === "all") {
            return true;
        }
        return card.category === activeFilter;
    });

    const totalItems = filteredData.length;
    const displayedItems = filteredData.slice(0, displayCount);
    const hasMore = displayCount < totalItems;

    // Reset displayCount when filter changes
    useEffect(() => {
        setDisplayCount(5);
    }, [activeFilter]);

    const handleShowMore = () => {
        setDisplayCount((prev) => Math.min(prev + 3, totalItems));
    };

    return (
        <>
            <div className="col-12">
                <h1 className="mb-3 ds-5">Recent Projects</h1>
                <div className="filter-portfolio d-flex flex-wrap align-items-center gap-2">
                    <Link href="#" className="btn filter-btn active" data-filter="all">
                        All Projects
                    </Link>
                    <Link href="#" className="btn filter-btn" data-filter="Branding">
                        Branding
                    </Link>
                    <Link href="#" className="btn filter-btn" data-filter="Marketing">
                        Marketing
                    </Link>
                    <Link href="#" className="btn filter-btn" data-filter="Content">
                        Content
                    </Link>
                    <Link href="#" className="btn filter-btn" data-filter="Design">
                        Design
                    </Link>
                </div>
            </div>
            <div className="col-12 pt-80">
                {displayedItems.map((card, idx) => (
                    <PortfolioCardItem key={idx} card={card} />
                ))}
            </div>
            {hasMore && (
                <div className="col-12">
                    <button onClick={handleShowMore} className="btn btn-rounded-pill">
                        <span className="text-nowrap">Show more projects</span>
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
                    </button>
                </div>
            )}
        </>
    );
}
