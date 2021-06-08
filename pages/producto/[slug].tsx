import React from "react";
import { sanityClient } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { SingleProduct } from "../../components/SingleProduct";
import { SEO } from "../../components/SEO";
import { useRouter } from "next/router";
import { LoadingSpinner } from "../../components/LoadingSpinner";
const SingleProductPage = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <SEO
        title={`${data.nombre} - ${data.articulo} | Lenceria Rossina`}
        description={
          data.descripcion ||
          `Producto ${data.nombre} - Articulo ${data.articulo}`
        }
      />
      <SingleProduct product={data} />
    </>
  );
};

export default SingleProductPage;

export const getStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const productoQuery = groq`
  *[_type == "producto" && slug.current match $slug][0]
`;
  const data = await sanityClient.fetch(productoQuery, { slug });
  console.log(data);
  if (!data) {
    return {
      props: {
        data: undefined,
      },
    };
  } else {
    return {
      props: {
        data,
      },
    };
  }
};

export const getStaticPaths = async (context) => {
  const productoQuery = groq`
    *[_type == "producto"]
  `;
  const data = await sanityClient.fetch(productoQuery);
  console.log(data);
  const paths = data.map((product) => ({
    params: { slug: product.slug.current },
  }));
  console.log("EL PATH ES");
  console.log(paths);
  return { paths, fallback: true };
};
