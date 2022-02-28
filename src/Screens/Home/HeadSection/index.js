import React from "react";
import Utilization from "../../../Components/Names/en.json";
import Button from "../../../Components/Button";
import { Headi, Title, Description } from "./index.style";

function HeaderSection(props) {
  return (
    <>
      <Headi>
        <Title>{props.title}</Title>
        <Description>{props.desc}</Description>
      </Headi>
    </>
  );
}

export default HeaderSection;
