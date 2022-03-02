import styled from "styled-components";
import Media from '../../../Media/index.style';
import {media} from '../../../Media/index.style' 



/* export const media = {
    mobile : "minWidth : 320px",
    ipad : "maxWid : 760px"
  }  */
  
  
  export const BeautiflDesig = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
  `;
  
  export const Images = styled.div`
    width: 100%;
    margin: 0 auto;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 93px;
  
  `;
  
  export  const LeftImages = styled.div`
    width: 50%;
    height: auto;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.mobile} {
      width: 100%;
    }
    ${media.mobile} {
      width: 100%;
    } ; 
  `;
  
  export const RightImages = styled.div`
    width: 50%;
    height: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    align-items: flex-end;
    ${media.mobile} {
      width: 100%;
      margin-top: 200px;
      background-color: red;
    }
     ${media.mobile} {
      width: 10%;
      background-color: yellow;
    } ; 
  `;
  
  export const Imag = styled.img`
    width: 95%;
    margin-bottom: 20px;
    box-shadow: 14px 14px 14px #eeeeee;
    &:hover {
      border: 2px solid #46079a;
      cursor: pointer;
      box-sizing: border-box;
    }
    
  `;

