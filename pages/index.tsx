import { groq } from "next-sanity";
import Head from "next/head";
import { Principal } from "../components/Principal";
import { SEO } from "../components/SEO";

import { getClient, sanityClient } from "../lib/sanity.server";
// import { getSanityContent } from "../lib/sanity";
import { AllProductoQuery } from "../types/generated-queries";

export default function Home({ data }) {
  console.log(data);

  return (
    <>
      <SEO
        title="Lenceria Rossina"
        description="Pagina de inicio de la Lenceria Rossina"
      />
      <Principal />
    </>
  );
}

export const getStaticProps = async () => {
  const productoQuery = groq`
  *[_type == "producto"]
`;
  const data = await sanityClient.fetch(productoQuery);
  console.log(data);

  if (!data) {
    return {
      props: {
        data: [],
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
