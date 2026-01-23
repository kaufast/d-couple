"use client";

import { useHeaderContext } from "./HeaderContext";
import SearchButton from "./SearchButton";

export default function HeaderSearchButton() {
    const { handleSearchClick } = useHeaderContext();
    return <SearchButton onClick={handleSearchClick} />;
}

