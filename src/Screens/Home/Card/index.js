import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";

const CardItem = styled.div`
  width: 30%;
  height: auto;
  border: 0.1px solid #eeeeee;
  background-color: whaite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
  background-color: white;
  min-width: 300px;
  padding-top: 30px;
  box-shadow: 5px 5px 5px #eeeeee;
  &:hover {
      cursor: pointer;
  box-shadow: 10px 10px 10px #eeeeee;
      background-color: #DED2EB;
  }
`;

const Imag = styled.img`
  width: 60%;
  height: 200px;
`;

const Title = styled.h3`
  width: 90%;
  color: #515151;
  font-weight: bold;
  font-size: 24px;
`;

const Description = styled.p`
  width: 70%;
  color: #9A9A9A;
  font-size: 18px;
`;

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
