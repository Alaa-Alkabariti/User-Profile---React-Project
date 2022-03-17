import styled from "styled-components";
import { devices } from "../../Media/index.style";

export const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  background-color: #feffff;
  box-shadow: 20px 20px 20px #aaaaaa;
  padding: 50px;
  border: 0.5px solid #eeeeee;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:100px;

  @media ${devices.mobileL} 
  {
    margin-top: -200px;
  }
`;

export const GalleryItem = styled.img`
  width: 90%;
  border: 0.2px solid #aaaa;
  margin-bottom: 20px;
  height: auto;
  &:hover {
    box-shadow: 5px 5px 5px #aaaaaa;
    border: 1px solid #46079a;
  }
`;
