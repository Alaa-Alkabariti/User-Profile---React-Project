import styled from "styled-components";

export const Form = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  padding-left: 10px;
  width: 70%;
  margin-left: 3px;
  margin-bottom: 10px;
  border: 0.5px solid #eeeeee;
  height: 36px;
  border-radius: 10px;
  background-color: #efefef;
  box-shadow: 3px 3px 3px #eeeeee;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const MainImage = styled.div`
  background-color: #ffffff;
  width: 25%;
  border: 0.5px solid #e4e4e4;
  height: 20px;
  text-align: center;
`;

export const ImageOne = styled.div`
  background-color: #ffffff;
  width: 25%;
  border: 0.5px solid #e4e4e4;
  height: 20px;
  text-align: center;
`;

export const ImageTwo = styled.div`
  background-color: #ffffff;
  width: 25%;
  border: 0.5px solid #e4e4e4;
  height: 20px;
  text-align: center;
`;

export const ImageThree = styled.div`
  background-color: #ffffff;
  width: 25%;
  border: 0.5px solid #e4e4e4;
  height: 20px;
  text-align: center;
`;

export const Header = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
