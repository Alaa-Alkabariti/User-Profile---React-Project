import React from "react";
import Utilization from "../../../Components/Names/en.json";
import profily from "../../../Images/Profily.png";
import { media, footerSection, Text, Img } from "./index.style";

function Footer() {
  return (
    <Text>
      {Utilization["ٌRights"]} <Img src={profily} alt="logo" />
    </Text>
  );
}

export default Footer;
