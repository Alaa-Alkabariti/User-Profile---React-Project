import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 75%;
  margin-bottom: 100px;
`;

export const ListItem = styled.li`
  color: #707070;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  margin: auto;
  font-weight: ${props => props.fontWeight};
  border-bottom: ${props => props.borderBottom};

  &:hover {
      background-color: #eeeeee;
  }
`;
