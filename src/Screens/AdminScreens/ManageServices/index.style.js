import styled from "styled-components";

export const Form = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 300px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #eeeeee;
  padding: 40px 0px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 80%;
  padding-left: 10px;
  border: 0.5px solid #eeeeee;
  margin-left: 3px;
  height: 36px;
  border-radius: 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const TextField = styled.textarea`
  width: 80%;
  padding-left: 10px;
  height: 200px;
  border: 0.5px solid #eeeeee;
  margin-left: 3px;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

      
export const Header = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    margin-left: 300px;
    flex-direction:row;
`;


export const ServicesList = styled.div`
  width: 80%;
  margin: 0 auto;
`;