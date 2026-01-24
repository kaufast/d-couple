import Link from "next/link";
import CardBlog3 from "@/components/cards/CardBlog3";
import MostCommentsItem from "@/components/cards/MostCommentsItem";
import TagList from "@/components/cards/TagList";
import cardTagPopupSearch from "@/public/data/Tag_List.json";

// Intelligence Alerts data
const intelligenceAlertsData = [
    {
        classList: "pt-0",
        classCard: "style-3",
        linkPost: "/reports/big-tech-compliance",
        img: "/assets/imgs/page/img-9.webp",
        title: "Big Actor Compliance Shift: Tracking new data privacy loopholes in Silicon Valley technocracies",
        date: "Jan 2026",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/reports/eu-sovereign-investment",
        img: "/assets/imgs/page/img-10.webp",
        title: "Regional Growth Win: A new EU-first investment platform launches for sovereign tech startups",
        date: "Jan 2026",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/reports/legal-mobility-update",
        img: "/assets/imgs/page/img-11.webp",
        title: "Legal Mobility Update: New jurisdictional protocols for asset preservation in rights-respecting regions",
        date: "Jan 2026",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/reports/logistics-decoupling",
        img: "/assets/imgs/page/img-12.webp",
        title: "Supply Chain Sovereignty: EU logistics cooperatives bypass Amazon distribution networks",
        date: "Jan 2026",
    },
    {
        classList: "",
        classCard: "style-3",
        linkPost: "/reports/cloud-sovereignty",
        img: "/assets/imgs/page/img-13.webp",
        title: "GAIA-X Progress Report: Regional cloud infrastructure adoption reaches critical mass in France",
        date: "Jan 2026",
    },
];

// Top Accountability Scores data
const topAccountabilityData = [
    {
        number: 1,
        linkPost: "/directory/amazon",
        title: "Amazon - Compliance Score: 38% ↓ (Labor violations in EU warehouses)",
    },
    {
        number: 2,
        linkPost: "/directory/meta",
        title: "Meta - Privacy Violations: 12 this quarter ↑ (GDPR non-compliance)",
    },
    {
        number: 3,
        linkPost: "/directory/apple",
        title: "Apple - Regional Market Dominance: 67% ↑ (Anti-competitive practices)",
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
