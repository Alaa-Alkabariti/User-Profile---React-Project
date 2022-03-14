import React from "react";
import Button from "../../../Components/Button";
import Names from "../../../Components/Names/en.json";
import { Create, Text } from "./index.style";
import { Arrow } from "../Hero/index.style";

function CreateProfile() {
  return (
    <Create>
      <Text>{Names["CreteYourProfile"]}</Text>
      <Button width='200'>
        {Names["GET STARTED"]}  <Arrow>&#187;</Arrow>
      </Button>
    </Create>
  );
}

export default CreateProfile;
