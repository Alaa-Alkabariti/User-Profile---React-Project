import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Button, Delete, Table, Td, Th, Tr } from "../ManageAbout/index.style";
import {
  Form,
  Input,
  Title,
  Inputs,
  Header,
  ViewSkills,
  Img,
  UpdateSection,
} from "./index.style";

function ManagaeSkills() {
  const [initialSkillItem, setInitialSkillItem] = useState([]);
  const [skillItem, setSkillItem] = useState({
    id: 0,
    Image: "",
    SkillName: "",
    Experience: "",
  });

  const [updateSection, setUpdateSection] = useState("False");

  function handleChange(event) {
    console.log(event.target.value);
    setSkillItem({
      ...skillItem,
      [event.target.name]: event.target.value,
    });
    console.log("skillItem", event.target.value);
  }
  let currentId = initialSkillItem.length;

  function handleSubmit(event) {
    event.preventDefault();
    setInitialSkillItem([
      ...initialSkillItem,
      {
        id: currentId,
        Image: skillItem.Image,
        SkillName: skillItem.SkillName,
        Experience: skillItem.Experience,
      },
    ]);
    setSkillItem({
      Image: "",
      SkillName: "",
      Experience: "",
    });
  }

  function removeService(el) {
    setInitialSkillItem(
      initialSkillItem.filter((itemss) => itemss.id !== el.id)
    );
  }

  function EditITem(el) {
    setUpdateSection("true");
  }

  /* function SaveUpdate(el) {

  } */

  return (
    <>
      <MainLayout>
        <Form>
          <Title>Skills List</Title>
          <Inputs>
            <Input
              onChange={handleChange}
              value={skillItem.Image}
              placeholder="Image here"
              name="Image"
            />
            <Input
              onChange={handleChange}
              value={skillItem.SkillName}
              placeholder="SkillName here"
              name="SkillName"
            />
            <Input
              onChange={handleChange}
              value={skillItem.Experience}
              placeholder="Percentage here"
              name="Experience"
            />
          </Inputs>
          <Button onClick={handleSubmit}>Save</Button>
        </Form>
        <ViewSkills>
          <Header>
            <Table>
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Image Link</Th>
                  <Th>SkillName</Th>
                  <Th>Experience</Th>
                  <Th>Action</Th>
                </Tr>
              </thead>
              <tbody>
                {initialSkillItem.map((el) => (
                  <Tr>
                    <Td>{el.id + 1}</Td>
                    <Td>
                      <Img src={el.Image} alt="skill image" />
                    </Td>
                    <Td>{el.SkillName}</Td>
                    <Td>{el.Experience}</Td>
                    <Td>
                      <Delete onClick={() => removeService(el)}>Delete</Delete>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Header>
        </ViewSkills>
        {/*  <UpdateSection>
          <Input value={}/>
          <button onClick={SaveUpdate()}>Update</button>
        </UpdateSection> */}
      </MainLayout>
    </>
  );
}

export default ManagaeSkills;
