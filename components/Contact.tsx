import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React from "react";
import { ContactStyles } from "./styles/ContactStyles";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MapContainer } from "./MapContainer";
import { Supreme } from "./styles/Supreme";
export const Contact = () => {
  return (
    <ContactStyles>
      <Head>
        <title>Lenceria Rossina | Contacto</title>
      </Head>
      <MapContainer />
      <div>
        <Supreme>Contacto</Supreme>
        <div className="contact-grid">
          <div>
            <h3>Ubicacion</h3>
            <p>Belgrano 47 Galeria 'La Strada' Local 42.</p>

            <h3>Transportes</h3>
            <p>Linea tren Sarmiento estacion Ramos Mejia</p>
            <p>Colectivos: 96, 172, 242</p>
          </div>
          <div>
            <h3>Instagram</h3>

            <div>
              <a href="https://www.instagram.com/lenceriarossina">
                <FontAwesomeIcon icon={faInstagram} color="#FF3744" size="3x" />
                lenceriarossina
              </a>
            </div>

            <h3>WhatsApp</h3>
            <div>
              <a
                href="https://wa.me/541140712073"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} color="#FF3744" size="3x" />
                1140712073
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/541163040000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} color="#FF3744" size="3x" />
                1163040000
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/541131735203"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} color="#FF3744" size="3x" />
                1131735203
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
};
