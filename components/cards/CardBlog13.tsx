import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        classCard?: string;
        linkPost: string;
        linkCategory: string;
        linkAuthor: string;
        img: string;
        title: string;
        date: string;
    };
    idx: number;
};

export default function CardBlog13({ card, idx }: CardProps) {
    return (
        <div className={card.classList || ""}>
            <div className={`card-blog card-3 card-13 hover-up hover-zoom-image style-2 ${card.classCard || ""}`}>
                <div className="card-body">
                    <div className="information">
                        <div className="date">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.date}</span>
                        </div>
                    </div>
                    <h6 className="hover-underline">
                        <Link href={card.linkPost} className="text-truncate-2">
                            <span className="card-title fs-6">{card.title}</span>
                        </Link>
                    </h6>
                </div>
                <div className="card-img-container">
                    <Link href={card.linkPost} className="card-img">
                        <Image className="cover-image" src={card.img} alt={card.title} width={120} height={120} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
