import styled from "styled-components";

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
  margin-bottom: 100px;
`;

export const Title = styled.h3`
  color: #46079a;
`;

export const Desc = styled.p`
  color: #707070;
`;

export const Experience = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
  background-color: #e0e0ff;
  margin-top: 100px;
`;

export const Education = styled.div`
  background-color: #e0e0ff;
  border: 1px solid #eeeeee;
  margin-top: 100px;
  height: auto;
  width: 80%;
  /* background-color: blue; */
  margin-bottom: 100px;
  margin: 0 auto;
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
`;

export const CertificateTitle = styled.p`
  font-size: 30px;
  color: #111111;
  font-weight: bold;
`;

export const UniversityName = styled.p`
  font-size: 20px;
  color: #707070;
  font-weight: normal;
  margin-left: 10px;
`;

export const FrotTo = styled.p`
  color: rebeccapurple;
  margin-left: 20%;
`;

export const Number = styled.span`
  color: black;
  font-size: 40px;
  margin-right: 3%;
`;

export const Vertical = styled.div`
  border-left: 5px solid black;
  height: 200px;
  position: absolute;
  left: 36.2%;
  top: 37%;
`;
