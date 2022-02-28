import styled from "styled-components";


export const NavTag = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  top: 50px;
`;

export const TwoButtons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const Link = styled.a`
  color: #515151;
  font-weight: bold;
  padding-right: 15px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;