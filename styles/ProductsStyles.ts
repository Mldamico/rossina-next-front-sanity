import styled from "styled-components";
export const ProductPageStyles = styled.div`
  display: grid;
  margin: 5rem;
  grid-template-columns: minmax(150px, 250px) 1fr;
  grid-gap: 3rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
export const ProductsStyles = styled.main`
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
export const ProductsContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
`;
