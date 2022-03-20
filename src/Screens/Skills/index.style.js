import styled from "styled-components";
import { devices } from "../../Media/index.style";

export const SkillsList = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 70px;

  @media ${devices.mobileL} {
    margin-top: -290px;
    padding-bottom: 100px;
    margin-top: -400px;

  }
`;

export const SkillNo = styled.div`
  width: ${(props) => props.width};
  min-width: 250px;
  height: auto;
  border: 0.1px solid #eeeeee;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 50px;
  box-shadow: 3px 3px 3px #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  &:hover {
    box-shadow: 5px 5px 5px #e1e1e3;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    background-color: #efefef;
  }
`;

export const Title = styled.h3`
  color: #46079a;
  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 5px #eeeeee;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const Experience = styled.p`
  color: #707070;
  &:hover {
    transform: scale(1.1);
    border-bottom: 2px solid black;
    box-shadow: 5px 5px 5px #eeeeee;
    font-weight: bold;
    cursor: pointer;
  }

  @media ${devices.mobileL} {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid black;
  }
`;

export const Image = styled.img`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 5px 5px 5px #eeeeee;
  }

  @media ${devices.mobileL} {
    width: 30px;
  }
`;

export const LeftSide = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const RightSide = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
