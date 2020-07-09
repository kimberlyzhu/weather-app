import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
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
      <Temp>{temp}°F</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
