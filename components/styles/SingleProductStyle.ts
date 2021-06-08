import styled from "styled-components";
export const ProductStyles = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 1fr) 1fr;
  justify-content: baseline;
  /* max-width: var(--maxWidth); */
  align-content: center;
  margin: auto;
  margin-bottom: 2rem;

  .mensaje-compra {
    margin: 2rem 0;
    background-color: var(--offWhite);

    border-radius: 1rem;
    padding: 1rem;
    line-height: 2rem;

    p {
      font-size: 1.3rem;
      color: var(--grey);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* align-items: center; */
    height: 100%;
  }

  .main-image-container {
    margin: 2rem;
  }

  .span-title {
    font-size: 2rem;
    font-weight: bold;
  }

  .main-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  .BrainhubCarousel__dots li div {
    padding: 0 1px;
  }

  h2 {
    align-self: center;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  h3,
  p {
    align-self: flex-start;
    margin: 1rem 0;
    font-family: "Old Standard TT", serif;
  }
  p {
    font-size: 1.7rem;
    color: var(--grey);
  }

  .thumbnails-image {
    object-fit: contain;
    height: 10rem;
    width: 5rem;
  }

  .carousel-button {
    background-color: #fff;
    color: var(--red);
    border: none;
  }
  .carousel-button:disabled {
    color: #ccc;
  }

  .carousel-image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .image-container {
    width: 45rem;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr minmax(300px, 1fr);
    .details {
      margin-right: 3rem;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin: 5rem;
    justify-items: center;
    h2 {
      font-size: 2rem;
      margin: 0;
    }
    .details {
      justify-content: center;
      align-items: center;
    }
    button {
      align-self: center;
    }
  }

  @media (max-width: 500px) {
    margin: 5rem 0;
    grid-template-columns: 1fr;
    img {
      height: 30rem;
      width: 20rem;
      object-fit: contain;
    }

    .image-container {
      width: 30rem;
    }
  }
`;

export const SingleProductContainerStyles = styled.div`
  .path {
    margin-top: 5rem;
    margin-left: 7rem;
  }
  .button-back {
    background-color: #fff;
    outline: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
