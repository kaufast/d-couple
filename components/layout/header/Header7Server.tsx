import Link from "next/link";
import Image from "next/image";
import MainMenu from "@/components/layout/MainMenu";
import OffcanvasServer from "@/components/layout/OffcanvasServer";
import HeaderWrapper from "./HeaderWrapper";
import NavbarWrapper from "./NavbarWrapper";
import HeaderSearchButton from "./HeaderSearchButton";
import HeaderNavbarToggler from "./HeaderNavbarToggler";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";

export default function Header7Server() {
    return (
        <HeaderWrapper>
            <header>
                <NavbarWrapper>
                    <div className="container">
                        <div className="header d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <Link className="navbar-brand d-flex align-items-center gap-1" href="/">
                                    <Image className="dark-mode-invert" src="/assets/imgs/template/logo/favicon.svg" width={24} height={24} alt="Logo" />
                                    <strong className="fs-5 text-nowrap">Foks.</strong>
                                </Link>
                            </div>
                            <div className="navbar-collapse d-none d-lg-block" id="navbarNav">
                                <MainMenu />
                            </div>
                            <div className="group-btn-right d-flex align-items-center">
                                <HeaderSearchButton />
                                <div className="size-28 rounded-circle position-relative">
                                    <div className="dark-light-mode position-absolute top-50 start-50 translate-middle">
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                                <HeaderNavbarToggler />
                            </div>
                        </div>
                    </div>
                </NavbarWrapper>
            </header>
            <OffcanvasServer />
        </HeaderWrapper>
    );
}
