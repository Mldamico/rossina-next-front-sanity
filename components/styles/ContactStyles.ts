import styled from "styled-components";

export const ContactStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 5rem 10rem;
  .map {
    height: 400px;
    width: 400px;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
  }
  h2,
  h3 {
    text-align: center;
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 500px) {
    margin: 2rem 0;
    justify-items: center;
    .map {
      height: 250px;
      width: 350px;
    }
  }
`;
