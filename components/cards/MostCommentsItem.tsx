import Link from "next/link";

type CardProps = {
    card: {
        number: number;
        linkPost: string;
        title: string;
    };
    idx: number;
    isLast?: boolean;
};

export default function MostCommentsItem({ card, idx, isLast = false }: CardProps) {
    return (
        <li className="mb-3 hover-up">
            <div className={`pb-2 ${isLast ? "" : "border-bottom"}`}>
                <div className="card-body d-flex">
                    <div>
                        <span className="badge-number me-3 align-self-start">{card.number}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <p className="h6 mb-1 hover-underline">
                            <Link href={card.linkPost} className="text-truncate-2">
                                <span className="card-title fs-6">{card.title}</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </li>
    );
}
