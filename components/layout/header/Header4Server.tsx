import Link from "next/link";
import Image from "next/image";
import MainMenu from "@/components/layout/MainMenu";
import Topbar2 from "./Topbar2";
import OffcanvasServer from "@/components/layout/OffcanvasServer";
import HeaderWrapper from "./HeaderWrapper";
import NavbarWrapper from "./NavbarWrapper";

export default function Header4Server() {
    return (
        <HeaderWrapper>
            {/* Navbar 4 */}
            <header>
                <NavbarWrapper className="flex-column style-4">
                    <div className="container-fluid w-100">
                        <div className="row">
                            <div className="col-12">
                                <Topbar2 />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center navbar-brand-container pt-4">
                                    <Link className="navbar-brand d-flex align-items-center justify-content-center gap-1" href="/">
                                        <Image className="dark-mode-invert" src="/assets/imgs/template/logo/favicon.svg" width={24} height={24} alt="Logo" priority={true} />
                                        <strong className="fs-5 text-nowrap">dcouple.</strong>
                                    </Link>
                                    <p className="fs-8">Thoughts, stories and ideas.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="navbar-collapse d-none d-lg-block" id="navbarNav">
                                    <MainMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </NavbarWrapper>
            </header>

            {/* Offcanvas sidebar */}
            <OffcanvasServer />
        </HeaderWrapper>
    );
}
