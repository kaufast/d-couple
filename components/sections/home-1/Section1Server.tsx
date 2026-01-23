import Link from "next/link";
import Image from "next/image";
import CardBlog1 from "@/components/cards/CardBlog1";
import Section1Interactive from "./Section1Interactive";

// Card data for main blog card
const mainBlogCard = {
    linkCategory: "/archive-1",
    category: "Lifestyle",
    linkPost: "/single-1",
    title: "Returning to the unnamed wild beyond the maps",
    description: "There are places that refuse to be mapped — not because they're far, but because they're alive.",
    linkAuthor: "/page-author",
    authorImg: "/assets/imgs/template/author/author-7.webp",
    authorName: "Lora",
    date: "Jun 13, 2025",
    img: "/assets/imgs/page/img-1.webp",
    tags: [
        { link: "/archive-1", name: "silence" },
        { link: "/archive-2", name: "noise" },
        { link: "/archive-3", name: "solitude" },
        { link: "/archive-4", name: "landscape" },
        { link: "/archive-5", name: "mindfulness" },
    ],
};

// Card data for side card
const sideCard = {
    classList: "",
    img: "/assets/imgs/page/img-2.webp",
    title: "When machines begin to dream of trees",
    description: "A calm space for slow thoughts. No noise — just reflection, meaning, and quiet curiosity.",
    date: "Jun 13, 2025",
    linkPost: "/single-1",
};

export default function Section1Server() {
    return (
        <section className="sec-1-home-1 pt-50 pb-40 overflow-hidden">
            <div className="container">
                <div className="row mb-3 g-4 align-items-end">
                    <div className="col-lg-8">
                        <div className="d-inline-block">
                            <h1 className="ds-1 mb-3">Quietly Thinking</h1>
                            <span className="line-dot"></span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <p className="text-dark">A calm space for slow thoughts. No noise — just reflection, meaning, and quiet curiosity.</p>
                        <Section1Interactive />
                    </div>
                </div>
                <div className="row pt-40 g-3">
                    <div className="col-lg-9 col-md-6 col-12">
                        <div className="card-blog hover-up hover-zoom-image mb-4 row">
                            <div className="col-lg-4 col-md-6 order-lg-1 order-2">
                                <div className="card-blog hover-up hover-zoom-image">
                                    <div className="card-body">
                                        <Link href={mainBlogCard.linkCategory} className="tag has-dot text-nowrap">
                                            <span className="text-nowrap link-effect-1">
                                                <span className="text-1">{mainBlogCard.category}</span>
                                                <span className="text-2">{mainBlogCard.category}</span>
                                            </span>
                                        </Link>
                                        <h4 className="mb-3 mt-2 hover-underline">
                                            <Link href={mainBlogCard.linkPost} className="card-title">
                                                {mainBlogCard.title}
                                            </Link>
                                        </h4>
                                        <p className="fs-7 pb-4 border-bottom">{mainBlogCard.description}</p>
                                        <div className="information">
                                            <div className="author">
                                                <Link href={mainBlogCard.linkAuthor} className="author-img">
                                                    <Image src={mainBlogCard.authorImg} alt={mainBlogCard.authorName} width={40} height={40} />
                                                </Link>
                                                <Link href={mainBlogCard.linkAuthor} className="author-info">
                                                    {mainBlogCard.authorName}
                                                </Link>
                                            </div>
                                            <div className="date">
                                                <span className="dot"></span>
                                                <span className="text fs-8 fw-medium">{mainBlogCard.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-tag mt-3">
                                    {mainBlogCard.tags.map((tag, idx) => (
                                        <Link key={idx} href={tag.link} className="tag">
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-12 mb-lg-0 mb-4 d-md-none d-lg-block order-lg-2 order-1">
                                <div className="card-img">
                                    <Link href={mainBlogCard.linkPost}>
                                        <Image src={mainBlogCard.img} alt={mainBlogCard.title} className="cover-image" width={800} height={600} sizes="(max-width: 768px) 100vw, 800px" priority />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <CardBlog1 card={sideCard} idx={0} />
                    </div>
                </div>
            </div>
        </section>
    );
}
