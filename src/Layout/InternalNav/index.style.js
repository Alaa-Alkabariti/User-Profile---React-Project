import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../Media/index.style";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start; 
    width: 60%;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 200px;
  /*   background-color: #eeeeee;
 */
  margin: 0 auto;
  /*  position: fixed;
  padding-bottom: 100px; */

  @media ${devices.mobileL} {
    position: absolute;
    top: 335px;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    background-color: #e3e3e3;
  }
`;

export const ListItem = styled(NavLink)`
  color: #707070;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  margin: auto;
  font-weight: ${(props) => props.fontWeight};
  border-bottom: ${(props) => props.borderBottom};

  &:hover {
    background-color: #eeeeee;
  }

  &.active {
    border-bottom: 3px solid #46079a;
    font-weight: bold;
    text-transform: capitalize; 
  }
`;
