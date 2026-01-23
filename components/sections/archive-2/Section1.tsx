import Image from "next/image";
import Section1Interactive from "./Section1Interactive";

const blogCardsData = [
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-123.webp",
        category: "World",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-8.webp",
        author: "Zain",
        readTime: "6 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-124.webp",
        category: "Entertainment",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Kaen",
        readTime: "5 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-125.webp",
        category: "Technology",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        readTime: "4 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-126.webp",
        category: "Science",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Kaen",
        readTime: "7 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-127.webp",
        category: "Health",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Tair",
        readTime: "5 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-128.webp",
        category: "Travel",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        readTime: "4 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-129.webp",
        category: "Food",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        readTime: "3 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-130.webp",
        category: "Fashion",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Sera",
        readTime: "5 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-131.webp",
        category: "Technology",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-1.webp",
        author: "Zain",
        readTime: "4 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-132.webp",
        category: "Science",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "Kaen",
        readTime: "7 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-133.webp",
        category: "Health",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "Tair",
        readTime: "5 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-134.webp",
        category: "Travel",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "Arin",
        readTime: "4 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-135.webp",
        category: "Food",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "Lior",
        readTime: "3 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-136.webp",
        category: "Fashion",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "Kaen",
        readTime: "5 mins read",
        date: "Jun 13, 2025",
    },
    {
        classList: "col-lg-4 col-md-6 col-12",
        classCard: "p-0",
        classBody: "p-3",
        classImg: "",
        linkPost: "/single-1",
        linkCategory: "/archive-1",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-137.webp",
        category: "Technology",
        title: "The invisible rhythm behind good UI",
        description: "Every drop speaks of distance and return. Rain is the world remembering itself.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "Sera",
        readTime: "4 mins read",
        date: "Jun 13, 2025",
    },
];

export default function Section1() {
    return (
        <section className="sec-1-archive-2 pb-80 overflow-hidden">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6 col-12">
                        <div className="d-flex align-items-center gap-3 pt-4">
                            <div className="d-inline-flex">
                                <div className="author-image avatar avatar-80 rounded-6 overflow-hidden">
                                    <Image className="cover-image" src="/assets/imgs/page/img-1.webp" alt="foks" width={80} height={80} />
                                </div>
                            </div>
                            <ul className="list-unstyled gap-4 text-600 m-0 ps-0">
                                <li>
                                    <h1 className="mb-0 h4">Design</h1>
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
                <Section1Interactive blogCards={blogCardsData} />
            </div>
        </section>
    );
}
