import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import Button from "../../../Components/Button";

const Headi = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

const Title = styled.div`
  color: #515151;
  font-weight: bold;
  text-align: center;
  font-size: 24px;
`;

const Description = styled.div`
  color: #9a9a9a;
  max-width: 600px;
  text-align: center;
  margin-top: 10px;
`;

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
