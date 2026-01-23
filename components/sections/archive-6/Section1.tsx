import Image from "next/image";
import Section1Interactive from "./Section1Interactive";
import SideBar from "@/components/elements/sidebar2";

const blogCardsData = [
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-152.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-153.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-154.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-152.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-153.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-154.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-152.webp",
    },
    {
        classList: "mb-4",
        classCard: "style-2",
        linkPost: "/single-6",
        linkCategory: "/archive-4",
        linkAuthor: "/page-author",
        category: "Lifestyle",
        title: "The breath of the mountains stays warm, even when humanity walks away",
        description: "The mountains keep their calm long after we're gone. Their patience is older than our fears, older than the echoes of our voices that fade through their valleys.",
        date: "January 13, 2025",
        readTime: "10 min read",
        author: "John Doe",
        imgAuthor: "/assets/imgs/template/author/author-12.webp",
        img: "/assets/imgs/page/img-153.webp",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-6 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-140.webp" alt="foks" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Science</h1>
                                </li>
                                <li>
                                    <p className="fs-7 text-700 m-0 mt-2 fw-medium">Explore the stories, values, and symbols that shape human identity through the lens of culture.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 ms-auto col-md-6 col-12">
                        <form action="#" className="mt-2">
                            <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-pill overflow-hidden">
                                <div className="icon size-16 ps-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.125 4.875C1.125 2.80394 2.80394 1.125 4.875 1.125C6.94606 1.125 8.625 2.80394 8.625 4.875C8.625 6.94606 6.94606 8.625 4.875 8.625C2.80394 8.625 1.125 6.94606 1.125 4.875ZM4.875 0C2.18261 0 0 2.18261 0 4.875C0 7.56742 2.18261 9.75 4.875 9.75C6.01852 9.75 7.07008 9.35625 7.90147 8.697L10.4773 11.2727L10.875 11.6705L11.6705 10.875L11.2727 10.4773L8.697 7.90147C9.35625 7.07008 9.75 6.01852 9.75 4.875C9.75 2.18261 7.56742 0 4.875 0Z" fill="#7D7D7D"></path>
                                    </svg>
                                </div>
                                <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row g-5 pt-4">
                    <div className="col-lg-8 col-12">
                        <Section1Interactive blogCards={blogCardsData} />
                    </div>
                    <div className="col-lg-4">
                        <SideBar displayFlashNews={true} displayTopAuthors={true} displayFollowUs={true} displayTrending={true} displayTrendingTopics={false} displayAds={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}
