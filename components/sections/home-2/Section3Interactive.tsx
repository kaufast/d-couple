"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog6 from "@/components/cards/CardBlog6";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 6;

interface Section3InteractiveProps {
    breakingNewsData: any[];
}

export default function Section3Interactive({ breakingNewsData }: Section3InteractiveProps) {
    const totalPages = Math.max(1, Math.ceil(breakingNewsData.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return breakingNewsData.slice(start, start + ITEMS_PER_PAGE);
    }, [breakingNewsData, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="row">
                {paginatedData.map((card, idx) => (
                    <CardBlog6 key={idx} card={card} idx={idx} />
                ))}
            </div>
            <div className="pt-5">
                <Pagination classList="" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
