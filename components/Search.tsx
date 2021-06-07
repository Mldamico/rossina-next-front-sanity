import React, { useEffect, useState, useCallback } from "react";
import { resetIdCounter, useCombobox } from "downshift";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropdownStyles";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity.server";
import { urlFor } from "../lib/sanity";

const query = `
query searchProducts($searchTerm: String!) {
  searchTerms: allProducts(
    where: {
      OR: [
        { nombre_contains_i: $searchTerm }
        { articulo_contains_i: $searchTerm }
        { descripcion_contains_i: $searchTerm }
      ]
    }
  ) {
    id
    nombre
    slug
    imagen {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}`;

export const Search = () => {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState([]);

  const getData = async (term) => {
    console.log(term);
    const productoQuery = groq`
  *[_type == "producto" && articulo match $term || nombre match $term] 
`;
    const data = await sanityClient.fetch(productoQuery, { term: `${term}*` });
    console.log(data);
    setSearchTerms(data);
  };

  const findItemsButChill = useCallback(debounce(getData, 500), []);

  resetIdCounter();
  const items = searchTerms || [];
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill(inputValue);
    },
    onSelectedItemChange({ selectedItem }) {
      void router.push({
        pathname: `/producto/${selectedItem.slug}`,
      });
    },
    itemToString(item) {
      return item?.nombre || "";
    },
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "🔍 Buscar prenda",
            id: "search",
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item._id}
              {...getItemProps({ item, index })}
              highlighted={index === highlightedIndex}
            >
              <img
                src={urlFor(item.mainImage).url()}
                alt={item.nombre}
                width="50"
              />
              Art {item.articulo} - {item.nombre}
            </DropDownItem>
          ))}
        {/* {isOpen && !items.length && !loading ? (
          <DropDownItem>
            Lo siento, no se encontro nada con el siguiente valor: ${inputValue}
          </DropDownItem>
        ) : null} */}
      </DropDown>
    </SearchStyles>
  );
};
