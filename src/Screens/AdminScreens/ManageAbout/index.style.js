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
  padding: 20px;
  box-sizing: border-box;
  &:hover {
    background-color: #fdfcff;
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
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 100px;
  box-sizing: border-box;
  &:hover {
    background-color: #fdfcff;
  }
`;

export const AddNew = styled.a`
  color: gray;
  cursor: pointer;
  margin-left: -800px;
  &:hover {
    color: #46079a;
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
  border: none;
  box-shadow: 3px 3px 3px #46079a;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const EducationsList = styled.div`
  width: 79%;
  height: auto;
  box-shadow: 3px 3px 3px #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColumnOne = styled.div`
  background-color: #ffffff;
  width: 25%;
  border: 0.5px solid #e4e4e4;
  height: 20px;
  text-align: center;
`;

export const ColumnTwo = styled.div`
  width: 25%;
  background-color: #ffffff;
  border: 0.5px solid #e4e4e4;
  text-align: center;
  height: 20px;
`;

export const ColumnThree = styled.div`
  border: 0.5px solid #e4e4e4;
  background-color: #ffffff;
  width: 25%;
  text-align: center;
  height: 20px;
`;

export const ColumnFour = styled.div`
  border: 0.5px solid #e4e4e4;
  width: 25%;
  background-color: #ffffff;
  height: 20px;
  text-align: center;
`;

export const EducationsListHeader = styled.div`
  width: 79%;
  height: auto;
  box-shadow: 3px 3px 3px #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

export const Delete = styled.button`
  background-color: red;
  color: white;
  text-align: right;
  /* margin-left: 100px; */
  border-radius: 4px;
  border: 0.3px solid #e4e4e4;
  cursor: pointer;
  box-shadow: 3px 3px 3px #eeeeee;
  &:hover {
    opacity: 0.5;
  }
`;

export const Table = styled.table`
  width: 100%;
  box-shadow: 3px 3px 3px #eeeeee;
  border: 0.5px solid #eeeeee;
  padding: 10px 0px;
  border-collapse: collapse;
`;

export const Message = styled.h4`
  color: #000;
  background-color: #d9cde9;
  width: 80%;
  text-align: center;
  padding: 10px 0px;
`;

export const Tr = styled.tr`
  text-align: center;
  border: 02px solid #eeeeee;
`;

export const Th = styled.th`
  background-color: #eeeeee;
  text-align: center;
  border: 0.5px solid #eeeeee;
  width: auto;
`;

export const Td = styled.td`
  background-color: #ffffff;
  border: 0.5px solid #eeeeee;
  text-align: center;
  width: auto;
  &:hover {
    color: gray;
  }
`;
