import { groq } from "next-sanity";
export const countsTotalProducts = groq`
  count(*[_type=="producto"])
  `;

export const allProductsQuery = groq`
*[_type == "producto"][$skip...$offset] {
  nombre,
  precio,
  articulo,
  mainImage,
  slug {
    current
  }
}
`;

export const tipoDeProductoQuery = groq`
*[_type == "producto" && tipo match $tipo || marca match $tipo][$skip...$offset]{
  nombre,
  precio,
  articulo,
  mainImage,
  slug {
    current
  }
}
`;

export const countTipoDeProducto = groq`
count(*[_type=="producto" && tipo match $tipo || marca match $tipo])
`;
