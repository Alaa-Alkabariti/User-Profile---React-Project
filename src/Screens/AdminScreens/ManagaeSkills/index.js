import React, { useState } from "react";
import MainLayout from "../../../Layout";
import { Button, Delete, Table, Td, Th, Tr } from "../ManageAbout/index.style";
import { styled } from "styled-components";
import { Card, CardBottom, Inp, SkillNames, UploadImage } from "./index.style";
import { AiFillDelete } from "react-icons/ai";

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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

function ManagaeSkills() {
  const [initialSkillItem, setInitialSkillItem] = useState([]);
  const [skillItem, setSkillItem] = useState({
    id: 0,
    Image: "",
    SkillName: "",
    Experience: "",
  });

  const [updateSection, setUpdateSection] = useState("False");
  const [selectedImage, setSelectedImage] = useState();

  function handleChange(event) {
    console.log(event.target.value);

    setSkillItem({
      ...skillItem,
      [event.target.name]: event.target.value,
    });
    console.log("skillItem", event.target.value);
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
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
    if (event.target.files && event.target.files.length === 0) {
      setSelectedImage();
    }
  }

  function removeService(el) {
    setInitialSkillItem(
      initialSkillItem.filter((itemss) => itemss.id !== el.id)
    );
  }

  function EditITem(el) {
    setUpdateSection("true");
  }

  function handleImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  }

  return (
    <>
      {/* <MainLayout> */}
      <Form>
        <Title>Skills List</Title>
        <Inputs>
          {/* <label for="file">Upload Image</label> */}
          <UploadImage
            onChange={handleChange}
            value={skillItem.Image}
            placeholder="Image here"
            name="Image"
            type="file"
            accept="image/*"
          />

          <Input
            onChange={handleChange}
            value={skillItem.SkillName}
            placeholder="SkillName here"
            name="SkillName"
            type="text"
            maxlength="20"
            required
          />
          <Input
            onChange={handleChange}
            value={skillItem.Experience}
            placeholder="Percentage here"
            name="Experience"
            type="number"
            required
          />
        </Inputs>
        <Button onClick={handleSubmit}>Save</Button>
      </Form>

      <ViewSkills>
        {initialSkillItem.map((el) => (
          <Card>
            <Img src={URL.createObjectURL(selectedImage)} />
            <CardBottom>
              <SkillNames>{el.SkillName}</SkillNames>
              <p>{el.Experience}</p>

              <Delete onClick={() => removeService(el)}>
                <AiFillDelete />
              </Delete>
            </CardBottom>
          </Card>
        ))}
      </ViewSkills>
      {/*  <UpdateSection>
          <Input value={}/>
          <button onClick={SaveUpdate()}>Update</button>
        </UpdateSection> */}
      {/* </MainLayout> */}
    </>
  );
}

export default ManagaeSkills;
