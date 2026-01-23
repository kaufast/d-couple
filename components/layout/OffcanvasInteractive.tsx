"use client";
import { useState } from "react";
import Link from "next/link";
import { useSidebarContext } from "./SidebarContext";

export default function OffcanvasInteractive() {
    const { toggleSidebar } = useSidebarContext();

    // State to manage which collapse menus are open
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    // Function to toggle collapse menu
    const toggleMenu = (menuKey: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuKey]: !prev[menuKey],
        }));
    };

    // Function to handle collapse toggle click
    const handleCollapseToggle = (e: React.MouseEvent, menuKey: string) => {
        e.preventDefault();
        toggleMenu(menuKey);
    };

    // Function to handle link click - close sidebar when navigating
    const handleLinkClick = () => {
        toggleSidebar(false);
    };

    return (
        <ul className="sidebar-nav list-unstyled">
            <li className={`nav-item collapse ${openMenus["home"] ? "active" : ""}`}>
                <a className="nav-link mb-2 collapse-toggle" href="#" onClick={(e) => handleCollapseToggle(e, "home")}>
                    Home
                </a>
                <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
                    <li>
                        <Link className="collapse-item" href="/" onClick={handleLinkClick}>
                            Home 1
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-2" onClick={handleLinkClick}>
                            Home 2
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-3" onClick={handleLinkClick}>
                            Home 3
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-4" onClick={handleLinkClick}>
                            Home 4
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-5" onClick={handleLinkClick}>
                            Home 5
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-6" onClick={handleLinkClick}>
                            Home 6
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-7" onClick={handleLinkClick}>
                            Home 7
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/index-8" onClick={handleLinkClick}>
                            Home 8
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={`nav-item collapse ${openMenus["post"] ? "active" : ""}`}>
                <a className="nav-link mb-2 collapse-toggle" href="#" onClick={(e) => handleCollapseToggle(e, "post")}>
                    Post headers
                </a>
                <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
                    <li>
                        <Link className="collapse-item" href="/single-1" onClick={handleLinkClick}>
                            Single 1
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-2" onClick={handleLinkClick}>
                            Single 2
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-3" onClick={handleLinkClick}>
                            Single 3
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-4" onClick={handleLinkClick}>
                            Single 4
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-5" onClick={handleLinkClick}>
                            Single 5
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-6" onClick={handleLinkClick}>
                            Single 6
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/single-7" onClick={handleLinkClick}>
                            Single 7
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={`nav-item collapse ${openMenus["archive"] ? "active" : ""}`}>
                <a className="nav-link mb-2 collapse-toggle" href="#" onClick={(e) => handleCollapseToggle(e, "archive")}>
                    Archive layouts
                </a>
                <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
                    <li>
                        <Link className="collapse-item" href="/archive-1" onClick={handleLinkClick}>
                            Archive 1
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-2" onClick={handleLinkClick}>
                            Archive 2
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-3" onClick={handleLinkClick}>
                            Archive 3
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-4" onClick={handleLinkClick}>
                            Archive 4
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-5" onClick={handleLinkClick}>
                            Archive 5
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-6" onClick={handleLinkClick}>
                            Archive 6
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-7" onClick={handleLinkClick}>
                            Archive 7
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-8" onClick={handleLinkClick}>
                            Archive 8
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/archive-9" onClick={handleLinkClick}>
                            Archive 9
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={`nav-item collapse ${openMenus["portfolio"] ? "active" : ""}`}>
                <a className="nav-link mb-2 collapse-toggle" href="#" onClick={(e) => handleCollapseToggle(e, "portfolio")}>
                    Portfolio
                </a>
                <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
                    <li>
                        <Link className="collapse-item" href="/portfolio" onClick={handleLinkClick}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/portfolio-details" onClick={handleLinkClick}>
                            Portfolio Details
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={`nav-item collapse ${openMenus["pages"] ? "active" : ""}`}>
                <a className="nav-link mb-2 collapse-toggle" href="#" onClick={(e) => handleCollapseToggle(e, "pages")}>
                    Pages
                </a>
                <ul className="collapse-menu d-flex flex-column gap-1 list-unstyled">
                    <li>
                        <Link className="collapse-item" href="/about-me" onClick={handleLinkClick}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/about-us" onClick={handleLinkClick}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/page-author" onClick={handleLinkClick}>
                            Author posts
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/page-search-results" onClick={handleLinkClick}>
                            Search results
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/page-term" onClick={handleLinkClick}>
                            Term &amp; Condition
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/page-contact" onClick={handleLinkClick}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/page-login" onClick={handleLinkClick}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="collapse-item" href="/not-found" onClick={handleLinkClick}>
                            404
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
