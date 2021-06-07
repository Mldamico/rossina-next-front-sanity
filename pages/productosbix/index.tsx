import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { productsPerPage } from "../../config";
import { Producto } from "../../types/generated-queries";
import { sanityClient } from "../../lib/sanity.server";
import {
  ProductPageStyles,
  ProductsContainerStyles,
  ProductsStyles,
} from "../../styles/ProductsStyles";
import Pagination from "../../components/Pagination";
import { Product } from "../../components/Product";
import {
  allProductsQuery,
  countsTotalProducts,
} from "../../queries/allProductos";
import { SEO } from "../../components/SEO";

const ProductosPage = ({
  data,
  count,
  page,
  tipo = "productos",
}: {
  data: Producto[];
  count: number;
  page: number;
  tipo: string;
}) => {
  return (
    <>
      <SEO
        title={`Productos Pagina ${page} | Lenceria Rossina`}
        description="Productos de la Lenceria Rossina"
      />
      <ProductPageStyles>
        <Sidebar tipo={tipo} />
        <ProductsContainerStyles>
          <Pagination base={tipo} total={count} />
          <ProductsStyles>
            {data?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </ProductsStyles>
        </ProductsContainerStyles>
      </ProductPageStyles>
    </>
  );
};
export const getStaticProps = async (context) => {
  const page = +context?.params?.page || 1;
  const skip = (page - 1) * productsPerPage;

  const data = await sanityClient.fetch(allProductsQuery, {
    skip,
    offset: productsPerPage,
  });

  //Counts the amount of products for pagination
  const count = await sanityClient.fetch(countsTotalProducts);

  if (!data) {
    return {
      props: {
        data: [],
        count: 0,
        page,
      },
    };
  } else {
    return {
      props: {
        data,
        count,
        page,
      },
    };
  }
};

// export const getStaticPaths = async (context) => {
//   const countsQuery = `
//     query Counts {
//       counts: allProducto{
//         nombre
//       }
//     }
//     `;

//   const data = await getSanityContent({
//     query: countsQuery,
//   });
//   console.log(data.counts);

//   const paths = Array.from({
//     length: Math.ceil(data?.counts?.length / productsPerPage),
//   }).map((_, i) => ({
//     params: { page: (i + 1).toString(), productos: "productos" },
//   }));
//   console.log(paths);
//   return { paths, fallback: false };
// };

export default ProductosPage;
