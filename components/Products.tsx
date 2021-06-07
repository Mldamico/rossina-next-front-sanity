import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { useRouter } from "next/router";
import Pagination from "./Pagination";

const ProductsStyles = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 5rem;
  @media (max-width: 500px) {
    grid-template-columns: 300px;
    justify-content: center;
    img {
      width: 30rem;
    }
  }
`;
const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Products = ({ data, count }: { data: any; count: number }) => {
  const router = useRouter();
  const tipo = router.query.tipo as string;
  return (
    <ProductsContainerStyles>
      <Pagination base={tipo} total={count} />
      <ProductsStyles>
        {data?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ProductsStyles>
    </ProductsContainerStyles>
  );
};
