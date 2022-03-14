import React from "react";
import Names from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import EngagingItem from "../EngagingItem";
import { useState } from "react";
import { Engage, Content, LeftSide, RightSide, Image } from "./index.style";

function Engaging() {
  const [engageItem, setCard] = useState([
    <EngagingItem Desc={Names["engageDesc1"]} />,
    <EngagingItem Desc={Names["engageDesc2"]} />,
    <EngagingItem Desc={Names["engageDesc3"]} />,
    <EngagingItem Desc={Names["engageDesc4"]} />,
    <EngagingItem Desc={Names["engageDesc5"]} />,
  ]);
  return (
    <>
      <Engage>
        <HeaderSection
          title={Names["Make your webpages and apps more engaging"]}
          desc={Names["header.desc"]}
        />
        <Content>
          <LeftSide>
            <Image src='/Images/engage.png' alt="engage images" />
          </LeftSide>
          <RightSide>{engageItem.map((el) => el)}</RightSide>
        </Content>
      </Engage>
    </>
  );
}

export default Engaging;
