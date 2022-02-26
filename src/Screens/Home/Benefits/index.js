import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import HeaderSection from "../HeadSection";
import Card from "../Card";
import card1 from "../../../Images/card1.png";
import card2 from "../../../Images/card2.png";
import card3 from "../../../Images/card3.png";
import { useState } from "react";

const BenefitsSection = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fbfbfb;
  align-items: center;
  padding-top: 93px;
  padding-bottom: 70px;
`;

const Cards = styled.div`
  margin-top: 93px;
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function Benefits(props) {
  const [cardd, setCard] = useState([
    <Card
      image={card1}
      title={Utilization.CardTitle}
      desc={Utilization.Desc}
    />,
    <Card
      image={card2}
      title={Utilization.CardTitle}
      desc={Utilization.Desc}
    />,
    <Card
      image={card3}
      title={Utilization.CardTitle}
      desc={Utilization.Desc}
    />,
  ]);

  return (
    <BenefitsSection>
      <HeaderSection
        title={Utilization["Benefits of using Profily"]}
        desc={Utilization["header.desc"]}
      />
      <Cards>{cardd.map((el) => el)}</Cards>
    </BenefitsSection>
  );
}

export default Benefits;
