import React from "react";
import styled from "styled-components";
import Utilization from "../../../src/Components/Utilization/ar.json";

const Buttons = styled.button`
  background-color: #46079a;
  color: white;
  height: 46px;
  width: ${props => props.width};
 

  border-radius: 4px;
  border: 0.1px solid #aaaaaa;
  box-shadow: 3px 3px 3px #aaaaaa;
  &:hover {
    background-color: #6c11e5;
    cursor: pointer;
  }
`;

const Button = ({children}) => {
  return (
    <>
      <Buttons>{children}</Buttons>
    </>
  );
};
export default Button;
