import React from "react";
import styled from "styled-components";
import Names from "../../../src/Components/Names/en.json";

const Buttons = styled.button`
  background-color: #46079a;
  color: white;
  height: 46px;
  width: ${(props) => props.width}px;

  border-radius: 4px;
  border: 0.1px solid #aaaaaa;
  box-shadow: 3px 3px 3px #aaaaaa;
  &:hover {
    background-color: #6c11e5;
    cursor: pointer;
  }
`;

const Button = ({ children, width }) => {
  return (
    <>
      <Buttons width={width}>{children}</Buttons>
    </>
  );
};
export default Button;
