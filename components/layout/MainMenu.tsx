import Link from "next/link";
import CardBlog3 from "@/components/cards/CardBlog3";
import MostCommentsItem from "@/components/cards/MostCommentsItem";
import TagList from "@/components/cards/TagList";
import cardTagPopupSearch from "@/public/data/Tag_List.json";

// Flash news data
const flashNewsData = [
    {
        classList: "pt-0",
        classCard: "style-3",
        linkPost: "/single-1",
        img: "/assets/imgs/page/img-9.webp",
        title: "Time slowly fades where moss grows",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/single-2",
        img: "/assets/imgs/page/img-10.webp",
        title: "The weight of light in endless fields",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/single-3",
        img: "/assets/imgs/page/img-11.webp",
        title: "What the fire gently leaves behind",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/single-4",
        img: "/assets/imgs/page/img-12.webp",
        title: "A meadow quietly built from memory",
        date: "Jun 13, 2025",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/single-5",
        img: "/assets/imgs/page/img-13.webp",
        title: "How the desert softly dreams of rain",
        date: "Jun 13, 2025",
    },
];

// Most comments data
const mostCommentsData = [
    {
        number: 1,
        linkPost: "/single-1",
        title: "Beneath the soil, seeds whisper about another day",
    },
    {
        number: 2,
        linkPost: "/single-2",
        title: "When machines learn to design themselves",
    },
    {
        number: 3,
        linkPost: "/single-3",
        title: "The unseen future behind every interface",
    },
];

export default function MainMenu() {
    const cardTagPopupSearch1 = cardTagPopupSearch.TagList;

    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Overview</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Oversight Directory</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/directory">
                            Entity Directory
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/reports/submit">
                            Submit Report
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/admin">
                            Admin Dashboard
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Mobility Resources</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/portal">
                            Strategic Portal
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/portal/asset-preservation">
                            Asset Preservation
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/portal/relocation">
                            Relocation Strategies
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Field Intel</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/directory">
                            Browse Reports
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/reports/submit">
                            Submit Intelligence
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/login">
                            Access Portal
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
