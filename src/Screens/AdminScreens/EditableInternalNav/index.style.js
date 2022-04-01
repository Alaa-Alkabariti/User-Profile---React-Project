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

export const InputComponent = styled.div`
  width: 23%;
  height: 40px;
  display: flex;
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

export const Cancel = styled.span`
  color: #eeeeee;
  margin-left: -29px;
  cursor: pointer;
  background-color: #46079a;
  width: 20%;
  height: 100%;
  line-height: 240%;
  text-align: center;
  border-radius: 0px 9px 9px 0px;
  /*  padding-left: 20px;
  z-index: -1; */
  &:hover {
    /* background-color: white;
    border: 0.5px solid red;
    color: red; */
    opacity: 0.6;
  }
`;
