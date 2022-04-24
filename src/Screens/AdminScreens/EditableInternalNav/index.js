import React, { useState } from "react";
import { BiCalendarEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

import {
  Delete,
  Edit,
  Table,
  Td,
  Th,
  Title,
  Tr,
} from "../ManageAbout/index.style";
import {
  TitleInput,
  EditableNav,
  TitlesSection,
  Header,
  Inputs,
  Form,
  Btn,
  Message,
} from "./index.style";

function EditableInternalNav() {
  const [initialFields, setInitialField] = useState([]);
  const [fieldsValues, setFieldsValues] = useState({
    id: 0,
    Title: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFieldsValues({ ...fieldsValues, [e.target.name]: e.target.value });
  }

  let currentID = initialFields.length + 1;
  function handleClick(e) {
    e.preventDefault();
    const isOnTheList = initialFields.filter(
      (item) => item.Title === fieldsValues.Title
    ).length;
    if (isOnTheList) {
      setFieldsValues({
        Title: "",
      });

      setMessage(
        fieldsValues.Title + " " + "title, Is already added, Try again"
      );
    } else if (fieldsValues.Title === "" || fieldsValues.Title === " ") {
      setMessage("Please add a non empty value to add to the list");
    } else {
      setInitialField([
        ...initialFields,
        { id: currentID, Title: fieldsValues.Title },
      ]);
      setMessage(
        "A new title" +
          " (" +
          fieldsValues.Title +
          ") " +
          "has been added successfully"
      );

      setFieldsValues({
        Title: "",
      });
    }
  }

  function deleteTitle(el) {
    let currentId = el.id;
    setInitialField(initialFields.filter((items) => items.id !== currentId));
  }


  const [newItem , setNew] = useState(''); 
  const editTitle = (el) => {
    setFieldsValues({Title : el.Title})
    const newTitle = initialFields.map((element) => {
      element
    });
    /*  
    setInitialField([...initialFields , {Title: fieldsValues.Title}]) */
    /* 
    setFieldsValues({Title : el.Title})
    const newList = initialFields.map((element) => {
      element.Title === el.Title ? { ...element, Title: fieldsValues.Title } : element
    });
    setInitialField({initialFields : newList}); */
  };

  return (
    <>
      <TitlesSection>
        <Title>Navbar Titles</Title>

        <EditableNav>
          <Form>
            <Inputs>
              <TitleInput
                onChange={handleChange}
                type="text"
                value={fieldsValues.Title}
                placeholder="Enter Title"
                name="Title"
              />
            </Inputs>

            <Btn onClick={handleClick}>Save</Btn>
          </Form>
          <Message>{message}</Message>
          <Header>
            <Table>
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Title</Th>
                  <Th>Action</Th>
                </Tr>
              </thead>
              <tbody>
                {initialFields.map((el) => (
                  <Tr key={el.id}>
                    <Td>{el.id}</Td>
                    <Td>{el.Title}</Td>
                    <Td>
                      <Delete onClick={() => deleteTitle(el)}>
                        <AiFillDelete />
                      </Delete>
                      <Edit onClick={() => editTitle(el)}>
                        <BiCalendarEdit />
                      </Edit>
                    </Td>
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
