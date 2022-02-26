import React from "react";
import styled from "styled-components";
import Button from "../../../Components/Button";
import arrow from "../../../Images/arrow.png";
import Utilization from "../../../Components/Utilization/en.json";

const Create = styled.div`
  width: 100%;
  height: auto;
  background-color: #fcfcfc;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Text = styled.p`
  color: #515151;
  font-size: 24px;
  min-width: 400px;
  text-align: center;
`;

function CreateProfile() {
  return (
    <Create>
      <Text>{Utilization["CreteYourProfile"]}</Text>
      <Button>
        {Utilization["GET STARTED"]} <img src={arrow} alt="arrow icon" />
      </Button>
    </Create>
  );
}

export default CreateProfile;
