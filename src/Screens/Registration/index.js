import React from "react";
import profily from "../../Images/Profily.png";
import styled from "styled-components";
import Button from "../../Components/Button";
import Utilization from "../../Components/Utilization/en.json";
import { useState } from "react";

const media = {
  mobile: `@media(max-width : 320px)`,
  ipad: `@media(min-width : 670px)`,
  desktop: `@media(min-width : 1920px)`,
};

const Register = styled.div`
  width: 100%;
  background-color: #eeeeee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 30%;
  height: auto;
  background-color: white;
  box-shadow: 20px 20px 20px #898989;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Tabs = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;

  ${media.mobile} {
    background-color: red;
  };
  ${media.ipad} {
    background-color: blue;
  };
  ${media.desktop} {
    background-color: gray;
  }
  
`;

const Left = styled.div`
  width: 50%;
  border-bottom: 2px;
  color: black;
  border-bottom: 3px solid #46079a;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  padding-bottom: 10px;
  box-shadow: 2px 2px 2px #eeeeee;
`;

const Right = styled.div`
  color: black;
  width: 50%;
  border-bottom: 0.2px solid #eeeeee;
  padding-bottom: 10px;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  margin-bottom: 30px;
`;

const Form = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: #fcfcfc;
  border: 0.1px solid #eeeeee;
  padding-left: 20px;
  margin-bottom: 10px;
`;

function Registration() {
  const [Reg, setReg] = useState("False");

  function handleClick(e) {
    setReg("False");
    const Left = styled.div`
      width: 50%;
      border-bottom: 2px;
      color: black;
      border-bottom: 3px solid #46079a;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      padding-bottom: 10px;
      box-shadow: 2px 2px 2px #eeeeee;
    `;
  }

  function handleClick2() {
    setReg("True");
    const Left = styled.div`
      width: 50%;
      border-bottom: 2px;
      color: black;
      border-bottom: 3px solid #46079a;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
      padding-bottom: 10px;
      box-shadow: 2px 2px 2px #eeeeee;
    `;
  }

  return (
    <>
      <Register>
        <Box>
          <Image src={profily} />
          <Tabs>
            <Left onClick={handleClick}>Signup</Left>
            <Right onClick={handleClick2}>Login</Right>
          </Tabs>
          {Reg === "False" ? (
            <Form>
              <Input type="text" placeholder="Username" />
              <Input type="email" placeholder="Email Address" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              <Button>{Utilization["Sign Up"]}</Button>
            </Form>
          ) : (
            <Form>
              <Input type="text" placeholder="Username" />
              <Input type="email" placeholder="Email Address" />
              <Button>{Utilization["Log In"]}</Button>
            </Form>
          )}
        </Box>
      </Register>
    </>
  );
}

export default Registration;
