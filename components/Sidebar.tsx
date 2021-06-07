import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const SidebarStyles = styled.aside`
  .sidebar-path {
    margin-left: 2rem;
  }

  .sidebar-link {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;
export const Sidebar = ({ tipo }: { tipo: string }) => {
  const router = useRouter();

  return (
    <SidebarStyles>
      <div className="sidebar-path">
        <Link href="/">Home</Link> / {tipo.toUpperCase()}
      </div>
      <h3>PRODUCTOS</h3>
      <div className="sidebar-link">
        <Link href="/productos">VER TODO</Link>
        <Link href="/corseteria">CORSETERIA</Link>
        <Link href="/lenceria">LENCERIA</Link>
        <Link href="/productos">MATERNAL</Link>
        <Link href="/productos">HOMBRES</Link>
        <Link href="/productos">MEDIAS</Link>
      </div>
    </SidebarStyles>
  );
};
