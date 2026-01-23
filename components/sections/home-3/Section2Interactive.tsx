"use client";

import { useEffect, useMemo, useState } from "react";
import CardBlog5 from "@/components/cards/CardBlog5";
import Pagination from "@/components/elements/Pagination";

const ITEMS_PER_PAGE = 6; // 2 sections of 6 cards each

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

interface Section2InteractiveProps {
    latestNewsData: BlogCard[];
}

export default function Section2Interactive({ latestNewsData }: Section2InteractiveProps) {
    const totalPages = Math.max(1, Math.ceil(latestNewsData.length / ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return latestNewsData.slice(start, start + ITEMS_PER_PAGE);
    }, [latestNewsData, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Split paginated data into sections of 6 cards
    const sections = useMemo(() => {
        const sectionsArray = [];
        for (let i = 0; i < paginatedData.length; i += 6) {
            sectionsArray.push(paginatedData.slice(i, i + 6));
        }
        return sectionsArray;
    }, [paginatedData]);

    return (
        <>
            {sections.map((sectionCards, sectionIdx) => {
                const startIdx = sectionIdx * 6;
                // Pattern for each section: 6 cards in 2 rows
                // Row 1: [Large (col-lg-5)] + [col-lg-7 with 2 small cards]
                // Row 2: [col-lg-7 with 2 small cards] + [Large (col-lg-5)]
                return (
                    <div key={`section-${sectionIdx}`}>
                        {/* Row 1: Large + 2 small */}
                        <div className="row g-3 mt-3">
                            {sectionCards[0] && <CardBlog5 card={sectionCards[0]} idx={startIdx} />}
                            <div className="col-lg-7">
                                <div className="row g-3">
                                    {sectionCards[1] && <CardBlog5 card={sectionCards[1]} idx={startIdx + 1} />}
                                    {sectionCards[2] && <CardBlog5 card={sectionCards[2]} idx={startIdx + 2} />}
                                </div>
                            </div>
                        </div>
                        {/* Row 2: 2 small + Large */}
                        <div className="row g-3 mt-2">
                            <div className="col-lg-7">
                                <div className="row g-3">
                                    {sectionCards[3] && <CardBlog5 card={sectionCards[3]} idx={startIdx + 3} />}
                                    {sectionCards[4] && <CardBlog5 card={sectionCards[4]} idx={startIdx + 4} />}
                                </div>
                            </div>
                            {sectionCards[5] && <CardBlog5 card={sectionCards[5]} idx={startIdx + 5} />}
                        </div>
                    </div>
                );
            })}
            <div className="row">
                <div className="col-12 pt-60 d-flex justify-content-center align-items-center">
                    <Pagination classList="" currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>
        </>
    );
}
