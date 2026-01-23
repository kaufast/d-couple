import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        linkPost: string;
        title: string;
        date: string;
        img: string;
    };
    idx: number;
};

export default function CardBlog11({ card, idx }: CardProps) {
    return (
        <div className={`card-blog-wrapper hover-up hover-zoom-image ${card.classList || ""}`}>
            <div className="card-blog card-11 position-relative">
                <Link href={card.linkPost} className="card-img rounded-6 overflow-hidden d-block">
                    <Image className="image cover-image" src={card.img} alt={card.title} width={300} height={200} />
                </Link>
                <div className="card-body">
                    <h6 className="mb-2 mt-3 hover-underline">
                        <Link href={card.linkPost} className="text-truncate-2">
                            <span className="card-title">{card.title}</span>
                        </Link>
                    </h6>
                    <div className="information justify-content-start">
                        <div className="date">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
