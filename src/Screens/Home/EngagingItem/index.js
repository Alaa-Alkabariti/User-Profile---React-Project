import React from "react";
import Utilization from "../../../Components/Names/en.json";
import dot from "../../../Images/dot.png";
import { Item, Image, EngageDesc } from "./index.style";

function EngagingItem(props) {
  return (
    <Item>
      <Image src={dot} alt="dot icon" />
      <EngageDesc>{props.Desc}</EngageDesc>
    </Item>
  );
}
export default EngagingItem;
