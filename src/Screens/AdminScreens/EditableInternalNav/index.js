import React, { useState } from "react";
import { Nav } from "../../../Layout/index.style";
import { List } from "../../../Layout/InternalNav/index.style";
import { Title } from "../ManageAbout/index.style";
import { Input, Cancel, InputComponent, EditableNav , TitlesSection} from "./index.style";

function EditableInternalNav() {
  let clicked;
  const [show, setShow] = useState();

  const [field, setField] = useState([
    {
      id: 0,
      inputField: (
        <Input
          height="100%"
          width="100%"
          type="text"
          placeholder="Enter Title"
        />
      ),
      Cancel: <Cancel onClick={handleCancel}>&#x2613;</Cancel>,
    },
    {
      id: 1,

      inputField: (
        <Input
          height="100%"
          width="100%"
          type="text"
          placeholder="Enter Title"
        />
      ),
      Cancel: <Cancel onClick={handleCancel}>&#x2613;</Cancel>,
    },
    {
      id: 2,

      inputField: (
        <Input
          height="100%"
          width="100%"
          type="text"
          placeholder="Enter Title"
        />
      ),
      Cancel: <Cancel onClick={handleCancel}>&#x2613;</Cancel>,
    },
    {
      id: 3,

      inputField: (
        <Input
          height="100%"
          width="100%"
          type="text"
          placeholder="Enter Title"
        />
      ),
      Cancel: <Cancel onClick={(show) => handleCancel}>&#x2613;</Cancel>,
    },
  ]);
  function handleCancel(show) {
    console.log("cancel title");
    setShow(show);
    console.log("show is", show);
    if (show === "False") {
      console.log("toggled");
    }
  }

  if (show === "0") {
    clicked = <h1>alaa</h1>;
  }

  return (
    <>
     {/*  <Title>Education</Title> */}

     <TitlesSection>
     <Title>Navbar Titles</Title>

     <EditableNav>
        {field.map((el) => (
          <InputComponent key={el.id}>
            {el.inputField} {el.Cancel}
          </InputComponent>
        ))}
      </EditableNav>
     </TitlesSection>
    </>
  );
}

export default EditableInternalNav;

/* {field.map((el) => (
    <InputComponent  key={el.id}>
      {el.inputField} {el.Cancel} {}
    </InputComponent>
  ))} 

  {field.map.filter((el) => el.id === 'id')

  }  */
