import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        img: string;
        alt?: string;
        linkPost: string;
        linkCategory: string;
        title: string;
        count: string;
    };
    idx: number;
};

export default function TrendingCategoryCard({ card }: CardProps) {
    return (
        <div className="category-card">
            <Link href={card.linkPost} className="card-img">
                <Image className="image cover-image" src={card.img} alt={card.alt || card.title} width={350} height={200} sizes="(max-width: 768px) 100vw, 350px" />
            </Link>
            <div className="card-body">
                <h6 className="mb-1 hover-underline">
                    <Link href={card.linkCategory} className="card-title">
                        {card.title}
                    </Link>
                </h6>
                <p className="fs-8 mb-0">{card.count} articles</p>
            </div>
        </div>
    );
}
