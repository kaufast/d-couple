import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        linkCategory: string;
        img: string;
        category: string;
        articlesCount: string;
    };
    idx: number;
    noColumnClasses?: boolean;
};

export default function CategoryCard2({ card, idx, noColumnClasses = false }: CardProps) {
    return (
        <div className={noColumnClasses ? "" : "col-lg-2 col-md-4 col-6"}>
            <div className="category-card-2 hover-up hover-zoom-image">
                <div className="card-img w-100">
                    <Link href={card.linkCategory} className="w-100">
                        <Image className="image cover-image" src={card.img} alt={card.category} width={400} height={250} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px" />
                    </Link>
                </div>
                <div className="card-body text-center">
                    <h3 className="h6 mb-1 hover-underline">
                        <Link href={card.linkCategory} className="card-title">
                            {card.category}
                        </Link>
                    </h3>
                    <p className="fs-8 mb-0">{card.articlesCount} articles</p>
                </div>
            </div>
        </div>
    );
}
