import React from "react";
import styled from "@emotion/styled";

const Condition = () => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2 rem;
    font-weight: 200;
    margin: 0 auto;
  `;

  const State = styled.h3`
    font-family: "Merriweather";
    font-size: 1.2 rem;
    margin: 0 auto;
  `;

  return (
    <>
      <Temp>70°F</Temp>
      <State>Sunny</State>
    </>
  );
};

export default Condition;
