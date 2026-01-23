"use client";

interface NavbarTogglerProps {
    onClick: () => void;
    className?: string;
}

export default function NavbarToggler({ onClick, className = "" }: NavbarTogglerProps) {
    return (
        <a
            href="#"
            className={`navbar-toggler d-lg-none size-28 icon-shape ${className}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z" fill="#171717" />
            </svg>
        </a>
    );
}

