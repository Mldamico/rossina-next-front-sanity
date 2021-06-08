import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { GridGallery } from "./GridGallery";
const PrincipalStyles = styled.section`
  /* width: 100%; */
  .new-product-container {
    /* margin-top: 20rem; */
    /* height: 50rem; */
  }
  .new-xl {
  }
`;

export const Principal = () => {
  return (
    <PrincipalStyles>
      <Link href="/selu">
        <a>
          <Image
            src="/assets/selu.jpeg"
            alt="Nuevo Lanzamiento Selu"
            className="new-xl"
            objectFit="contain"
            height={500}
            width={1000}
            layout="responsive"
            quality={100}
          />
        </a>
      </Link>

      <GridGallery />
    </PrincipalStyles>
  );
};
