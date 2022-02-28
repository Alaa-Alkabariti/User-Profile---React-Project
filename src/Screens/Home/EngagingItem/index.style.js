import styled from "styled-components";

export const Item = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  &:hover {
    border: 1px solid #eeeeee;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
`;

export const EngageDesc = styled.p`
  font-size: 18px;
  color: #707070;
  min-width: 300px;
`;
