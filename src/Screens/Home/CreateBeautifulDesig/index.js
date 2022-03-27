import React from "react";
import Utilization from "../../../Components/Names/en.json";
import HeaderSection from "../HeadSection";
import {
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
            <Imag src='/Images/1.png' alt="first image" />
            <Imag src='/Images/2.png' alt="second image" />
          </LeftImages>
          <RightImages>
            <Imag src='/Images/3.png' alt="third image" />
            <Imag src='/Images/4.png' alt="fourth image" />
          </RightImages>
        </Images>
      </BeautiflDesig>
    </>
  );
}

export default CreateBeautifulDesig;
