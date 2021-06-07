import styled from "styled-components";
export const StyledFooter = styled.footer`
  background: var(--red);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #000;
  font-size: 1rem;
  font-size: 1.3rem;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;

    h3 {
      margin: 0.5rem;
      font-size: 1.5rem;
    }

    a {
      color: #fff;
      padding-left: 1rem;
      transition: color 0.5s;
    }
    a:hover {
      color: var(--black);
    }
    p {
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .flex {
      align-items: center;
    }
  }
`;
