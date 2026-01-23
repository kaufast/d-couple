import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        linkPost: string;
        linkCategory: string;
        linkAuthor: string;
        img: string;
        category: string;
        title: string;
        description: string;
        imgAuthor: string;
        author: string;
        date: string;
    };
    idx: number;
};

export default function CardBlog12({ card, idx }: CardProps) {
    return (
        <div className={`card-blog card-12 mb-4 hover-up hover-zoom-image ${card.classList || ""}`}>
            <div className="card-img-container size-120">
                <Link href={card.linkPost} className="card-img">
                    <Image className="image cover-image" src={card.img} alt={card.title} width={120} height={120} />
                </Link>
            </div>
            <div className="card-body">
                <div className="information justify-content-start">
                    <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                        <span className="text-nowrap link-effect-1">
                            <span className="text-1">{card.category}</span>
                            <span className="text-2">{card.category}</span>
                        </span>
                    </Link>
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
                </div>
                <h5 className="mb-2 mt-2 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title">{card.title}</span>
                    </Link>
                </h5>
                <p className="fs-6 text-truncate-2">{card.description}</p>
            </div>
        </div>
    );
}
