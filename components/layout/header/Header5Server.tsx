import Link from "next/link";
import Image from "next/image";
import MainMenu from "@/components/layout/MainMenu";
import OffcanvasServer from "@/components/layout/OffcanvasServer";
import HeaderWrapper from "./HeaderWrapper";
import NavbarWrapper from "./NavbarWrapper";
import HeaderSearchButton from "./HeaderSearchButton";
import HeaderNavbarToggler from "./HeaderNavbarToggler";
import ThemeSwitcher from "@/util/ThemeSwitcherServer";

export default function Header5Server() {
    return (
        <HeaderWrapper>
            <header>
                <NavbarWrapper className="style-5">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="navbar-collapse d-none d-lg-block" id="navbarNav">
                                <MainMenu />
                            </div>
                            <Link className="navbar-brand d-flex align-items-center gap-1 position-lg-absolute" href="/index-5">
                                <Image className="dark-mode-invert" src="/assets/imgs/template/logo/favicon.svg" width={16} height={16} alt="Logo" />
                                <strong className="fs-5 text-nowrap">dcouple.</strong>
                            </Link>
                            <div className="group-btn-right d-flex align-items-center ms-auto">
                                <HeaderSearchButton />
                                <div className="size-28 rounded-circle position-relative">
                                    <div className="dark-light-mode position-absolute top-50 start-50 translate-middle">
                                        <ThemeSwitcher />
                                    </div>
                                </div>
                                <HeaderNavbarToggler />
                            </div>
                        </div>
                        <div className="line-duplicate z-n1"></div>
                    </div>
                </NavbarWrapper>
            </header>
            <OffcanvasServer />
        </HeaderWrapper>
    );
}
