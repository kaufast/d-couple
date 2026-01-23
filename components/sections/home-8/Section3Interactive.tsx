"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog16 from "@/components/cards/CardBlog16";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 7;

interface Section3InteractiveProps {
    latestArticlesData: any[];
}

export default function Section3Interactive({ latestArticlesData }: Section3InteractiveProps) {
    const totalPages = Math.max(1, Math.ceil(latestArticlesData.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return latestArticlesData.slice(start, start + ITEMS_PER_PAGE);
    }, [latestArticlesData, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            {paginatedData.map((card, idx) => (
                <CardBlog16 key={idx} card={card} idx={idx} />
            ))}
            <div className="col-12 pt-4 d-flex justify-content-center align-items-center">
                <Pagination classList="" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
