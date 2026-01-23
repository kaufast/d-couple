import Link from "next/link";

type CardProps = {
    card: {
        linkpage_category: string;
        name: string;
    };
    idx: number;
};

export default function TagList({ card, idx }: CardProps) {
    return (
        <li className="mx-0" key={idx}>
            <Link href={card.linkpage_category} className="tag-item link-effect-2">
                <span className="text">
                    <span className="text1">{card.name}</span>
                    <span className="text2">{card.name}</span>
                </span>
            </Link>
        </li>
    );
}
