import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Merriweather", sans-serif;
    font-size: 1.8em;
    margin: 0 auto;
  `;

  const Country = styled.h3`
    font-family: "Fira-Sans", sans-serif;
    font-size: 1.1rem;
    margin: 0 auto;
  `;

  return (
    <Container>
      <City>Cupertino</City>
      <Country>US</Country>
    </Container>
  );
};

export default Location;
