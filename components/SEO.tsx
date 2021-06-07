import Head from "next/head";
import React from "react";

interface ISeo {
  children?: JSX.Element | JSX.Element[];
  location?: {
    href: string;
  };
  description?: string;
  title?: string;
  image?: string;
}

export const SEO = ({
  children,
  location,
  description,
  title,
  image,
}: ISeo) => {
  return (
    <Head>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="img/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content="Lenceria Rossina"
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Head>
  );
};
