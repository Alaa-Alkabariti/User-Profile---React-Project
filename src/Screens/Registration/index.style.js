import styled from "styled-components";

export const media = {
    mobile: `@media(max-width : 320px)`,
    ipad: `@media(min-width : 670px)`,
    desktop: `@media(min-width : 1920px)`,
  };
  
  export const Register = styled.div`
    width: 100%;
    background-color: #eeeeee;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  export const Box = styled.div`
    width: 30%;
    height: auto;
    background-color: white;
    box-shadow: 20px 20px 20px #898989;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
  `;
  
  export const Tabs = styled.div`
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
  
    /*  ${media.mobile} {
      background-color: red;
    };
    ${media.ipad} {
      background-color: blue;
    };
    ${media.desktop} {
      background-color: gray;
    } */
  `;
  
  export const Left = styled.div`
    width: 50%;
    border-bottom: 2px;
    color: black;
    border-bottom: ${props => props.borderBottom};
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    padding-bottom: 10px;
    box-shadow: 0.3px 0.3px 0.3px #eeeeee;
  
    &:hover {
      background-color: #eeeeee;
    }
  `;
  
  export const Right = styled.div`
    color: black;
    width: 50%;
    border-bottom: ${props => props.borderBottom};
    padding-bottom: 10px;
    text-align: center;
    cursor: pointer;
  
    &:hover {
      background-color: #eeeeee;
    }
  `;
  
  export const Image = styled.img`
    margin-bottom: 30px;
  `;
  
  export const Form = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  
  export const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: #fcfcfc;
    border: 0.1px solid #eeeeee;
    padding-left: 20px;
    margin-bottom: 10px;
  `;