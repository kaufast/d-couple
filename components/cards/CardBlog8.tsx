import Link from "next/link";
import Image from "next/image";

type CardProps = {
    card: {
        classList?: string;
        classCard?: string;
        linkPost: string;
        linkCategory: string;
        linkAuthor: string;
        category: string;
        title: string;
        description: string;
        date: string;
        readTime: string;
        author: string;
        imgAuthor: string;
        img: string;
    };
    idx: number;
};

export default function CardBlog8({ card, idx }: CardProps) {
    return (
        <div className={`card-blog-wrapper ${card.classList || ""}`}>
            <div className={`card-blog card-5 hover-up hover-zoom-image position-relative ${card.classCard || ""}`}>
                <Link href={card.linkPost} className="card-img max-height-442 rounded-6 overflow-hidden d-block">
                    <Image className="image cover-image" src={card.img} alt={card.title} width={600} height={442} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Link>
                <div className="card-body">
                    <Link href={card.linkCategory} className="tag has-dot text-nowrap position-absolute top-0 end-0 m-3">
                        <span className="text-nowrap link-effect-1">
                            <span className="text-1">{card.category}</span>
                            <span className="text-2">{card.category}</span>
                        </span>
                    </Link>
                    <div className="information pt-3 justify-content-start">
                        <div className="date">
                            <span className="text fs-8 fw-medium">{card.date}</span>
                        </div>
                        <div className="read-time">
                            <span className="dot"></span>
                            <span className="text fs-8 fw-medium">{card.readTime}</span>
                        </div>
                    </div>
                    <h3 className="h5 mb-2 mt-2 hover-underline">
                        <Link href={card.linkPost} className="text-truncate-2">
                            <span className="card-title">{card.title}</span>
                        </Link>
                    </h3>
                    <p className="fs-6 text-dark text-truncate-2 mb-0">{card.description}</p>
                    <div className="information pt-4">
                        <Link href={card.linkAuthor} className="author">
                            <span className="author-img">
                                <Image className="size-32" src={card.imgAuthor} alt="" width={32} height={32} />
                            </span>
                            <span className="author-info">{card.author}</span>
                        </Link>
                        <Link href={card.linkPost} className="btn btn-outline" aria-label={`Read full report: ${card.title}`}>
                            <span className="text-nowrap">Read full report</span>
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
                </div>
            </div>
        </div>
    );
}
