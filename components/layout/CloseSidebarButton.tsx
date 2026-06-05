"use client";

interface CloseSidebarButtonProps {
    onClick: () => void;
    className?: string;
}

export default function CloseSidebarButton({ onClick, className = "" }: CloseSidebarButtonProps) {
    return (
        <a
            href="#"
            className={`close-sidebar ${className}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.4698 13.5303L13.0001 14.0607L14.0608 13L13.5304 12.4697L9.06077 7.99999L13.5304 3.53032L14.0608 2.99999L13.0001 1.93933L12.4698 2.46966L8.00011 6.93933L3.53044 2.46966L3.00011 1.93933L1.93945 2.99999L2.46978 3.53032L6.93945 7.99999L2.46978 12.4697L1.93945 13L3.00011 14.0607L3.53044 13.5303L8.00011 9.06065L12.4698 13.5303Z" fill="#171717" />
            </svg>
        </a>
    );
}
