import styled from "styled-components";

export const TitlesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.5px solid #eeeeee;
  align-items: center;
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
`;
export const EditableNav = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const TitlesList = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export const InputComponent = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* min-width: 400px; */
  margin-right: 5px;
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 0.5px solid #eeeeee;
  background-color: #efefef;
  padding-left: 10px;
  margin-left: 3px;
  margin-right: ${(props) => props.marginRight};
  box-sizing: border-box;
  margin-bottom: ${(props) => props.marginBottom};
  border-radius: 10px;
  box-shadow: 3px 3px 3px #eeeeee;

  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const Form = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleInput = styled.input`
  background-color: green;
  padding-left: 10px;
  border: 0.5px solid #eeeeee;
  width: 100%;
  height: 36px;
  border-radius: 10px;
  background-color: #efefef;
  box-shadow: 3px 3px 3px #eeeeee;
  box-shadow: 3px 3px 3px #eeeeee;
  &:focus {
    outline: none;
    border-color: #46079a;
    box-shadow: 9px 9px 9px #aaaaaa;
  }
`;

export const Cancel = styled.button`
  color: #000000;
  background-color: #eeeeee;
  height: 100%;
  border: 0.5px solid #eeeeee;
  width: 20%;
  border-radius: 0px 9px 9px 0px;
  &:hover {
    opacity: 0.8;
    background-color: #f00;
    cursor: pointer;
    color: #eeeeee;
  }
`;

export const Inputs = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const Btn = styled.button`
  width: 20%;
  background-color: #46079a;
  height: 40px;
  padding: 0 50px;
  border-radius: 10px;
  color: #fff;
  margin-top: 20px;
  border: none;
  box-shadow: 3px 3px 3px #46079a;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Message = styled.p`
  color: ${(props) => props.color};
  width: 80%;
  text-align: center;
  padding: 10px 0px;
  background-color: #eeeeee;
`;
