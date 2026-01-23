import BackToTop from "@/components/elements/BackToTopServer";
import Footer1 from "@/components/layout/footer/Footer1";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer3 from "@/components/layout/footer/Footer3";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer5 from "@/components/layout/footer/Footer5";
import Footer6 from "@/components/layout/footer/Footer6";
import Footer7 from "@/components/layout/footer/Footer7";
import Header1 from "@/components/layout/header/Header1Server";
import Header2 from "@/components/layout/header/Header2";
import Header3 from "@/components/layout/header/Header3";
import Header4 from "@/components/layout/header/Header4";
import Header5 from "@/components/layout/header/Header5";
import Header6 from "@/components/layout/header/Header6";
import Header7 from "@/components/layout/header/Header7";
import ServerEffects from "@/components/layout/ServerEffects";

// Header component mapping
const HEADER_COMPONENTS = {
    1: Header1,
    2: Header2,
    3: Header3,
    4: Header4,
    5: Header5,
    6: Header6,
    7: Header7,
} as const;

// Footer component mapping
const FOOTER_COMPONENTS = {
    1: Footer1,
    2: Footer2,
    3: Footer3,
    4: Footer4,
    5: Footer5,
    6: Footer6,
    7: Footer7,
} as const;

// Header component with proper composition
function Header({ style }: { style?: number }) {
    if (!style) {
        return <Header1 />;
    }

    const HeaderComponent = HEADER_COMPONENTS[style as keyof typeof HEADER_COMPONENTS];
    return HeaderComponent ? <HeaderComponent /> : <Header1 />;
}

// Footer component with proper composition
function Footer({ style }: { style?: number }) {
    if (!style) {
        return <Footer1 />;
    }

    const FooterComponent = FOOTER_COMPONENTS[style as keyof typeof FOOTER_COMPONENTS];
    return FooterComponent ? <FooterComponent /> : <Footer1 />;
}

// Main layout interface
interface LayoutProps {
    children?: React.ReactNode;
    headerStyle?: number;
    footerStyle?: number;
}

// Refactored Layout component using composition
export default function Layout({ children, headerStyle, footerStyle }: LayoutProps) {
    return (
        <>
            <ServerEffects />
            <div id="top" />
            <Header style={headerStyle} />
            <main>{children}</main>
            <Footer style={footerStyle} />
            <BackToTop />
        </>
    );
}

// Alternative: Layout with explicit header and footer props
interface LayoutWithComponentsProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}

export function LayoutWithComponents({ children, header = <Header1 />, footer = <Footer1 /> }: LayoutWithComponentsProps) {
    return (
        <>
            <ServerEffects />
            <div id="top" />
            {header}
            <main>{children}</main>
            {footer}
            <BackToTop />
        </>
    );
}

// Layout slots pattern for maximum flexibility
interface LayoutSlotsProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    sidebar?: React.ReactNode;
}

export function LayoutWithSlots({ children, header = <Header1 />, footer = <Footer1 />, sidebar }: LayoutSlotsProps) {
    return (
        <>
            <ServerEffects />
            <div id="top" />
            {header}
            <div className="layout-container">
                {sidebar && <aside className="sidebar">{sidebar}</aside>}
                <main className="layout-main">{children}</main>
            </div>
            {footer}
            <BackToTop />
        </>
    );
}
