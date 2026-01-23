import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        linkPost: string;
        linkCategory: string;
        linkAuthor: string;
        category: string;
        title: string;
        description: string;
        date: string;
        readTime: string;
        imgAuthor: string;
        author: string;
        img: string;
    };
    idx: number;
};

export default function CardBlog6({ card, idx }: CardProps) {
    return (
        <div className={`card-blog card-6 hover-up hover-zoom-image mb-4 ${card.classList || ""} position-relative`}>
            <Link href={card.linkPost} className="card-img rounded-6 overflow-hidden d-block">
                <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>
            <div className="card-body">
                <div className="information pt-3 justify-content-start">
                    <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                        <span className="text-nowrap link-effect-1">
                            <span className="text-1">{card.category}</span>
                            <span className="text-2">{card.category}</span>
                        </span>
                    </Link>
                    <div className="date">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.date}</span>
                    </div>
                </div>
                <h5 className="mb-2 mt-2 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title">{card.title}</span>
                    </Link>
                </h5>
                <p className="fs-7 text-truncate-2 mb-3">{card.description}</p>
                <div className="information pt-3 mt-3 border-top">
                    <Link href={card.linkAuthor} className="author">
                        <span className="author-img">
                            <Image src={card.imgAuthor} alt={card.author} width={24} height={24} />
                        </span>
                        <span className="author-info">{card.author}</span>
                    </Link>
                    <div className="read-time">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
