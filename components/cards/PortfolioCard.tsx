import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        img: string;
        linkPost: string;
        title: string;
        classList: string;
        linkCategory?: string;
        category?: string;
        description?: string;
        author?: string;
        date?: string;
        tools?: string;
        price?: string;
    };
    idx: number;
};

export default function PortfolioCard({ card, idx }: CardProps) {
    return (
        <div className={card.classList} key={idx}>
            <div className="card-portfolio card-1">
                <div className="hover-effect-1 card-img-top">
                    <Link href={card.linkPost} className="">
                        <Image src={card.img} className="w-100 h-100" alt={card.title} width={600} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </Link>
                </div>
                <div className="card-body hover-up">
                    {card.linkCategory && card.category && (
                        <>
                            <Link href={card.linkCategory} className="category fs-7 mb-2">
                                {card.category}
                            </Link>
                            <br />
                        </>
                    )}
                    <Link className="hover-underline" href={card.linkPost}>
                        <h2 className="card-title mb-0 text-truncate-2">{card.title}</h2>
                    </Link>
                    {card.description && <p className="card-text text-dark my-3 text-truncate-2">{card.description}</p>}
                    <div className="d-flex flex-wrap align-items-center gap-4 pt-4">
                        {card.author && (
                            <div className="d-flex align-items-center gap-1">
                                <Image className="icon-person size-24 dark-mode-invert" src="/assets/imgs/template/icons/person.svg" alt="d-couple" width={24} height={24} />
                                <span className="fs-8 fw-medium">{card.author}</span>
                            </div>
                        )}
                        {card.date && (
                            <div className="d-flex align-items-center gap-1">
                                <Image className="icon-person size-24 dark-mode-invert" src="/assets/imgs/template/icons/calendar.svg" alt="d-couple" width={24} height={24} />
                                <span className="fs-8 fw-medium">{card.date}</span>
                            </div>
                        )}
                        {card.tools && (
                            <div className="d-flex align-items-center gap-1">
                                <Image className="icon-person size-24 dark-mode-invert" src="/assets/imgs/template/icons/ruler.svg" alt="d-couple" width={24} height={24} />
                                <span className="fs-8 fw-medium">{card.tools}</span>
                            </div>
                        )}
                        {card.price && (
                            <div className="d-flex align-items-center gap-1">
                                <Image className="icon-person size-24 dark-mode-invert" src="/assets/imgs/template/icons/wallet.svg" alt="d-couple" width={24} height={24} />
                                <span className="fs-8 fw-medium">{card.price}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
