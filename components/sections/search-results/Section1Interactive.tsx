"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog12 from "@/components/cards/CardBlog12";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 6;

interface Section1InteractiveProps {
    articlesData: any[];
}

export default function Section1Interactive({ articlesData }: Section1InteractiveProps) {
    const totalPages = Math.max(1, Math.ceil(articlesData.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return articlesData.slice(start, start + ITEMS_PER_PAGE);
    }, [articlesData, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            {paginatedData.map((card, idx) => (
                <CardBlog12 key={idx} card={card} idx={idx} />
            ))}
            <div className="col-12 mt-5 d-flex justify-content-start align-items-center">
                <Pagination classList="" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
