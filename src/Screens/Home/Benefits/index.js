import React from "react";
import Names from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import Card from "../Card";
import { useState } from "react";
import { BenefitsSection, Cards } from "./index.style";
import { Imag } from "../Card/index.style";

function Benefits(props) {
  const [cardd, setCard] = useState([
    {
      image: "/Images/card1.png",
      title: Names["CardTitle"],
      desc: Names["Desc"],
    },
    {
      image: "/Images/card2.png",
      title: Names["CardTitle"],
      desc: Names["Desc"],
    },
    {
      image: "/Images/card3.png",
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
          <Card
            key={el.image}
            image={el.image}
            title={el.title}
            desc={el.desc}
          ></Card>
        ))}
      </Cards>
    </BenefitsSection>
  );
}

export default Benefits;
