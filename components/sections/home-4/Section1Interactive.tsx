"use client";

import { useState } from "react";
import CardBlog2 from "@/components/cards/CardBlog2";

interface NewsItem {
    classList: string;
    classImg: string;
    linkPost: string;
    linkCategory: string;
    linkAuthor: string;
    img: string;
    category: string;
    title: string;
    description: string;
    imgAuthor: string;
    author: string;
    date: string;
}

interface Section1InteractiveProps {
    newsData: NewsItem[];
}

export default function Section1Interactive({ newsData }: Section1InteractiveProps) {
    const [displayCount, setDisplayCount] = useState(6);
    const totalItems = newsData.length;
    const displayedItems = newsData.slice(0, displayCount);
    const hasMore = displayCount < totalItems;

    const handleShowMore = () => {
        setDisplayCount((prev) => Math.min(prev + 3, totalItems));
    };

    return (
        <>
            {displayedItems.map((card, idx) => (
                <CardBlog2 key={idx} card={card} idx={idx} />
            ))}
            {hasMore && (
                <div className="text-center mt-4">
                    <button onClick={handleShowMore} className="btn btn-rounded-pill">
                        <span className="text-nowrap">Show more posts</span>
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




