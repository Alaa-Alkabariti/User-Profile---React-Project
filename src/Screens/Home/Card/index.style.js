import styled from "styled-components";

export const CardItem = styled.div`
  width: 30%;
  height: auto;
  border: 0.1px solid #eeeeee;
  background-color: whaite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  box-sizing: border-box;
  background-color: white;
  min-width: 300px;
  padding-top: 30px;
  box-shadow: 5px 5px 5px #eeeeee;
  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px #eeeeee;
    background-color: #ded2eb;
  }
`;

export const Imag = styled.img`
  width: 60%;
  height: 200px;
`;

export const Title = styled.h3`
  width: 90%;
  color: #515151;
  font-weight: bold;
  font-size: 24px;
`;

export const Description = styled.p`
  width: 70%;
  color: #9a9a9a;
  font-size: 18px;
`;
