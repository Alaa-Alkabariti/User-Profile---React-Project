import { devices } from "../../Media/index.style";
import styled from "styled-components";

export const ServiceSec = styled.div`
margin-top:100px;
  @media ${devices.mobileL} {
    margin-top: -200px;
  }
`;

export const DetailsService = styled.div`
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
    margin-top: -150px;
    margin-bottom: 170px;
  }
`;
