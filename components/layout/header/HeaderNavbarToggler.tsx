"use client";

import { useHeaderContext } from "./HeaderContext";
import NavbarToggler from "./NavbarToggler";

export default function HeaderNavbarToggler() {
    const { handleNavbarTogglerClick } = useHeaderContext();
    return <NavbarToggler onClick={handleNavbarTogglerClick} />;
}

