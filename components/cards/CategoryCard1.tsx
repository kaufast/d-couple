import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        img: string;
        category: string;
        linkCategory: string;
        count: string;
    };
    idx: number;
};

export default function CategoryCard1({ card, idx }: CardProps) {
    return (
        <div className={card.classList || ""}>
            <div className="category-card style-1 hover-up hover-zoom-image">
                <div className="card-img-container">
                    <Link href={card.linkCategory} className="card-img">
                        <Image className="cover-image" src={card.img} alt={card.category} width={200} height={150} />
                    </Link>
                </div>
                <div className="card-body">
                    <h6 className="hover-underline">
                        <Link href={card.linkCategory} className="card-title">
                            {card.category}
                        </Link>
                    </h6>
                    <p className="fs-7 m-0 text-start">
                        <span className="number">
                            <span className="text-nowrap">{card.count}</span>
                        </span>
                        <span> articles </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
