import styled from "styled-components";

export const Form = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 0.5px solid #eeeeee;
  height: auto;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 100px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 0.5px solid #eeeeee;
  background-color: #eeeeee;
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
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 80%;
  margin: 0 auto;
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
  width: 80%;
  margin: 0 auto;
  padding: 30px 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #eeeeee;
  /* background-color: #eeeeee; */
  margin-bottom: 50px;
  box-sizing: border-box;
`;

export const Img = styled.img`
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid #aaaaaa;
  border-radius: 6px 6px 0px 0px;
  margin-top: -20px;
`;

export const UpdateSection = styled.div`
  width: 80%;
  padding: 30px 0px;
  margin: 0 auto;
  height: 200px;
  background-color: gwhiteay;
  margin-top: 10px;
  box-shadow: 2px 2px 2px 2px #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 26%;
  height: 230px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  box-shadow: 2px 2px 2px 2px #aaaaaa;
  margin-bottom: 30px;
  margin-right: 20px;
  border-radius: 6px 6px 6px 6px;
  color: gray;
  font-weight: bold;

/*   &:hover {
    box-sizing: border-box;
    width: 30.1%;
    height: 232px;
    cursor: pointer; */
  }
`;

export const CardBottom = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const Inp = styled.input`
  width: auto;
  height: 36px;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const SkillNames = styled.p`
  max-width: 50px;
  color: black; ;
`;

export const UploadImage = styled.input.attrs({ type: "file" })`
  width: 100%;
  &::before {
    content: "Select Skill Image";
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    white-space: nowrap;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
`;
