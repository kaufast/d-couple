"use client";
import { createContext, useContext, useState } from "react";
import CardBlog5 from "@/components/cards/CardBlog5";

interface Section2ContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    highlightData: any;
    trendingData: any;
}

const Section2Context = createContext<Section2ContextType | undefined>(undefined);

export function useSection2Context() {
    const context = useContext(Section2Context);
    if (!context) {
        throw new Error("useSection2Context must be used within Section2Provider");
    }
    return context;
}

interface Section2ProviderProps {
    highlightData: any;
    trendingData: any;
    children: React.ReactNode;
}

export function Section2Provider({ highlightData, trendingData, children }: Section2ProviderProps) {
    const [activeTab, setActiveTab] = useState("tab1");

    return <Section2Context.Provider value={{ activeTab, setActiveTab, highlightData, trendingData }}>{children}</Section2Context.Provider>;
}

export function Section2Tabs() {
    const { activeTab, setActiveTab } = useSection2Context();

    const tabs = [
        {
            id: "tab1",
            title: "# Highlight",
            navItemClassName: "",
            linkClassName: "pb-2",
        },
        {
            id: "tab2",
            title: "# Trending",
            navItemClassName: "mx-lg-4 mx-md-3 mx-2",
            linkClassName: "pb-2",
        },
    ];

    return (
        <>
            {tabs.map((tab) => (
                <li key={tab.id} className={`nav-item ${tab.navItemClassName || ""}`}>
                    <h6 className="mb-0">
                        <a
                            href={`#${tab.id}`}
                            className={`nav-link ${tab.linkClassName || ""} ${activeTab === tab.id ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab.id);
                            }}
                        >
                            {tab.title}
                        </a>
                    </h6>
                </li>
            ))}
        </>
    );
}

export function Section2Content() {
    const { activeTab, highlightData, trendingData } = useSection2Context();

    const tabs = [
        {
            id: "tab1",
            content: (
                <div className="content">
                    <div className="container">
                        <div className="row g-3 mt-3">
                            <CardBlog5 card={highlightData.featured} idx={0} />
                            <div className="col-lg-7">
                                <div className="row g-3">
                                    {highlightData.row1.map((card: any, idx: number) => (
                                        <CardBlog5 key={idx} card={card} idx={idx} />
                                    ))}
                                </div>
                            </div>
                            {highlightData.row2.map((card: any, idx: number) => (
                                <CardBlog5 key={idx} card={card} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "tab2",
            content: (
                <div className="content">
                    <div className="container">
                        <div className="row g-3 mt-3">
                            <CardBlog5 card={trendingData.featured} idx={0} />
                            <div className="col-lg-7">
                                <div className="row g-3">
                                    {trendingData.row1.map((card: any, idx: number) => (
                                        <CardBlog5 key={idx} card={card} idx={idx} />
                                    ))}
                                    <div className="col-lg-6"></div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row g-3">
                                    {trendingData.row2.map((card: any, idx: number) => (
                                        <CardBlog5 key={idx} card={card} idx={idx} />
                                    ))}
                                </div>
                            </div>
                            <CardBlog5 card={trendingData.featured2} idx={0} />
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="tab-content">
            {tabs.map((tab) => (
                <div key={tab.id} id={tab.id} className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}>
                    {tab.content}
                </div>
            ))}
        </div>
    );
}

interface Section2InteractiveProps {
    highlightData: any;
    trendingData: any;
}

export default function Section2Interactive({ highlightData, trendingData }: Section2InteractiveProps) {
    return (
        <Section2Provider highlightData={highlightData} trendingData={trendingData}>
            <Section2Tabs />
            <Section2Content />
        </Section2Provider>
    );
}
