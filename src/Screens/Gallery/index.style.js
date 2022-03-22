import styled from "styled-components";
import { devices } from "../../Media/index.style";

export const GallerySec = styled.div`
  width: 80%;
  /* background-color: #ffffff; */
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px #b78fff;
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  /* display: none; */
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  opacity: 100;
  width: 30%;
  opacity: 1;
  height: calc(100% / 4);
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;

export const GalleryItem = styled.div`
  width: 60%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover ${OverLay} {
    display: block;
    background-color: #eeeee0;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }
`;

/* export const Gall = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  background-color: #feffff;
  box-shadow: 20px 20px 20px #aaaaaa;
  border: 0.5px solid #eeeeee;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  background-color: red;
  position: relative;

  @media ${devices.mobileL} {
    margin-top: -350px;
  }
`;

export const GalleryItem = styled.img`
  width: 70%;
  border: 2px solid red;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color: green;
  z-index: 9;
`;

const ParallaxImgStyled = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover; 
  min-height: 450px; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`; 

export const UnicornAfter = styled.div`
  &:after {
    content: "";
    background-color: red;
    position: absolute;
    top: 0px;
  }
`;
 */
