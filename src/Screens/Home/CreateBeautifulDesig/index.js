import React from "react";
import Utilization from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import three from "../../../Images/3.png";
import four from "../../../Images/4.png";
import one from "../../../Images/1.png";
import two from "../../../Images/2.png";
import {
  media,
  BeautiflDesig,
  Images,
  LeftImages,
  RightImages,
  Imag,
} from "./index.style";

function CreateBeautifulDesig() {
  return (
    <>
      <BeautiflDesig>
        <HeaderSection
          title={Utilization["Create beautiful design"]}
          desc={Utilization["header.desc"]}
        />
        <Images>
          <LeftImages>
            <Imag src={one} alt="first image" />
            <Imag src={two} alt="second image" />
          </LeftImages>
          <RightImages>
            <Imag src={three} alt="third image" />
            <Imag src={four} alt="fourth image" />
          </RightImages>
        </Images>
      </BeautiflDesig>
    </>
  );
}

export default CreateBeautifulDesig;
