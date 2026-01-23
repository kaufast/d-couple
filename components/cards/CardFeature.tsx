import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        linkPost: string;
        linkCategory: string;
        category: string;
        title: string;
        description: string;
        linkAuthor: string;
        imgAuthor: string;
        author: string;
        date: string;
        readTime: string;
        img: string;
        tags: Array<{ link: string; name: string }>;
    };
    idx: number;
};

export default function CardFeature({ card, idx }: CardProps) {
    return (
        <div className="card-blog card-feature hover-up hover-zoom-image flex-column flex-lg-row">
            <Link href={card.linkPost} className="card-img">
                <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" priority />
            </Link>
            <div className="card-body">
                <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                    <span className="text-nowrap link-effect-1">
                        <span className="text-1">{card.category}</span>
                        <span className="text-2">{card.category}</span>
                    </span>
                </Link>
                <h4 className="mb-2 mt-2 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title">{card.title}</span>
                    </Link>
                </h4>
                <p className="fs-7 text-truncate-3">{card.description}</p>
                <div className="information pt-3 mt-3 border-top">
                    <Link href={card.linkAuthor} className="author">
                        <span className="author-img">
                            <Image src={card.imgAuthor} alt={card.author} width={24} height={24} />
                        </span>
                        <span className="author-info">{card.author}</span>
                    </Link>
                    <div className="date">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.date}</span>
                    </div>
                    <div className="read-time ms-auto">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.readTime}</span>
                    </div>
                </div>
                <div className="group-tag w-75 mt-4">
                    {card.tags.map((tag, tagIdx) => (
                        <Link key={tagIdx} href={tag.link} className="tag">
                            {tag.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
