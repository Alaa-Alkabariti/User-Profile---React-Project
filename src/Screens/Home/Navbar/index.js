import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import Button from "../../../Components/Button";
import profily from "../../../Images/Profily.png";

const NavTag = styled.div`
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

const TwoButtons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const Link = styled.a`
  color: #515151;
  font-weight: bold;
  padding-right: 15px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

function Navbar(props) {
  return (
    <>
      <NavTag>
        <img src={profily} alt="logo" />
        <TwoButtons>
          <Link>{Utilization["Try It"]}</Link>
          <Button width="300px">{Utilization["Log In"]}</Button>
        </TwoButtons>
      </NavTag>
    </>
  );
}

export default Navbar;
