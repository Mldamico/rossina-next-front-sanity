import React from "react";
import { Nav } from "./Nav";
import Link from "next/link";
import { HeaderStyles } from "./styles/HeaderStyles";
import { Search } from "./Search";

export const Header = () => {
  return (
    <>
      <HeaderStyles>
        <h1>
          <Link href="/">Lenceria Rossina</Link>
        </h1>
        <Nav />
        <Search />
      </HeaderStyles>
    </>
  );
};
