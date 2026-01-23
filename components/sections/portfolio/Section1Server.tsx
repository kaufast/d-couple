import Section1Interactive from "./Section1Interactive";

interface PortfolioCard {
    category: string;
    tag: string;
    date: string;
    title: string;
    description: string;
    client: string;
    timeline: string;
    budget: string;
    img: string;
}

const portfolioData: PortfolioCard[] = [
    {
        category: "Design",
        tag: "Residential",
        date: "Jun 13, 2025",
        title: "Terraview Modern Residence Concept",
        description: "A contemporary residential concept blending open-space living with natural light optimization and sustainable material selections.",
        client: "Orion Housing",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$4,500",
        img: "/assets/imgs/page/img-170.webp",
    },
    {
        category: "Branding",
        tag: "Architecture",
        date: "Jun 13, 2025",
        title: "Arcadia Urban Landscape Renewal",
        description: "A large-scale landscape revitalization project focused on green public spaces, pedestrian comfort, and long-term ecological resilience.",
        client: "Arcadia City Council",
        timeline: "Sep 2023 – Jan 2024",
        budget: "$32,000",
        img: "/assets/imgs/page/img-171.webp",
    },
    {
        category: "Content",
        tag: "Commercial",
        date: "Jun 13, 2025",
        title: "Solace Boutique Interior Makeover",
        description: "A warm, minimalist interior redesign enhancing product display, customer flow, and brand atmosphere through curated textures and lighting.",
        client: "Solace Boutique & Co.",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$4,500",
        img: "/assets/imgs/page/img-172.webp",
    },
    {
        category: "Content",
        tag: "Architecture",
        date: "Jun 13, 2025",
        title: "Zenith Pavilion Exhibition Space",
        description: "A modular exhibition pavilion concept emphasizing spatial flexibility, lightweight structures, and immersive visual storytelling.",
        client: "Orion Housing",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$21,000",
        img: "/assets/imgs/page/img-173.webp",
    },
    {
        category: "Branding",
        tag: "Residential",
        date: "Jun 13, 2025",
        title: "Terraview Modern Residence Concept",
        description: "A contemporary residential concept blending open-space living with natural light optimization and sustainable material selections.",
        client: "Orion Housing",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$4,500",
        img: "/assets/imgs/page/img-170.webp",
    },
    {
        category: "Marketing",
        tag: "Commercial",
        date: "Jun 13, 2025",
        title: "Solace Boutique Interior Makeover",
        description: "A warm, minimalist interior redesign enhancing product display, customer flow, and brand atmosphere through curated textures and lighting.",
        client: "Solace Boutique & Co.",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$4,500",
        img: "/assets/imgs/page/img-172.webp",
    },
    {
        category: "Design",
        tag: "Architecture",
        date: "Jun 13, 2025",
        title: "Zenith Pavilion Exhibition Space",
        description: "A modular exhibition pavilion concept emphasizing spatial flexibility, lightweight structures, and immersive visual storytelling.",
        client: "Orion Housing",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$21,000",
        img: "/assets/imgs/page/img-173.webp",
    },
    {
        category: "Marketing",
        tag: "Architecture",
        date: "Jun 13, 2025",
        title: "Arcadia Urban Landscape Renewal",
        description: "A large-scale landscape revitalization project focused on green public spaces, pedestrian comfort, and long-term ecological resilience.",
        client: "Arcadia City Council",
        timeline: "Sep 2023 – Jan 2024",
        budget: "$32,000",
        img: "/assets/imgs/page/img-171.webp",
    },
    {
        category: "Branding",
        tag: "Commercial",
        date: "Jun 13, 2025",
        title: "Haven Eco-Living Community Masterplan",
        description: "A sustainable community masterplan prioritizing green mobility, renewable energy integration, and harmonious residential zoning.",
        client: "Haven Development Group",
        timeline: "Jun 2023 – Sep 2023",
        budget: "$4,500",
        img: "/assets/imgs/page/img-174.webp",
    },
];

export default function Section1Server() {
    return (
        <section className="sec-1-portfolio pb-80">
            <div className="container">
                <div className="row align-items-end">
                    <Section1Interactive portfolioData={portfolioData} />
                </div>
            </div>
        </section>
    );
}

