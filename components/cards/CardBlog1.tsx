import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        img: string;
        title: string;
        description: string;
        date: string;
        linkPost?: string;
    };
    idx: number;
};

export default function CardBlog1({ card, idx }: CardProps) {
    const linkPost = card.linkPost || "/single-1";
    return (
        <div className={`card-blog card-1 hover-up hover-zoom-image ${card.classList || ""}`}>
            <div className="card-img">
                <Link href={linkPost}>
                    <Image src={card.img} className="w-100 h-100 card-img" alt={card.title} width={600} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Link>
            </div>
            <div className="card-body">
                <h6 className="mb-3 mt-2 hover-underline">
                    <Link href={linkPost} className="card-title">
                        {card.title}
                    </Link>
                </h6>
                <p className="fs-7 pb-3">{card.description}</p>
            </div>
            <div className="information">
                <div className="date line-divider w-100">
                    <span className="dot"></span>
                    <span className="text">{card.date}</span>
                </div>
            </div>
        </div>
    );
}
