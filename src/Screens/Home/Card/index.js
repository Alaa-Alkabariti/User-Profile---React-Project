import React from "react";
import Utilization from "../../../Components/Names/en.json";
import { CardItem, Imag, Title, Description } from "./index.style";

function Card(props) {
  return (
    <CardItem>
      <Imag src={props.image} />
      <Title> {props.title}</Title>
      <Description> {props.desc}</Description>
    </CardItem>
  );
}

export default Card;
