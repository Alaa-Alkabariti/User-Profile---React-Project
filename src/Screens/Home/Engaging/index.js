import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import HeaderSection from "../HeadSection";
import EngagingItem from "../EngagingItem";
import { useState } from "react";
import engage from "../../../Images/engage.png";

const Engage = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 93px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  width: 45%;
  height: auto;
  min-width: 300px;display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const RightSide = styled.div`
  width: 55%;
  height: auto; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

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
            <img src={engage} alt="engage images" />
          </LeftSide>
          <RightSide>{engageItem.map((el) => el)}</RightSide>
        </Content>
      </Engage>
    </>
  );
}

export default Engaging;
