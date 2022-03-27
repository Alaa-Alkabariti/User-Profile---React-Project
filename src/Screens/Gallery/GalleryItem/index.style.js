import styled from 'styled-components'

export const MainImage = styled.div`
    width: 80%;
    background-color: red;
    margin-bottom: 10px;
    position: relative;
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  background-color: blue;
`;

export const Image = styled.img`
  width: 30%;
  height: calc(100% / 4);
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;