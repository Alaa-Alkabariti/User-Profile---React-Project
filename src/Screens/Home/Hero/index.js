import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import Button from "../../../Components/Button";
import header from "../../../Images/headerImage.png";
import hero from "../../../Images/heroImage.png";
import arrow from "../../../Images/arrow.png";
import Navbar from "../Navbar";

const media = {
  mobile: `@media(max-width : 320px)`,
  ipad: `@media(max-width:800px)`,
  desktop: `@media(min-width : 1920px)`,
};

const Header = styled.div`
  height: 100vh;
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 70%;
  flex-wrap: wrap;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  max-width: 550px;
  color: #515151;
`;

const HeroDesc = styled.h1`
  font-size: 17px;
  color: #9a9a9a;
  font-weight: normal;
  max-width: 500px;
`;

const LeftSide = styled.div`
  width: 50%;
  min-width: 300px;
  ${media.mobile} {
    width: 100%;
    text-align: center;
    background-color: blue;
  }
  ${media.ipad} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  } ;
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  ${media.mobile} {
    width: 100%;
    margin-top: 40px;
  }
  ${media.ipad} {
    margin-top: 40px;
    width: 100%;
  } ;
`;

const Img = styled.img`
  width: 100%;
`;

const ImageHero = styled.img`
  width: 100%;
  height: 100vh;
  ${media.mobile} {
    width: 100%;
    height: 100vh;
  }
  ${media.ipad} {
    width: 100%;
    height: 100vh;
  } ;
`;

function Hero(props) {
  return (
    <>
      <Header>
        <Navbar />
        <ImageHero src={header} alt="header image" />
        <HeroContent>
          <LeftSide>
            <HeroTitle>{Utilization["hero.title"]}</HeroTitle>
            <HeroDesc>{Utilization["hero.desc"]}</HeroDesc>
            <Button width="277">
              {Utilization["GET STARTED"]} <img src={arrow} alt="arrow icon" />
            </Button>
          </LeftSide>
          <RightSide>
            <Img src={hero} alt="girl image" />
          </RightSide>
        </HeroContent>
      </Header>
    </>
  );
}

export default Hero;
