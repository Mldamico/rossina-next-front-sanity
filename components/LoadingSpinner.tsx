import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoadingStyles = styled.div`
  margin: auto;
`;

export const LoadingSpinner = () => {
  return (
    <LoadingStyles>
      <Loader type="TailSpin" color="var(--red)" height={80} width={80} />
    </LoadingStyles>
  );
};
