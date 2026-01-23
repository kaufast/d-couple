import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        classImg?: string;
        linkPost: string;
        linkCategory: string;
        img: string;
        category: string;
        title: string;
        readTime: string;
        date: string;
    };
    idx: number;
};

export default function CardBlog16({ card, idx }: CardProps) {
    return (
        <div className={`card-blog card-16 mb-3 hover-up hover-zoom-image ${card.classList || ""} d-flex flex-column flex-md-row`}>
            <div className="card-body p-2">
                <div className="information justify-content-start">
                    <Link href={card.linkCategory} className="tag has-dot text-nowrap">
                        <span className="text-nowrap link-effect-1">
                            <span className="text-1">{card.category}</span>
                            <span className="text-2">{card.category}</span>
                        </span>
                    </Link>
                    <div className="read-time">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.readTime}</span>
                    </div>
                </div>
                <h5 className="mt-2 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title">{card.title}</span>
                    </Link>
                </h5>
            </div>
            <div className="card-img-container d-inline-flex">
                <Link href={card.linkPost} className={`card-img d-inline-block ${card.classImg || ""}`}>
                    <Image className="image cover-image" src={card.img} alt={card.title} width={150} height={150} />
                </Link>
            </div>
        </div>
    );
}
