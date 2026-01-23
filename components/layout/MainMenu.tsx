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
                    <span>Home</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/">
                            Home 1
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-2">
                            Home 2
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-3">
                            Home 3
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-4">
                            Home 4
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-5">
                            Home 5
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-6">
                            Home 6
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-7">
                            Home 7
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/index-8">
                            Home 8
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Features</span>
                </Link>
                <ul className="dropdown-menu">
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Post headers
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/single-1">
                                    Single 1
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-2">
                                    Single 2
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-3">
                                    Single 3
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-4">
                                    Single 4
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-5">
                                    Single 5
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-6">
                                    Single 6
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/single-7">
                                    Single 7
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Archive layouts
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/archive-1">
                                    Archive 1
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-2">
                                    Archive 2
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-3">
                                    Archive 3
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-4">
                                    Archive 4
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-5">
                                    Archive 5
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-6">
                                    Archive 6
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-7">
                                    Archive 7
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-8">
                                    Archive 8
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/archive-9">
                                    Archive 9
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-has-child">
                        <Link className="dropdown-item has-child" href="#">
                            Portfolio
                        </Link>
                        <ul className="sub-menu">
                            <li>
                                <Link className="dropdown-item" href="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/portfolio-details">
                                    Portfolio Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item mega-menu-item">
                <Link className="nav-link dropdown-toggle dropdown-mega-menu link-effect-1" href="#">
                    <span>Trending</span>
                </Link>
                <div className="sub-mega-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-12 col-lg-6">
                                <div className="flash-news d-flex flex-column">
                                    <span className="fs-8 fw-bold text-uppercase">Flash news</span>
                                    {flashNewsData.map((card, idx) => (
                                        <CardBlog3 key={idx} card={card} idx={idx} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="block-comment">
                                    <p className="fs-8 fw-bold text-uppercase mb-3">Most comments</p>
                                    <ul className="list-unstyled ps-0">
                                        {mostCommentsData.map((card, idx) => (
                                            <MostCommentsItem key={idx} card={card} idx={idx} isLast={idx === mostCommentsData.length - 1} />
                                        ))}
                                    </ul>
                                </div>
                                <div className="block-tag pt-2">
                                    <p className="fs-8 fw-bold text-uppercase mb-3">Popular tags</p>
                                    <ul className="list-unstyled d-flex flex-wrap gap-2 ps-0">
                                        {cardTagPopupSearch1.map((card, idx) => (
                                            <TagList key={idx} card={card} idx={idx} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle link-effect-1 " href="#">
                    <span>Pages</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item" href="/about-me">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/about-us">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-author">
                            Author posts
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-search-results">
                            Search results
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-term">
                            Term &amp; Condition
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="/page-login">
                            Login
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}
