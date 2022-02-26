import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import HeaderSection from "../HeadSection";
import one from "../../../Images/1.png";
import two from "../../../Images/2.png";
import three from "../../../Images/3.png";
import four from "../../../Images/4.png";


const media = {
  mobile : "minWidth : 320px",
  ipad : "maxWid : 760px"
}


const BeautiflDesig = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

const Images = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 93px;

`;

const LeftImages = styled.div`
  width: 50%;
  height: auto;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.mobile} {
    width: 100%;
  }
  ${media.ipad} {
    width: 100%;
  } ;
`;

const RightImages = styled.div`
  width: 50%;
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  align-items: flex-end;
  ${media.mobile} {
    width: 100%;
    margin-top: 200px;
    background-color: red;
  }
  ${media.ipad} {
    width: 100%;
  } ;
`;

const Imag = styled.img`
  width: 95%;
  margin-bottom: 20px;
  box-shadow: 14px 14px 14px #eeeeee;
  &:hover {
    border: 2px solid #46079a;
    cursor: pointer;
  }
  
`;

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
