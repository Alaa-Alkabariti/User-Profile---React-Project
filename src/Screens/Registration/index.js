import React from "react";
import Button from "../../Components/Button";
import Names from "../../Components/Names/en.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  media,
  Register,
  Box,
  Tabs,
  Input,
  Form,
  Right,
  Left,
  Image,
} from "./index.style";

function Registration() {
  const navigate = useNavigate();

  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (value) => {
    setToggleState(value);
  };


  return (
    <>
      <Register>
        <Box>
          <Image src="/Images/Profily.png" />

          {toggleState === false ? (
            <>
              <Tabs>
                <Left
                  borderBottom="3px solid #46079a"
                  onClick={() => toggleTab(false)}
                >
                  Signup
                </Left>
                <Right
                  borderBottom=".5px solid #eeeeee"
                  onClick={() => toggleTab(true)}
                >
                  Login
                </Right>
              </Tabs>
              <Form>
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Email Address" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Button width="277">{Names["Sign Up"]}</Button>
              </Form>
            </>
          ) : (
            <>
              <Tabs>
                <Left
                  borderBottom=".5px solid #eeeeee"
                  onClick={() => toggleTab(false)}
                >
                  Signup
                </Left>
                <Right
                  borderBottom="3px solid #46079a"
                  onClick={() => toggleTab(true)}
                >
                  Login
                </Right>
              </Tabs>
              <Form>
                <Input type="text" placeholder="Username" />
                <Input type="email" placeholder="Email Address" />
                <Button width={277} onClick={() => navigate("/Home")}>
                  {Names["Log In"]}
                </Button>
              </Form>
            </>
          )}
        </Box>
      </Register>
    </>
  );
}

export default Registration;
