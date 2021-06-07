import ProductsPage from "./index";
import { sanityClient } from "../../lib/sanity.server";
import { productsPerPage } from "../../config";
import {
  allProductsQuery,
  countsTotalProducts,
  countTipoDeProducto,
  tipoDeProductoQuery,
} from "../../queries/allProductos";

export default ProductsPage;

export const getStaticPaths = async (context) => {
  const tipos = ["Corseteria", "Lenceria", "Selu", "Susurro"];
  const paths = [];
  for (let tipo of tipos) {
    let data;
    if (tipo === "Productos") {
      data = await sanityClient.fetch(countsTotalProducts);
    } else {
      data = await sanityClient.fetch(countTipoDeProducto, { tipo });
    }

    const path = Array.from({
      length: Math.ceil(data / productsPerPage),
    }).map((_, i) => ({
      params: { page: (i + 1).toString(), tipo },
    }));

    paths.push(...path);
  }
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const page = +context?.params?.page || 1;
  const skip = (page - 1) * productsPerPage;
  const tipo = context?.params?.tipo;
  const offset = productsPerPage + skip;

  let data;
  let count;

  if (tipo === "productos") {
    data = await sanityClient.fetch(allProductsQuery, {
      skip,
      offset,
    });
    count = await sanityClient.fetch(countsTotalProducts);
  } else {
    data = await sanityClient.fetch(tipoDeProductoQuery, {
      skip,
      offset,
      tipo,
    });
    count = await sanityClient.fetch(countTipoDeProducto, { tipo });
  }
  if (!data) {
    return {
      props: {
        data: [],
        count: 0,
        tipo,
        page,
      },
    };
  } else {
    return {
      props: {
        data,
        count,
        tipo,
        page,
      },
    };
  }
};

// export const getServerSideProps = async (context) => {
//   const page = +context?.query?.page || 1;
//   const skip = (page - 1) * productsPerPage;
//   const tipo = context?.query?.tipo;
//   const offset = productsPerPage + skip;
//   // const data = await getSanityContent({
//   //   query: productoQuery,
//   //   variables: { tipo, skip: skip, pageSize: productsPerPage },
//   // });
//   const productoQuery = groq`
//   *[_type == "producto" && tipo match $tipo || marca match $tipo][$skip...$offset]
// `;
//   const data = await sanityClient.fetch(productoQuery, {
//     skip,
//     offset,
//     tipo,
//   });
//   const countgroq = groq`
//   count(*[_type=="producto" && tipo match $tipo || marca match $tipo])
//  `;

//   const count = await sanityClient.fetch(countgroq, { tipo });
//   console.log("EL CONTEO ES " + count);
//   if (!data) {
//     return {
//       props: {
//         data: [],
//         count: 0,
//         page,
//       },
//     };
//   } else {
//     return {
//       props: {
//         data,
//         count,
//         page,
//       },
//     };
//   }
// };

// export const getServerSideProps = async (context) => {
//   const page = context?.query?.page || 1;
//   const skip = (page - 1) * 4;
//   const tipo = context?.query?.tipo;

//   const productoQuery = `
//   query allCorseteria($tipo: String, $skip: Int = 0, $pageSize: Int = 4) {
//     productos: allProducto(where: {tipo: {matches: $tipo}}, limit: $pageSize, offset:$skip) {
//       _id
//       nombre
//       articulo
//       tipo
//       precio
//       mainImage{
//         asset{
//           url
//         }
//       }
//     }
//     counts: allProducto(where:{tipo: {matches: $tipo}}){
//       nombre
//     }

//   }
//   `;
//   const data = await getSanityContent({
//     query: productoQuery,
//     variables: { tipo, skip: skip, pageSize: 4 },
//   });

//   if (!data) {
//     return {
//       props: {
//         data: [],
//         page,
//       },
//     };
//   } else {
//     return {
//       props: {
//         data,
//         page,
//       },
//     };
//   }
// };
