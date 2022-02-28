import React from "react";
import styled from "styled-components";
import Names from "../../../Components/Names/en.json";
import Button from "../../../Components/Button";
import profily from "../../../Images/Profily.png";
import {Link , TwoButtons , NavTag } from './index.style';

function Navbar(props) {
  return (
    <>
      <NavTag>
        <img src={profily} alt="logo" />
        <TwoButtons>
          <Link>{Names["Try It"]}</Link>
          <Button width="100">{Names["Log In"]}</Button>
        </TwoButtons>
      </NavTag>
    </>
  );
}

export default Navbar;
