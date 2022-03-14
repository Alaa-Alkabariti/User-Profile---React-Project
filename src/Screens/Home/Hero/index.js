import React from "react";
import Names from "../../../Components/Names/en.json";
import Button from "../../../Components/Button";
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
        <ImageHero src='Images/headerImage.png' alt="header image" />
        <HeroContent>
          <LeftSide>
            <HeroTitle>{Names["hero.title"]}</HeroTitle>
            <HeroDesc>{Names["hero.desc"]}</HeroDesc>
            <Button width="200">
              {Names["GET STARTED"]} <Arrow>&#187;</Arrow>
            </Button>
          </LeftSide>
          <RightSide>
            <Img src='/Images/heroImage.png' alt="hero image"/>
          </RightSide>
          </HeroContent>
      </Header>
    </>
  );
}

export default Hero;
