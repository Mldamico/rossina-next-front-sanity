import React, { useState } from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import dynamic from "next/dynamic";
import {
  Dots,
  arrowsPlugin,
  autoplayPlugin,
  infinitePlugin,
} from "@brainhubeu/react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Producto } from "../types/generated-queries";
import { urlFor } from "../lib/sanity";
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

export const ImageCarousel = ({ product }: { product: Producto }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const onChange = (value) => {
    setSelectedImage(value);
  };
  return (
    <div className="image-container">
      <Carousel
        animationSpeed={2000}
        plugins={[
          {
            resolve: autoplayPlugin,
            options: {
              interval: 12000,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className="carousel-button">
                  <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" />
                </button>
              ),
              arrowLeftDisabled: (
                <button disabled={true} className="carousel-button">
                  <FontAwesomeIcon icon={faChevronCircleLeft} size="3x" />
                </button>
              ),
              arrowRight: (
                <button className="carousel-button">
                  <FontAwesomeIcon icon={faChevronCircleRight} size="3x" />
                </button>
              ),
              arrowRightDisabled: (
                <button disabled={true} className="carousel-button">
                  <FontAwesomeIcon icon={faChevronCircleRight} size="3x" />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
        ]}
        value={selectedImage}
        onChange={onChange}
      >
        {product?.images?.map((img) => (
          <img
            className="carousel-image"
            src={urlFor(img).url()}
            alt={product.nombre}
            key={img._key}
          />
        ))}
      </Carousel>
      {product?.images?.length > 1 && (
        <Dots
          className="prueba"
          value={selectedImage}
          onChange={onChange}
          thumbnails={[
            ...product.images.map((img, index) => (
              <img
                className="thumbnails-image"
                src={urlFor(img).url()}
                alt={product.nombre}
                key={index}
              />
            )),
          ]}
        />
      )}
    </div>
  );
};
