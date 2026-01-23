"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog5 from "@/components/cards/CardBlog5";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 9;

interface BlogCard {
    classList: string;
    linkPost: string;
    linkCategory: string;
    category: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    img: string;
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
            <div className="row mt-0 g-4">
                {paginatedData.map((card, idx) => (
                    <CardBlog5 key={idx} card={card} idx={idx} />
                ))}
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-start align-items-center">
                    <Pagination 
                        classList="" 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </>
    );
}

