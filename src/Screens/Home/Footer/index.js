import React from "react";
import Utilization from "../../../Components/Names/en.json";
import { media, footerSection, Text, Img } from "./index.style";

function Footer() {
  return (
    <Text>
      {Utilization["ٌRights"]} <Img src='/Images/profily.png' alt="logo" />
    </Text>
  );
}

export default Footer;
