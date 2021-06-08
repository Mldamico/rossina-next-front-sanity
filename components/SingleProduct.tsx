import React from "react";
import { Producto } from "../types/generated-queries";
import {
  ProductStyles,
  SingleProductContainerStyles,
} from "./styles/SingleProductStyle";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useRouter } from "next/router";
import { ImageCarousel } from "./ImageCarousel";
import { Supreme } from "./styles/Supreme";
export const SingleProduct = ({ product }: { product: Producto }) => {
  const router = useRouter();
  return (
    <SingleProductContainerStyles>
      <div className="path">
        <button className="button-back" onClick={() => router.back()}>
          Volver
        </button>
      </div>
      <ProductStyles>
        {product.images ? (
          <ImageCarousel product={product} />
        ) : (
          <Image
            src={urlFor(product?.mainImage).url()}
            className="main-image"
            alt={product?.nombre}
            height={600}
            width={200}
          />
        )}
        <div className="details">
          <Supreme>
            <h2 style={{ fontSize: "2.5rem" }}>
              {product?.nombre}- Art. {product?.articulo}
            </h2>
          </Supreme>
          <h3>Descripcion:</h3>
          <p>{product?.descripcion}</p>
          <p>
            <span className="span-title">Colores:</span>{" "}
            <span>{product?.colores.join(", ")}.</span>
          </p>

          <p>
            <span className="span-title"> Talles: </span>
            <span>{product?.talles.join(", ")}.</span>
          </p>
          <div style={{ alignSelf: "center" }}>
            <Supreme>${product?.precio}</Supreme>
          </div>

          <div className="mensaje-compra">
            <p>
              Para compras comunicarse a alguno de nuestros numeros de WhatsApp
              o instagram y nos pondremos en contacto a la brevedad.
            </p>
            <p>
              <p>Medios de pago:</p>
              <p>
                - Compras en el local: Efectivo, debito y credito hasta 3 cuotas
                sin recargo.
              </p>
              <p> - Compras con envio: Transferencia y Mercado Pago</p>
            </p>
            <p>
              Formas de envio: Moto mensajeria GBA y CABA. Correo Argentino. El
              precio del producto ni incluye envio. Envios sin cargo: Ramos
              Mejia, Ciudadela, Haedo, Caseros, Santos Lugares, Saenz Peña. Si
              estas cerca de estas zonas consulta si llegamos!
            </p>
          </div>
        </div>
        <div className="main-image-container">
          <Image
            src={urlFor(product?.mainImage).url()}
            className="main-image"
            alt={product?.nombre}
            height={600}
            width={400}
          />
        </div>
      </ProductStyles>
    </SingleProductContainerStyles>
  );
};
