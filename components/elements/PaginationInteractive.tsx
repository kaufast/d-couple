"use client";

interface PaginationInteractiveProps {
    classList: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationInteractive: React.FC<PaginationInteractiveProps> = ({ classList, currentPage, totalPages, onPageChange }) => {
    const getPageItems = () => {
        const items: (number | string)[] = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) items.push(i);
        } else {
            if (currentPage <= 3) {
                items.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                items.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                items.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return items;
    };

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const handlePageClick = (page: number) => {
        if (page !== currentPage) onPageChange(page);
    };

    const getPageItemClass = (item: number | string) => {
        if (typeof item === "number" && item > 3) {
            return "page-item d-none d-md-block";
        }
        return "page-item";
    };

    return (
        <div className={classList}>
            <nav>
                <ul className="pagination gap-2">
                    <li className="page-item">
                        <button className="pagination_item icon-shape" onClick={handlePrev} aria-label="Previous" disabled={currentPage === 1} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 5.26332C-0.0732223 4.97043 -0.0732223 4.49555 0.219668 4.20266L4.02458 0.397747L4.42233 -1.93306e-07L5.21782 0.795495L4.82008 1.19324L1.84283 4.1705L9.85984 4.1705L10.4223 4.1705L10.4223 5.2955L9.85984 5.2955L1.84283 5.2955L4.82008 8.27276L5.21782 8.67049L4.42233 9.46601L4.02458 9.06821L0.219668 5.26332Z" fill="#171717" />
                            </svg>
                        </button>
                    </li>
                    {getPageItems().map((item, idx) =>
                        typeof item === "number" ? (
                            <li key={item} className={getPageItemClass(item)}>
                                <h6 className="mb-0">
                                    <button className={`pagination_item icon-shape${item === currentPage ? " current" : ""}`} onClick={() => handlePageClick(item)} type="button">
                                        {item}
                                    </button>
                                </h6>
                            </li>
                        ) : (
                            <li key={`ellipsis-${idx}`} className="page-item">
                                <h6 className="mb-0">
                                    <span className="pagination_item icon-shape">...</span>
                                </h6>
                            </li>
                        )
                    )}
                    <li className="page-item">
                        <button className="pagination_item icon-shape" onClick={handleNext} aria-label="Next" disabled={currentPage === totalPages} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.2027 5.26332C10.4956 4.97043 10.4956 4.49555 10.2027 4.20266L6.39778 0.397747L6.00003 -1.93306e-07L5.20454 0.795495L5.60229 1.19324L8.57954 4.1705L0.562527 4.1705L2.65206e-05 4.1705L2.64714e-05 5.2955L0.562526 5.2955L8.57954 5.2955L5.60229 8.27276L5.20454 8.67049L6.00003 9.46601L6.39778 9.06821L10.2027 5.26332Z" fill="#171717" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PaginationInteractive;
