import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        img: string;
        name: string;
        position: string;
        followers: string;
    };
    idx: number;
};

export default function AuthorCard2({ card, idx }: CardProps) {
    return (
        <div className={`card-author2 hover-up hover-zoom-image ${card.classList || ""}`}>
            <div className="card-author2">
                <Image src={card.img} alt={card.name} className="cover-image" width={300} height={300} sizes="(max-width: 768px) 50vw, 300px" />
                <div className="card-body pt-3">
                    <h6 className="mb-1">{card.name}</h6>
                    <div className="information justify-content-start">
                        <div className="position">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M4.91012 0L6.5185 2.9491L9.82025 3.56741L7.5125 6.00837L7.94475 9.33962L4.91012 7.89912L1.8755 9.33962L2.30776 6.00837L0 3.56741L3.30177 2.9491L4.91012 0Z" fill="#A8A8A8" />
                                </svg>
                            </span>
                            <span className="text fs-8 fw-medium">{card.position}</span>
                        </div>
                        <div className="followers">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M0.8713 0.8713C2.00728 -0.264681 3.83342 -0.289863 5 0.795757C6.16657 -0.289861 7.99275 -0.264681 9.12869 0.8713C10.2904 2.03304 10.2904 3.91658 9.12869 5.07832L5 9.207L0.8713 5.07832C-0.290432 3.91658 -0.290434 2.03304 0.8713 0.8713Z" fill="#A8A8A8" />
                                </svg>
                            </span>
                            <span className="text fs-8 fw-medium">{card.followers}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
