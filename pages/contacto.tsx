import React from "react";
import { Contact } from "../components/Contact";
import { SEO } from "../components/SEO";

const ContactoPage = () => {
  return (
    <>
      <SEO
        title="Contacto | Lenceria Rossina"
        description="Pagina de contacto de la Lenceria Rossina"
      />
      <Contact />
    </>
  );
};

export default ContactoPage;
