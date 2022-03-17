import styled from "styled-components";
import { devices } from "../Media/index.style";

export const LeftSpace = styled.div`
  width: 25%;
  height: 100vh;
  /* border: 2px solid red; */
  padding: 0px;
  margin: 0px;
  /* position: relative; */
  /* overflow-y: hidden; */
  position: relative;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const LeftSection = styled.div`
  width: 25%;
  height: 100vh;
  /* border: 2px solid red; */
  padding: 0px;
  margin: 0px;
  /* position: relative; */
  /* overflow-y: hidden; */
  position: fixed;
  left: 0;
  @media ${devices.mobileL} {
    width: 100%;
    position: absolute;
  }
`;

export const Image = styled.img`
  // .attrs((props) => ({
  // I created src attr as a props,, is it good? .....
  /* src: props.IMG, */
  // }))

  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  @media ${devices.mobileL} {
    height: 60vh;
    width: 100%;
  }
  /* position: fixed; */
`;
export const OverLay = styled.div`
  background: linear-gradient(to top, #b788f6, rgba(20, 10, 10, 0.23));
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  @media ${devices.mobileL} {
    height: 60vh;
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 50%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #46079a;
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  bottom: 100px;
  box-shadow: 1px 4px 4px #9990ff;

  @media ${devices.mobileL} {
    width: 80%;
    top: 350px;
  }
`;

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
`;

export const RightSection = styled.div`
  width: 75%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  @media ${devices.mobileL} {
    width: 100%;
   
  }
`;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media ${devices.mobileL} {
    flex-direction: column;
    width: 100%;
  }
`;

export const Theme = styled.div`
  height: 100px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  overflow-y: hidden;
  &:hover {
    font-size: 30px;
    cursor: pointer;
    color: #46079a;
  }

  @media ${devices.mobileL} {
    position: absolute;
    top: 180px;
    color: #ffffff;
    position: absolute;
    top: 240px;
  }
`;

export const Arrow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.div`
  width: 6%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  position: fixed;
  left: 92%;

  @media ${devices.mobileL} {
    position: absolute;
    left: 85%;
  }
`;

export const Icon = styled.span`
  width: 50px;
  font-size: 35px;
  height: auto;
  background-color: #46079a;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #460770;
  }
`;
