import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        classCard?: string;
        linkPost: string;
        title: string;
        date: string;
        readTime: string;
        img: string;
    };
    idx: number;
};

export default function CardBlog10({ card, idx }: CardProps) {
    return (
        <div className={card.classList || ""}>
            <div className={`card-blog card-3 hover-up hover-zoom-image ${card.classCard || ""}`}>
                <div className="card-body">
                    <h3 className="h6 mb-2 hover-underline">
                        <Link href={card.linkPost} className="text-truncate-2">
                            <span className="card-title">{card.title}</span>
                        </Link>
                    </h3>
                    <div className="information">
                        <div className="date">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.date}</span>
                        </div>
                        <div className="read-time me-auto">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.readTime}</span>
                        </div>
                    </div>
                </div>
                <div className="card-img-container">
                    <Link href={card.linkPost} className="card-img">
                        <Image className="image cover-image" src={card.img} alt={card.title} width={200} height={150} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
