import React from "react";
import Utilization from "../../../Components/Names/en.json";
import { Item, Image, EngageDesc } from "./index.style";

function EngagingItem(props) {
  return (
    <Item>
      <Image src='/Images/dot.png' alt="dot icon" />
      <EngageDesc>{props.Desc}</EngageDesc>
    </Item>
  );
}
export default EngagingItem;
