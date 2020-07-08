import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 20%;
    margin: 0 auto;
    padding: 0 auto;
  `;
  return <Icon className="icon" src="./img/sunny.png" />;
};

export default Icon;
