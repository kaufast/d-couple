import Image from "next/image";
import Link from "next/link";
import MainMenu from "@/components/layout/MainMenu";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";
import Offcanvas from "@/components/layout/Offcanvas";
import HeaderWrapper from "./HeaderWrapper";
import NavbarWrapper from "./NavbarWrapper";
import HeaderSearchButton from "./HeaderSearchButton";
import HeaderNavbarToggler from "./HeaderNavbarToggler";
import Topbar from "./Topbar";

export default function Header2Server() {
    return (
        <HeaderWrapper>
            <Topbar />
            <header>
                <div className="position-relative">
                    <NavbarWrapper>
                        <div className="container d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-5">
                                <Link className="navbar-brand d-flex align-items-center gap-1" href="/">
                                    <Image className="dark-mode-invert" src="/assets/imgs/template/logo/favicon.svg" width={16} height={16} alt="Logo" priority={true} />
                                    <strong className="fs-5 text-nowrap">Foks.</strong>
                                </Link>
                                <div className="navbar-collapse d-none d-lg-block" id="navbarNav">
                                    <MainMenu />
                                </div>
                            </div>
                            <div className="group-btn-right d-flex align-items-center">
                                <HeaderSearchButton />
                                <div className="size-28 rounded-circle border-300 bg-card position-relative">
                                    <div className="dark-light-mode position-absolute top-50 start-50 translate-middle">
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                                <Link href="/page-contact" className="btn btn-dark d-none d-md-flex">
                                    <span className="text-nowrap">Contact</span>
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
                                </Link>
                                <HeaderNavbarToggler />
                            </div>
                        </div>
                    </NavbarWrapper>
                </div>
            </header>
            <Offcanvas />
        </HeaderWrapper>
    );
}
