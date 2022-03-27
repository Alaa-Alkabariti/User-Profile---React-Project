import React from "react";
import styled from "styled-components";
import Names from "../../../Components/Names/en.json";
import Button from "../../../Components/Button";
import { Linko, TwoButtons, NavTag } from "./index.style";
import { Link, Route, Routes } from "react-router-dom";
import Registration from "../../Registration/index.js";


function Navbar(props) {




  return (
    <>
      <NavTag>
        <img src="/Images/profily.png" alt="logo" />
        <TwoButtons>
          <Link to="registration">{Names["Try It"]}</Link>
          <Link to="../registration">{Names["Log In"]}</Link>
        </TwoButtons>
      </NavTag>
    </>
  );
}

export default Navbar;

/* function Navbar(props) {
  return (
    <>
      <NavTag>
        <img src='/Images/profily.png' alt="logo" />
        <TwoButtons>
          <Linko>{Names["Try It"]}</Linko>
          <Button width="100">{Names["Log In"]}</Button>
        </TwoButtons>
      </NavTag>
    </>
  );
}

export default Navbar; */
