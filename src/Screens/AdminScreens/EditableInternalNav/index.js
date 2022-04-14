import React, { useState } from "react";
import { Nav } from "../../../Layout/index.style";
import { List } from "../../../Layout/InternalNav/index.style";
import {
  ColumnFour,
  ColumnOne,
  ColumnThree,
  ColumnTwo,
  Title,
} from "../ManageAbout/index.style";
import {
  TitleInput,
  Cancel,
  InputComponent,
  EditableNav,
  TitlesSection,
  TitlesList,
  Header,
  Input,
  Inputs,
  Form,
  Btn,
} from "./index.style";

import { Button } from "../ManageAbout/index.style";

function EditableInternalNav() {
  const [initialFields, setInitialField] = useState([]);
  const [fieldsValues, setFieldsValues] = useState({
    id: 0,
    Title1: "",
    Title2: "",
    Title3: "",
    Title4: "",
  });

  let FilteredInputs;
  const [show , setShow] = useState(0);
  function handleCancel() {
    
  }
  
  function handleChange(e) {
    console.log("input", e.target.value);
    setFieldsValues({ ...fieldsValues, [e.target.name]: e.target.value });
    console.log("inputs", fieldsValues);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(initialFields);
    setInitialField([...initialFields, fieldsValues]);
    console.log(fieldsValues);
    setFieldsValues({
      Title1: "",
      Title2: "",
      Title3: "",
      Title4: "",
    });
  }

  

  return (
    <>
      <TitlesSection>
        <Title>Navbar Titles</Title>

        <EditableNav>
          <Form>
            <Inputs>
            <InputComponent>
              <TitleInput
                onChange={handleChange}
                type="text"
                value={fieldsValues.Title1}
                placeholder="Enter Title"
                name="Title1"
              />
              <Cancel>&#x2613;</Cancel>
            </InputComponent>
            <InputComponent>
              <TitleInput
                onChange={handleChange}
                type="text"
                value={fieldsValues.Title2}
                placeholder="Enter Title"
                name="Title2"
              />
              <Cancel>&#x2613;</Cancel>
            </InputComponent>
            <InputComponent>
              <TitleInput
                onChange={handleChange}
                type="text"
                value={fieldsValues.Title3}
                placeholder="Enter Title"
                name="Title3"
              />
              <Cancel>&#x2613;</Cancel>
            </InputComponent>
            <InputComponent>
              <TitleInput
                onChange={handleChange}
                type="text"
                value={fieldsValues.Title4}
                placeholder="Enter Title"
                name="Title4"
              />
              <Cancel>&#x2613;</Cancel>
            </InputComponent>
            </Inputs>

            <Btn onClick={handleClick}>Save</Btn>
          </Form>

          <Header>
            <ColumnOne>Title One</ColumnOne>
            <ColumnTwo>Title Two</ColumnTwo>
            <ColumnThree>Title Three</ColumnThree>
            <ColumnFour>Title Four</ColumnFour>
          </Header>
          {initialFields.map((el) => (
            <>
              <TitlesList key={el.id + 1}>
                <ColumnOne>{el.Title1}</ColumnOne>
                <ColumnTwo>{el.Title2}</ColumnTwo>
                <ColumnThree>{el.Title3}</ColumnThree>
                <ColumnFour>{el.Title4}</ColumnFour>
              </TitlesList>
            </>
          ))}
        </EditableNav>
      </TitlesSection>
    </>
  );
}

export default EditableInternalNav;
