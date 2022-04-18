import React, { useState } from "react";
import { Nav } from "../../../Layout/index.style";
import { List } from "../../../Layout/InternalNav/index.style";
import {
  ColumnFour,
  ColumnOne,
  ColumnThree,
  ColumnTwo,
  Delete,
  Table,
  Td,
  Th,
  Title,
  Tr,
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
  const [show, setShow] = useState(0);
  function handleCancel() {}

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

  function deleteItem(el) {
    console.log("el", el.id);
    const newEducationList = initialFields.filter(
      (items) => items.id !== el.id
    );
    console.log(initialFields);

    setFieldsValues({ newEducationList });
  }

  function deleteTitle(el) {
    let currentId = el.id
    setInitialField(initialFields.filter((items) => items.id !== currentId))
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
                {/*  <Cancel>&#x2613;</Cancel> */}
              </InputComponent>
              <InputComponent>
                <TitleInput
                  onChange={handleChange}
                  type="text"
                  value={fieldsValues.Title2}
                  placeholder="Enter Title"
                  name="Title2"
                />
                {/*  <Cancel>&#x2613;</Cancel> */}
              </InputComponent>
              <InputComponent>
                <TitleInput
                  onChange={handleChange}
                  type="text"
                  value={fieldsValues.Title3}
                  placeholder="Enter Title"
                  name="Title3"
                />
                {/* <Cancel>&#x2613;</Cancel> */}
              </InputComponent>
              <InputComponent>
                <TitleInput
                  onChange={handleChange}
                  type="text"
                  value={fieldsValues.Title4}
                  placeholder="Enter Title"
                  name="Title4"
                />
                {/*  <Cancel>&#x2613;</Cancel> */}
              </InputComponent>
            </Inputs>

            <Btn onClick={handleClick}>Save</Btn>
          </Form>
          <Header>
            <Table>
              <thead>
                <Tr>
                  <Th>Title One</Th>
                  <Th>Title Two</Th>
                  <Th>Title Three</Th>
                  <Th>Title Four</Th>
                </Tr>
              </thead>
              <tbody>
                {initialFields.map((el) => (
                  <Tr>
                    <Td>{el.Title1} <Delete onClick={() => deleteTitle(el)}>&#x2716;</Delete></Td>
                    <Td>{el.Title2} <Delete onClick={() => deleteTitle(el)}>&#x2716;</Delete></Td>
                    <Td>{el.Title3} <Delete onClick={() => deleteTitle(el)}>&#x2716;</Delete></Td>
                    <Td>{el.Title4} <Delete onClick={() => deleteTitle(el)}>&#x2716;</Delete></Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Header>
        </EditableNav>
      </TitlesSection>
    </>
  );
}

export default EditableInternalNav;
