import React from "react";
import Link from "next/link";
import { NavigationStyles } from "./styles/NavStyles";

export const Nav = () => {
  return (
    <>
      <NavigationStyles>
        <Link href="/">Home</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/corseteria">Corseteria</Link>
        <Link href="/lenceria">Lenceria</Link>
        <Link href="/contacto">Contacto</Link>
      </NavigationStyles>
    </>
  );
};
