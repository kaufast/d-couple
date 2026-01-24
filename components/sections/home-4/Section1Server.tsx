import CardBlog10 from "@/components/cards/CardBlog10";
import CardBlog8 from "@/components/cards/CardBlog8";
import StrategicSidebar from "@/components/elements/StrategicSidebar";
import SwiperDynamicServer from "@/components/shared/SwiperDynamicServer";
import Section1Interactive from "./Section1Interactive";

const sliderData = [
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/reports/google-antitrust-ruling",
        linkCategory: "/category/oversight",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-9.webp",
        title: "Google Loses EU Antitrust Appeal: €4.3B Fine Upheld by European Court",
        date: "Jan 23, 2026",
        readTime: "8 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/reports/gaia-x-milestone",
        linkCategory: "/category/tech-sovereignty",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-10.webp",
        title: "GAIA-X Cloud Federation Goes Live: 12 Member States Launch Sovereign Infrastructure",
        date: "Jan 22, 2026",
        readTime: "10 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/reports/payment-processor-diversification",
        linkCategory: "/category/asset-mobility",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-11.webp",
        title: "Asset Protection: Why EU Businesses Are Diversifying Payment Processor Risk",
        date: "Jan 21, 2026",
        readTime: "9 min read",
    },
    {
        classList: "swiper-slide",
        classCard: "flex-row-reverse",
        linkPost: "/reports/qwant-search-growth",
        linkCategory: "/category/privacy-tech",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-10.webp",
        title: "Qwant Search Engine Reaches 10M Daily Users: EU Privacy Alternative Gains Traction",
        date: "Jan 20, 2026",
        readTime: "7 min read",
    },
];

const featuredCardData = {
    classList: "col-12",
    classCard: "",
    linkPost: "/reports/logistics-monopolies-blueprint",
    linkCategory: "/category/logistics",
    linkAuthor: "/page-author",
    category: "Strategic Blueprint",
    title: "The Blueprint for Regional Autonomy: Decoupling from Logistics Monopolies",
    description: "EU-based logistics cooperatives leverage peer-to-peer data mesh technology to bypass Amazon and DHL monopolies, returning economic weight to local stakeholders. Strategic analysis of market alternatives, legal frameworks, and implementation roadmap for sovereign supply chain infrastructure.",
    date: "January 24, 2026",
    readTime: "12 min read",
    author: "d-couple Research",
    imgAuthor: "/assets/imgs/template/author/author-12.webp",
    img: "/assets/imgs/page/img-47.webp",
};

const latestNewsData = [
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/eu-logistics-mesh",
        linkCategory: "/category/logistics",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-48.webp",
        category: "Growth Milestone",
        title: "Sovereign Logistics: EU Cooperative Network Reaches 3,200 Business Partners",
        description: "Belgium-based logistics mesh bypasses Amazon fulfillment infrastructure, offering GDPR-compliant warehousing and regional data sovereignty. Recommended Action: Assess migration timeline for EU sellers.",
        imgAuthor: "/assets/imgs/template/author/author-5.webp",
        author: "d-couple Research",
        date: "Jan 22, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/eu-asset-frameworks",
        linkCategory: "/category/asset-mobility",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-49.webp",
        category: "Mobility Protocol",
        title: "Asset Preservation: Updated Legal Frameworks for Cross-Border EU Transfers",
        description: "New CRS compliance structures allow strategic relocation of intellectual property and liquid assets within EU jurisdictions without triggering automatic exchange protocols. Recommended Action: Consult tax counsel for Q1 2026 planning.",
        imgAuthor: "/assets/imgs/template/author/author-6.webp",
        author: "d-couple Research",
        date: "Jan 21, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/meta-privacy-violations",
        linkCategory: "/category/oversight",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-50.webp",
        category: "Oversight Alert",
        title: "Meta Fails GDPR Audit: €180M Fine for Unauthorized Data Processing in Ireland",
        description: "Irish DPC confirms Meta transferred EU user data to US servers without valid legal mechanism, violating Schrems II ruling. Accountability Score drops to 34/100. Recommended Action: Review data processing agreements with Meta platforms.",
        imgAuthor: "/assets/imgs/template/author/author-7.webp",
        author: "d-couple Research",
        date: "Jan 20, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/sovereign-tech-fund",
        linkCategory: "/category/eu-funding",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Growth Milestone",
        title: "EU Sovereign Tech Fund Allocates €420M for Decentralized Cloud Infrastructure",
        description: "GAIA-X initiative receives largest single funding round to develop EU-only cloud alternatives to AWS, Azure, and Google Cloud. Priority given to open-source protocols. Recommended Action: Monitor RFP announcements for eligible projects.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "d-couple Research",
        date: "Jan 19, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/amazon-warehouse-violations",
        linkCategory: "/category/compliance",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Oversight Alert",
        title: "Amazon Poland Warehouse: 14 Labor Code Violations Confirmed by Ministry Inspection",
        description: "Polish labor authorities document unsafe working conditions, unpaid overtime, and surveillance overreach at Poznań fulfillment center. Accountability Score adjusted to 38/100. Recommended Action: Evaluate alternative EU fulfillment providers.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "d-couple Research",
        date: "Jan 18, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/regional-marketplace-growth",
        linkCategory: "/category/regional-markets",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-53.webp",
        category: "Verified Intel",
        title: "Bol.com Expands Regional Reach: 28% YoY Growth in Benelux E-Commerce Market Share",
        description: "Netherlands-based marketplace gains ground against Amazon through local payment integration and Dutch-language customer service. Compliance Score: 72/100. Recommended Action: Consider multi-platform strategy for EU market access.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "d-couple Research",
        date: "Jan 17, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/data-sovereignty-milestone",
        linkCategory: "/category/privacy-tech",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-51.webp",
        category: "Growth Milestone",
        title: "Data Sovereignty: German Federal Cloud Achieves Full Operational Independence",
        description: "German government completes migration of all federal data to sovereign infrastructure, eliminating reliance on US-based hyperscalers. Zero cross-border data transfers confirmed. Recommended Action: Review data residency requirements for public sector contracts.",
        imgAuthor: "/assets/imgs/template/author/author-4.webp",
        author: "d-couple Research",
        date: "Jan 16, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/supply-chain-decoupling",
        linkCategory: "/category/supply-chain",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-52.webp",
        category: "Verified Intel",
        title: "Supply Chain Decoupling: Italian Manufacturing Consortium Launches Direct-to-Retailer Network",
        description: "Northern Italy textile producers bypass Alibaba wholesale channels through cooperative blockchain ledger, reducing intermediary fees by 34%. Recommended Action: Assess direct sourcing opportunities for EU-manufactured goods.",
        imgAuthor: "/assets/imgs/template/author/author-3.webp",
        author: "d-couple Research",
        date: "Jan 15, 2026",
    },
    {
        classList: "",
        classImg: "",
        linkPost: "/reports/estonia-digital-residency",
        linkCategory: "/category/legal-frameworks",
        linkAuthor: "/page-author",
        img: "/assets/imgs/page/img-53.webp",
        category: "Mobility Protocol",
        title: "Legal Mobility: Estonia Expands E-Residency Banking Access for Non-EU Citizens",
        description: "Estonian government approves new banking partnerships allowing e-residents to open EUR accounts remotely without physical presence requirement. Processing time reduced to 14 days. Recommended Action: Evaluate jurisdictional diversification for asset protection.",
        imgAuthor: "/assets/imgs/template/author/author-2.webp",
        author: "d-couple Research",
        date: "Jan 14, 2026",
    },
];

export default function Section1Server() {
    return (
        <section className="sec-1-home-4 pt-2 pb-60 overflow-hidden">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12">
                        <div className="swiper slider-3">
                            <SwiperDynamicServer className="swiper-wrapper" slidesPerView={1} spaceBetween={24} loop={true} autoplay={{ delay: 3000 }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                                {sliderData.map((card, idx) => (
                                    <div className="swiper-slide" key={idx}>
                                        <CardBlog10 card={card} idx={idx} />
                                    </div>
                                ))}
                            </SwiperDynamicServer>
                        </div>
                    </div>
                </div>
                <div className="row g-5 pt-4">
                    <div className="col-lg-8 col-12">
                        <CardBlog8 card={featuredCardData} idx={0} />
                        <div className="col-12 pt-4 pb-3">
                            <div className="block-header">
                                <h6 className="mb-0"># Intelligence Ledger</h6>
                            </div>
                        </div>
                        <Section1Interactive newsData={latestNewsData} />
                    </div>
                    <div className="col-lg-4">
                        <StrategicSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
