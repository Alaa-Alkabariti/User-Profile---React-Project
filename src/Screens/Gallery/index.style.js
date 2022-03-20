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
  /*   position: relative;
 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media ${devices.mobileL} {
    margin-top: -350px;
  }
`;

export const GalleryItem = styled.img`
  width: 90%;
  border: 0.2px solid #aaaa;
  margin-bottom: 20px;
  height: auto;
  position: relative; //1
  top:0px;
`;

/* export const OverLay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  background-color:green;
  &:hover {
    opacity: 1;
  }
`; */
