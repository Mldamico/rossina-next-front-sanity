import styled from "styled-components";

export const ProductStyle = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
    }
  }
  .container {
    position: relative;
    height: 600px;
    width: 400px;
  }
  img {
    object-fit: cover;
    /* position: absolute; */

    /* left: 0; */
  }

  .container:hover .btn-more {
    opacity: 1;
  }
  .container:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
  }

  .btn-more {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.35s ease;
    padding: 1.5rem 3rem;
    border-radius: 3rem;
    border-width: 0px;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    .overlay {
      width: 30rem;
    }
    img {
      width: 30rem;
    }
    .container {
      width: 30rem;
    }
  }
`;
