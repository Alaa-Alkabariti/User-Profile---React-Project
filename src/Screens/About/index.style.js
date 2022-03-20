import styled from "styled-components";
import { devices } from "../../Media/index.style";

export const Aboutus = styled.div`
  width: 100%;
`;

export const Details = styled.div`
  width: ${(props) => props.width};
  height: auto;
  border: 0.1px solid #eeeeee;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  margin-bottom: 60px;

  @media ${devices.mobileL} {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: -160px;
  }
`;

export const Title = styled.h3`
  color: #46079a;

  @media ${devices.mobileL} {
    text-align: center;
  }
`;

export const Desc = styled.p`
  color: #707070;
  @media ${devices.mobileL} {
    font-size: 14px;
  }
`;

export const Experience = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  /*  background-color: #e0e0ff; */
  margin-top: 60px;
  margin-bottom: 60px;

  @media ${devices.mobileL} {
    border: 1px solid #eeeeee;
    padding-bottom: 50px;
  }
`;

export const Education = styled.div`
  /* background-color: #e0e0ff; */
  /*  border: 1px solid #eeeeee; */
  height: auto;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-bottom: 60px;
  border-bottom: 2px solid #eeeeee;

  @media ${devices.mobileL} {
    padding-bottom: 50px;
    border: 1px solid #eeeeee;
  }
`;

export const EducationItem = styled.div`
  height: auto;
  width: 90%;
  /*  background-color: blue; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /*  border-bottom: .5px solid #eeeeee; */

  @media ${devices.mobileL} {
    max-width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const CertificateTitle = styled.p`
  font-size: 20px;
  color: #111111;
  font-weight: bold;
  text-transform: capitalize;
`;

export const UniversityName = styled.p`
  font-size: 20px;
  color: #707070;
  font-weight: normal;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const FrotTo = styled.p`
  color: rebeccapurple;
  margin-left: 20%;
  @media ${devices.mobilel} {
    margin-left: 0px;
  }
`;

export const Number = styled.span`
  color: black;
  font-size: 40px;
  /* z-index: 9; */
  margin-right: 3%;
`;

/* export const Vertical = styled.div`
  border-left: 2px solid black;
  height: 17%;
  z-index: 0; 
  position: absolute;
  left: 36.2%;
  top: ${(props) => props.top};

  @media ${devices.mobileL} {
    display: none;
  }
`; */

export const AboutSec = styled.div`
  margin-top: 100px;
  @media ${devices.mobileL} {
    margin-top: -200px;
  }
`;

export const LeftSide = styled.div`
  width: 5.5%;
  border-left: 4px solid #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 120px;
  position: relative;
  &:first-child {
    border-left: 4px solid #eeeeee;
  }

  @media ${devices.mobileL} {
    display: none;
  }
`;

export const RightSide = styled.div`
  width: 90%;
`;

export const Dot = styled.div`
  border-radius: 50%;
  background-color: #46079a;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 50px;
  z-index: 0;
`;

export const Dot2 = styled.div`
  border-radius: 50%;
  background-color: #46079a;
  width: 20px;
  height: 20px;
  margin-top: 48px;
  position: absolute;
  right: 50px;
  z-index: 0;
`;
