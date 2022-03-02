import React from "react";
import Names from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import Card from "../Card";
import card1 from "../../../Images/card1.png";
import card2 from "../../../Images/card2.png";
import card3 from "../../../Images/card3.png";
import { useState } from "react";
import { BenefitsSection, Cards } from "./index.style";
import { Imag } from "../Card/index.style";

function Benefits(props) {
  const [cardd, setCard] = useState([
    {
      image: card1,
      title: Names["CardTitle"],
      desc: Names["Desc"],
    },
    {
      image: card2,
      title: Names["CardTitle"],
      desc: Names["Desc"],
    },
    {
      image: card3,
      title: Names["CardTitle"],
      desc: Names["Desc"],
    },
  ]);

  return (
    <BenefitsSection>
      <HeaderSection
        title={Names["Benefits of using Profily"]}
        desc={Names["header.desc"]}
      />
      <Cards>
      {cardd.map((el) => (
        <Card key={el.image} image={el.image} title={el.title} desc={el.desc} ></Card>
      ))}
      </Cards>
    </BenefitsSection>
  );
}

export default Benefits;
