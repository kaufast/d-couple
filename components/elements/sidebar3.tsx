import CardBlog3 from "@/components/cards/CardBlog3";
import SidebarStickyWrapper from "@/components/elements/SidebarStickyWrapper";
import Link from "next/link";
import Image from "next/image";

type SocialIconType = "facebook" | "twitterx" | "instagram" | "youtube";

const renderSocialIcon = (icon: string) => {
    switch (icon as SocialIconType) {
        case "facebook":
            return (
                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z" fill="#171717" />
                </svg>
            );
        case "twitterx":
            return (
                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H5.25L8.98421 5.21053L13.5 0H15.5L9.8895 6.47368L16 15H10.75L7.01579 9.7895L2.5 15H0.5L6.11053 8.52632L0 0ZM11.5204 13.5L2.92043 1.5H4.47957L13.0796 13.5H11.5204Z" fill="#171717" />
                </svg>
            );
        case "instagram":
            return (
                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.94543 0.0265915C3.55568 0.0738296 2.91668 0.206401 2.15918 0.604115C1.81118 0.786211 1.58768 0.95383 1.27343 1.26621C0.557932 1.98012 0.186682 2.85021 0.0539318 4.12335C0.0314318 4.33593 0.0134318 5.36907 0.00443185 6.93935C-0.0188182 10.8792 0.0396818 11.6967 0.415432 12.6491C0.619432 13.1656 0.848932 13.5199 1.24868 13.9336C1.96343 14.6742 2.81543 15.043 4.12043 15.1763C4.66418 15.2327 10.0694 15.2334 10.7204 15.1778C11.4734 15.1138 11.9392 15.0133 12.4529 14.8045C12.9599 14.5988 13.3094 14.3649 13.7174 13.9588C14.4464 13.2327 14.8094 12.3672 14.9407 11.0414C14.9962 10.4891 14.9969 4.99802 14.9422 4.33669C14.8792 3.57173 14.7802 3.09859 14.5747 2.57669C14.3799 2.08073 14.0868 1.6308 13.7135 1.25488C13.3402 0.878951 12.8948 0.58508 12.4049 0.391544C11.8364 0.162972 11.2769 0.0692581 10.2127 0.0243058C9.41993 -0.00921805 5.95118 -0.00769422 4.94543 0.0265915ZM10.1137 1.39573C10.5052 1.41173 10.9709 1.44678 11.1487 1.47345C12.2722 1.64107 13.0334 2.24145 13.3687 3.22431C13.5832 3.85059 13.6132 4.30012 13.6357 7.12526C13.6604 10.3451 13.6117 11.3165 13.3934 11.9626C13.0694 12.9256 12.3569 13.523 11.2964 13.7226C10.7819 13.8194 10.3552 13.8354 7.91018 13.8514C4.63943 13.8727 3.95018 13.8392 3.29018 13.6289C2.28968 13.3104 1.67393 12.5698 1.48043 11.4529C1.38218 10.8883 1.36268 10.2254 1.36193 7.4605C1.36043 4.67269 1.37543 4.22392 1.48268 3.69973C1.65593 2.85173 2.07593 2.22545 2.72918 1.84145C3.05393 1.65021 3.63443 1.48945 4.17968 1.43992C4.89968 1.37364 8.85593 1.34469 10.1137 1.39573ZM11.3332 2.64754C10.7632 2.73745 10.4279 3.40107 10.6844 3.93212C10.8899 4.35573 11.3542 4.54697 11.8027 4.39231C12.0037 4.32297 12.2669 4.05554 12.3352 3.85135C12.384 3.69836 12.3949 3.5355 12.3669 3.37721C12.3389 3.21892 12.2729 3.0701 12.1747 2.94393C12.0697 2.81364 11.7682 2.65593 11.5904 2.6384C11.5046 2.63209 11.4184 2.63516 11.3332 2.64754ZM6.83843 3.76069C6.05674 3.89859 5.33697 4.2811 4.77968 4.85478C4.03793 5.60602 3.65543 6.54392 3.65543 7.6144C3.65543 8.67878 4.03868 9.61973 4.77968 10.3717C5.22893 10.8289 5.68118 11.1138 6.27518 11.3157C6.68993 11.4567 7.04093 11.5138 7.49543 11.5138C8.00059 11.5198 8.50169 11.4217 8.96847 11.2254C9.43525 11.0291 9.858 10.7387 10.2112 10.3717C10.9544 9.61745 11.3354 8.68107 11.3354 7.61135C11.3354 6.55535 10.9522 5.60754 10.2262 4.8685C10.0757 4.71433 9.9151 4.57076 9.74543 4.43878C9.26068 4.09494 8.70776 3.86298 8.12543 3.75916C7.69823 3.70214 7.2655 3.70265 6.83843 3.76069ZM7.99943 5.13135C8.56085 5.24996 9.06488 5.56151 9.42663 6.0135C9.78837 6.4655 9.98572 7.03034 9.98543 7.61288C9.98692 7.94548 9.92353 8.27509 9.79893 8.58267C9.67432 8.89025 9.49096 9.1697 9.25945 9.40489C9.02793 9.64008 8.75285 9.82635 8.45007 9.95294C8.1473 10.0795 7.82284 10.1439 7.49543 10.1424C6.9177 10.1444 6.35736 9.94175 5.91083 9.56935C5.4643 9.19694 5.15952 8.67807 5.04893 8.10202C4.98293 7.76907 5.00243 7.23878 5.09393 6.91726C5.22187 6.47705 5.46329 6.07958 5.79321 5.76599C6.12314 5.4524 6.52957 5.23408 6.97043 5.13364C7.31078 5.07307 7.65883 5.0723 7.99943 5.13135Z"
                        fill="#171717"
                    />
                </svg>
            );
        case "youtube":
            return (
                <svg className="dark-mode-invert" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4695 3.39273C14.0722 3.55407 14.5459 4.02773 14.7073 4.63046C14.9988 5.72183 15 8.00023 15 8.00023C15 8.00023 15 10.2786 14.7073 11.37C14.5459 11.9728 14.0722 12.4464 13.4695 12.6077C12.3782 12.9005 7.99998 12.9005 7.99998 12.9005C7.99998 12.9005 3.62183 12.9005 2.53045 12.6077C1.92773 12.4464 1.45407 11.9728 1.29272 11.37C1 10.2786 1 8.00023 1 8.00023C1 8.00023 1 5.72183 1.29272 4.63046C1.45407 4.02773 1.92773 3.55407 2.53045 3.39273C3.62183 3.10001 7.99998 3.10001 7.99998 3.10001C7.99998 3.10001 12.3782 3.10001 13.4695 3.39273ZM10.2362 8.00046L6.59906 10.1002V5.90068L10.2362 8.00046Z" fill="#171717" />
                </svg>
            );
        default:
            return null;
    }
};

export default function SideBar3({ displayFollowUs = true }: { displayFollowUs?: boolean }) {
    const authorAvatars = [
        { img: "/assets/imgs/template/author/author-1.webp", link: "/page-author", zIndex: "z-1" },
        { img: "/assets/imgs/template/author/author-2.webp", link: "/page-author", zIndex: "z-2" },
        { img: "/assets/imgs/template/author/author-3.webp", link: "/page-author", zIndex: "z-3" },
        { img: "/assets/imgs/template/author/author-4.webp", link: "/page-author", zIndex: "z-4" },
        { img: "/assets/imgs/page/img-60.webp", link: "/page-author", zIndex: "z-5" },
    ];

    const flashNewsData = [
        {
            classList: "pt-0",
            classCard: "",
            linkPost: "/single-1",
            linkCategory: "/archive-1",
            linkAuthor: "/page-author",
            img: "/assets/imgs/page/img-9.webp",
            title: "Time slowly fades where moss grows",
            date: "Jun 13, 2025",
            category: "Lifestyle",
        },
        {
            classList: "",
            classCard: "",
            linkPost: "/single-1",
            linkCategory: "/archive-1",
            linkAuthor: "/page-author",
            img: "/assets/imgs/page/img-10.webp",
            title: "The weight of light in endless fields",
            date: "Jun 13, 2025",
            category: "Lifestyle",
        },
        {
            classList: "",
            classCard: "",
            linkPost: "/single-1",
            linkCategory: "/archive-1",
            linkAuthor: "/page-author",
            img: "/assets/imgs/page/img-11.webp",
            title: "What the fire gently leaves behind",
            date: "Jun 13, 2025",
            category: "Lifestyle",
        },
        {
            classList: "",
            classCard: "",
            linkPost: "/single-1",
            linkCategory: "/archive-1",
            linkAuthor: "/page-author",
            img: "/assets/imgs/page/img-12.webp",
            title: "A meadow quietly built from memory",
            date: "Jun 13, 2025",
            category: "Lifestyle",
        },
        {
            classList: "",
            classCard: "",
            linkPost: "/single-1",
            linkCategory: "/archive-1",
            linkAuthor: "/page-author",
            img: "/assets/imgs/page/img-13.webp",
            title: "How the desert softly dreams of rain",
            date: "Jun 13, 2025",
            category: "Lifestyle",
        },
    ];

    const socialLinks = [
        { icon: "facebook", link: "#", text: "Facebook", number: "12k" },
        { icon: "twitterx", link: "#", text: "Twitter", number: "12k" },
        { icon: "instagram", link: "#", text: "Instagram", number: "12k" },
        { icon: "youtube", link: "#", text: "Youtube", number: "12k" },
    ];

    return (
        <SidebarStickyWrapper topSpacing={50} bottomSpacing={50}>
            <div className="sidebar_right">
                <div className="row">
                    <div className="col-md-6 col-12 col-lg-12">
                        <div className="block-author align-items-center position-relative">
                            {authorAvatars.map((author, idx) => (
                                <div key={idx} className={`avatar avatar-sm rounded-circle overflow-hidden border-2 border-white ${author.zIndex} hover-up`}>
                                    <Link href={author.link}>
                                        <Image src={author.img} alt="foks" width={40} height={40} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <span className="fs-6 text-dark fw-semi-bold">Get weekly doses of creativity and inspiration right in your inbox.</span>
                        <form action="#" className="mt-2">
                            <div className="d-flex align-items-center gap-3 justify-content-center bg-card border-300 p-1 rounded-6 overflow-hidden">
                                <div className="icon size-16 ps-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z" fill="#7D7D7D" />
                                    </svg>
                                </div>
                                <input className="form-control border-0 p-0 ps-2" type="text" placeholder="Your email address" />
                                <button className="btn btn-dark btn-sm" type="submit">
                                    Subscribe
                                    <span className="group-icon">
                                        <span className="group-icon-inner dark-mode-invert">
                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                                            </svg>
                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.5521 1.52598L6.1875 1.16138L5.4583 1.89058L5.8229 2.25518L8.55202 4.98433H1.20312H0.6875V6.01558H1.20312H8.55202L5.8229 8.74474L5.4583 9.10932L6.1875 9.83856L6.5521 9.47391L10.04 5.98609C10.3084 5.7176 10.3084 5.2823 10.04 5.01382L6.5521 1.52598Z" fill="white"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </form>
                        <ul className="ps-3 m-0 mt-3">
                            <li>
                                <span className="fs-8 text-700">No spam emails, just valuable content.</span>
                            </li>
                        </ul>
                    </div>

                    <div className={`col-md-6 col-12 col-lg-12 ${displayFollowUs ? "" : "d-none"}`}>
                        <div className="follow-us pt-4">
                            <span className="fs-8 fw-bold text-uppercase">Follow Us</span>
                            <div className="group-social-icons pt-3">
                                {socialLinks.map((social, idx) => (
                                    <Link key={idx} href={social.link} className="social-item hover-up">
                                        <span className="icon">{renderSocialIcon(social.icon)}</span>
                                        <span className="text">{social.text}</span>
                                        <span className="number">{social.number}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 col-lg-12">
                        <div className="flash-news d-flex flex-column pt-40">
                            <span className="fs-8 fw-bold text-uppercase">Flash news</span>
                            {flashNewsData.map((card, idx) => (
                                <CardBlog3 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SidebarStickyWrapper>
    );
}
