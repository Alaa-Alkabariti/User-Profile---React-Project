import styled from "styled-components";

export const Form = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 0.5px solid #eeeeee;
  height: 200px;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const Input = styled.input`
  width: 30%;
  padding-left: 10px;
  border: 0.5px solid #eeeeee;
  margin-left: 3px;
  height: 36px;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Inputs = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;


export const SkillList = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
`;

export const ViewSkills = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-left: 110px;
`;
