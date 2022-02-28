import styled from "styled-components";

export const media = {
  mobile: `@media(max-width : 320px)`,
  ipad: `@media(max-width:800px)`,
  desktop: `@media(min-width : 1920px)`,
};

export const Header = styled.div`
  height: 100vh;
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 70%;
  flex-wrap: wrap;
`;

export const HeroTitle = styled.h1`
  font-size: 36px;
  max-width: 550px;
  color: #515151;
`;

export const HeroDesc = styled.h1`
  font-size: 17px;
  color: #9a9a9a;
  font-weight: normal;
  max-width: 500px;
`;

export const LeftSide = styled.div`
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

export const RightSide = styled.div`
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

export const Img = styled.img`
  width: 100%;
`;

export const ImageHero = styled.img`
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

export const Arrow = styled.span `
    color: white;
    font-size: 20px;
`
