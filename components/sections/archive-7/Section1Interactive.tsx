"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog12 from "@/components/cards/CardBlog12";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 10;

interface BlogCard {
    classList: string;
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
    blogCards: BlogCard[];
}

export default function Section1Interactive({ blogCards }: Section1InteractiveProps) {
    const totalPages = Math.max(1, Math.ceil(blogCards.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return blogCards.slice(start, start + ITEMS_PER_PAGE);
    }, [blogCards, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="pt-2"></div>
            {paginatedData.map((card, idx) => (
                <CardBlog12 key={idx} card={card} idx={idx} />
            ))}
            <div className="mt-5 pb-3 d-flex justify-content-start align-items-center">
                <Pagination classList="" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
