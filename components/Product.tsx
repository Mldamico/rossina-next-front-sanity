import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductStyle } from "./styles/ProductStyle";
import { Producto } from "../types/generated-queries";
import { urlFor } from "../lib/sanity";

export const Product = ({ product }: { product: Producto }) => {
  return (
    <>
      <ProductStyle>
        <Link href={`/producto/${product.slug.current}`}>
          <a>
            <div className="container">
              <Image
                src={urlFor(product?.mainImage).url()}
                alt={product?.nombre}
                height={600}
                width={400}
              />
              <div className="overlay"></div>
              <button type="button" className="btn-more">
                Ver mas
              </button>
            </div>
            <p>{product?.nombre}</p>
            <p>${product?.precio}</p>
          </a>
        </Link>
      </ProductStyle>
    </>
  );
};
