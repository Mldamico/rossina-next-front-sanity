import React from "react";
import styled from "styled-components";
import Image from "next/image";
const GalleryStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-auto-rows: 200px 300px;
  grid-gap: 10px;
  grid-auto-flow: dense;
  width: 90%;
  margin: 0 auto;
  .gallery-item {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .gallery-item .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .gallery-item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

  .w-1 {
    grid-column: span 1;
  }
  .w-2 {
    grid-column: span 2;
  }
  .w-3 {
    grid-column: span 3;
  }
  .w-4 {
    grid-column: span 4;
  }
  .w-5 {
    grid-column: span 5;
  }
  .w-6 {
    grid-column: span 6;
  }

  .h-1 {
    grid-row: span 1;
  }
  .h-2 {
    grid-row: span 2;
  }
  .h-3 {
    grid-row: span 3;
  }
  .h-4 {
    grid-row: span 4;
  }
  .h-5 {
    grid-row: span 5;
  }
  .h-6 {
    grid-row: span 6;
  }

  img {
    -webkit-filter: brightness(100%);
  }
  .gallery-item .text {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 25px;
    pointer-events: none;
    z-index: 4;
  }

  img:hover {
    -webkit-filter: brightness(50%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
  @media screen and (max-width: 500px) {
    .container {
      grid-template-columns: repeat(1, 1fr);
    }
    .w-1,
    .w-2,
    .w-3,
    .w-4,
    .w-5,
    .w-6 {
      grid-column: span 1;
    }
  }
`;

export const GridGallery = () => {
  return (
    <GalleryStyles>
      <div className="gallery-container w-1 h-2">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/pijamas.png" alt="Pijamas" />
          </div>
          <div className="text">Pijamas</div>
        </div>
      </div>

      <div className="gallery-container w-1 h-4">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/maternal.jpeg" alt="Maternal" />
          </div>
          <div className="text">Maternal</div>
        </div>
      </div>

      <div className="gallery-container h-2">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/remerones.png" alt="Remerones" />
          </div>
          <div className="text">Remerones</div>
        </div>
      </div>

      <div className="gallery-container h-3">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/camisones.png" alt="Camisones" />
          </div>
          <div className="text">Camisones</div>
        </div>
      </div>

      <div className="gallery-container h-2">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/ropainterior.jpeg" alt="Ropa Interior" />
          </div>
          <div className="text">Ropa Interior</div>
        </div>
      </div>

      <div className="gallery-container h-2">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/hombres.jpeg" alt="Hombres" />
          </div>
          <div className="text">Hombres</div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-item">
          <div className="image">
            <img src="/assets/logo.png" alt="Logo Local" />
          </div>
          <div className="text">Contacto</div>
        </div>
      </div>
      <div className="gallery-container w-4 h-1"></div>
    </GalleryStyles>
  );
};
