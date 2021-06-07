import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMap, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { StyledFooter } from "./styles/FooterStyles";
import { LinkItem } from "./styles/LinkItem";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="flex">
        <h3>Ubicacion</h3>
        <span>
          <FontAwesomeIcon icon={faMap} size="2x" />
          <span>
            <a
              href="https://goo.gl/maps/udvik6AdXMH6Jyt47"
              target="_blank"
              rel="noopener noreferrer"
            >
              Belgrano 47, local 42. Ramos Mejia.
            </a>
          </span>
        </span>

        <h3>Contacto</h3>
        <LinkItem>
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          <a
            href="https://wa.me/541131735203"
            target="_blank"
            rel="noopener noreferrer"
          >
            1131735203
          </a>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          <a
            href="https://wa.me/541140712073"
            target="_blank"
            rel="noopener noreferrer"
          >
            1140712073
          </a>
        </LinkItem>
        <LinkItem>
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          <a
            href="https://wa.me/541163040000"
            target="_blank"
            rel="noopener noreferrer"
          >
            1163040000
          </a>
        </LinkItem>
      </div>
      <div className="flex">
        <h3>Links</h3>
        <Link href="/">Home</Link>
        <Link href="/productos">Productos</Link>
        <Link
          href={{
            pathname: "/productos",
            query: { tipoDePrenda: "Corseteria" },
          }}
        >
          Corseteria
        </Link>
        <Link
          href={{ pathname: "/productos", query: { tipoDePrenda: "Lenceria" } }}
        >
          Lenceria
        </Link>
        <Link href="/contacto">Contacto</Link>
      </div>
      <div className="flex">
        <h3 style={{ paddingLeft: "0.6rem" }}>Nuestras Redes</h3>
        <LinkItem>
          <a
            href="https://instagram.com/lenceriarossina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>

          <a
            href="https://facebook.com/lenceriarossina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>

          <a
            href="mailto: lenceriarossina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon" />
          </a>
        </LinkItem>
      </div>
    </StyledFooter>
  );
};
