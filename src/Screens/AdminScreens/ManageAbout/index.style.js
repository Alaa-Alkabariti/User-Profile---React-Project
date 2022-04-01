import styled from "styled-components";

export const EducationForm = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.5px solid #eeeeee;
  align-items: center;
  margin-top: 100px;

  &:hover{
      background-color: #f2f2fb;
  }
`;

export const ExperienceForm = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.5px solid #eeeeee;
  align-items: center;
  

  &:hover{
      background-color: #f2f2fb;
  }
`;

export const AddNew = styled.a`
    color: gray;
    cursor: pointer;
    margin-left: -1100px;
    &:hover{
        color: #0000ee;
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const EducationSection = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  min-width: 400px; ;
`;

export const ExperienceSection = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  background-color: #eeeeee; ;
`;

export const Title = styled.h3`
  color: #46079a;
`;

export const Button = styled.button`
  background-color: #46079a;
  height: 40px;
  padding: 0 50px;
  border-radius: 10px;
  color: #fff;
  margin-top: 20px;
  border: 0.1px solid gray;
  box-shadow: 3px 3px 3px #46079a;

  cursor: pointer;
`;
