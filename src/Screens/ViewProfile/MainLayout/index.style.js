import styled from "styled-components";

export const LeftSection = styled.div`
  width: 35%;
  height: 100vh;
  border: 2px solid red;
  padding: 0px;
  margin: 0px;
`;

export const Image = styled.img.attrs((props) => ({// I created src attr as a props,, is it good? .....
  src: props.IMG,
  
}))`
  width: 100%;
  height: 100%;
  border: 0px;
/* 
  &:after {
    content: "\A";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: red;
    opacity: 0.6;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  } */
`;

export const Nav = styled.div`
width: 80%;
height: 50px;
margin: 0 auto;
background-color:red
`

export const RightSection = styled.div`
  width: 65%;
  height: 20px;
  background-color:green;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
` ;

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start; 
`;
