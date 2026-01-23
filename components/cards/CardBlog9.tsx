import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        linkPost: string;
        linkCategory: string;
        category: string;
        title: string;
        description: string;
        date: string;
        readTime: string;
        img: string;
    };
    idx: number;
};

export default function CardBlog9({ card, idx }: CardProps) {
    return (
        <div className={`card-blog-wrapper ${card.classList || ""} pt-1`}>
            <div className="card-blog card-9 position-relative hover-up hover-zoom-image rounded-6 overflow-hidden">
                <Link href={card.linkPost} className="card-img d-block max-height-442">
                    <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={442} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Link>
                <Link href={card.linkCategory} className="tag has-dot text-nowrap position-absolute top-0 end-0 m-3">
                    <span className="text-nowrap link-effect-1">
                        <span className="text-1">{card.category}</span>
                        <span className="text-2">{card.category}</span>
                    </span>
                </Link>
                <div className="card-body">
                    <div className="information pt-3 justify-content-start">
                        <div className="date">
                            <span className="text fs-8 fw-medium text-date">{card.date}</span>
                        </div>
                        <div className="read-time">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium text-read-time">{card.readTime}</span>
                        </div>
                    </div>
                    <h5 className="mb-2 mt-2 hover-underline-white changeless">
                        <Link href={card.linkPost} className="text-truncate-2">
                            <span className="card-title">{card.title}</span>
                        </Link>
                    </h5>
                    <p className="fs-7 text-truncate-2 mb-3 text-description">{card.description}</p>
                </div>
            </div>
        </div>
    );
}
