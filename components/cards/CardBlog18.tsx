import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        classImg?: string;
        linkPost: string;
        linkCategory: string;
        linkAuthor: string;
        img: string;
        category: string;
        title: string;
        description: string;
        imgAuthor: string;
        author: string;
        readTime: string;
        date: string;
    };
    idx: number;
};

export default function CardBlog18({ card, idx }: CardProps) {
    return (
        <div className={`card-blog card-2 hover-up hover-zoom-image mb-4 ${card.classList || ""} style-3 shadow-2`}>
            <div className="card-body">
                <div className="information">
                    <div className="d-flex align-items-center gap-2">
                        <Link href={card.linkAuthor} className="author">
                            <span className="author-img">
                                <Image src={card.imgAuthor} alt={card.author} width={24} height={24} />
                            </span>
                            <span className="author-info fs-8">{card.author}</span>
                        </Link>
                        <div className="date">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.date}</span>
                        </div>
                    </div>
                    <div className="read-time">
                        <span className="dot"></span>
                        <span className="text fs-8 fw-medium">{card.readTime}</span>
                    </div>
                </div>
                <h3 className="h4 mb-3 mt-3 hover-underline">
                    <Link href={card.linkPost} className="text-truncate-2">
                        <span className="card-title">{card.title}</span>
                    </Link>
                </h3>
                <p className="text-truncate-4 mb-5">{card.description}</p>
                <Link href={card.linkPost} className="btn btn-outline" aria-label={`Read more about ${card.title}`}>
                    <span className="text-nowrap">Read more</span>
                    <span className="group-icon">
                        <span className="group-icon-inner dark-mode-invert">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                            </svg>
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="#171717"></path>
                            </svg>
                        </span>
                    </span>
                </Link>
            </div>
            <Link href={card.linkPost} className={`card-img d-inline-block ${card.classImg || ""}`}>
                <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={400} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </Link>
        </div>
    );
}
