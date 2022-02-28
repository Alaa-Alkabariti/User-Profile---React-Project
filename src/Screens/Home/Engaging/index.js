import React from "react";
import Utilization from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import EngagingItem from "../EngagingItem";
import { useState } from "react";
import engage from "../../../Images/engage.png";
import { Engage, Content, LeftSide, RightSide, Image } from "./index.style";

function Engaging() {
  const [engageItem, setCard] = useState([
    <EngagingItem Desc={Utilization.engageDesc1} />,
    <EngagingItem Desc={Utilization.engageDesc2} />,
    <EngagingItem Desc={Utilization.engageDesc3} />,
    <EngagingItem Desc={Utilization.engageDesc4} />,
    <EngagingItem Desc={Utilization.engageDesc5} />,
  ]);
  return (
    <>
      <Engage>
        <HeaderSection
          title={Utilization["Make your webpages and apps more engaging"]}
          desc={Utilization["header.desc"]}
        />
        <Content>
          <LeftSide>
            <Image src={engage} alt="engage images" />
          </LeftSide>
          <RightSide>{engageItem.map((el) => el)}</RightSide>
        </Content>
      </Engage>
    </>
  );
}

export default Engaging;
