import styled from "styled-components";

export const HeaderStyles = styled.header`
  background-color: var(--red);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 1.2rem;
  button {
    border: none;
    background-color: var(--red);
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
  }

  h1 {
    margin: 0;
    font-size: 6rem;
    font-family: "Oregano", cursive;
    text-align: center;
  }

  -webkit-box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    font-size: 1rem;

    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 500px) {
    font-size: 1rem;

    h1 {
      font-size: 3rem;
    }
  }
`;
