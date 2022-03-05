import React from "react";
import Names from "../../../Components/Names/en.json";
import Button from "../../../Components/Button";
import header from "../../../Images/headerImage.png";
import hero from "../../../Images/heroImage.png";
import Navbar from "../Navbar";
import {
  HeroTitle,
  HeroContent,
  Header,
  media,
  HeroDesc,
  LeftSide,
  RightSide,
  Img,
  ImageHero,
  Arrow
} from "./index.style";

function Hero(props) {
  return (
    <>
      <Header>
        <Navbar />
        <ImageHero src={header} alt="header image" />
        <HeroContent>
          <LeftSide>
            <HeroTitle>{Names["hero.title"]}</HeroTitle>
            <HeroDesc>{Names["hero.desc"]}</HeroDesc>
            <Button width="200">
              {Names["GET STARTED"]} <Arrow>&#187;</Arrow>
            </Button>
          </LeftSide>
          <RightSide>
           {/*  <Img src='Images/heroImage' alt="girl image" /> */}
            <Img src='/Images/heroImage.png' alt="hero image"/>
          </RightSide>
          </HeroContent>
      </Header>
    </>
  );
}

export default Hero;
