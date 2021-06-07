import { productsPerPage } from "../../config";
import ProductsPage from "./index";
import { sanityClient } from "../../lib/sanity.server";
import {
  allProductsQuery,
  countsTotalProducts,
} from "../../queries/allProductos";

export const getStaticProps = async (context) => {
  const page = +context?.params?.page || 1;
  const skip = (page - 1) * productsPerPage;

  const offset = productsPerPage + skip;

  const data = await sanityClient.fetch(allProductsQuery, {
    skip,
    offset,
  });

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

export const getStaticPaths = async (context) => {
  const data = await sanityClient.fetch(countsTotalProducts);

  const paths = Array.from({
    length: Math.ceil(data / productsPerPage),
  }).map((_, i) => ({
    params: {
      page: (i + 1).toString(),
      productos: "productos",
    },
  }));

  return { paths, fallback: false };
};

export default ProductsPage;
