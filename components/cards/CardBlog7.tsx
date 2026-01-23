import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        linkPost: string;
        img: string;
        title: string;
        date: string;
    };
    idx: number;
};

export default function CardBlog7({ card, idx }: CardProps) {
    return (
        <div className={`card-blog card-3 hover-up hover-zoom-image flex-row-reverse border-0 ${card.classList || ""}`}>
            <div className="card-body">
                <h6 className="mb-2 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title fs-7">{card.title}</span>
                    </Link>
                </h6>
                <div className="information">
                    <div className="date">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.date}</span>
                    </div>
                </div>
            </div>
            <div className="card-img-container d-inline-flex">
                <Link href={card.linkPost} className="card-img size-75">
                    <Image src={card.img} alt={card.title} width={75} height={75} />
                </Link>
            </div>
        </div>
    );
}
