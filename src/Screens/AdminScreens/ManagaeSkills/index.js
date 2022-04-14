import React, { useState } from "react";
import MainLayout from "../../../Layout";
import {
  Button,
  ColumnFour,
  ColumnOne,
  ColumnThree,
  ColumnTwo,
} from "../ManageAbout/index.style";
import { Form, Input, Title, Inputs, Header, SkillList , ViewSkills} from "./index.style";

function ManagaeSkills() {
  const [initialSkillItem, setInitialSkillItem] = useState([]);
  const [skillItem, setSkillItem] = useState({
    id: "",
    Image: "",
    SkillName: "",
    Experience: "",
  });

  function handleChange(event) {
    console.log(event.target.value);
    setSkillItem({
      ...skillItem,
      [event.target.name]: event.target.value,
    });
    console.log("skillItem", event.target.value);
  }

  function handleSubmit(event) {
    console.log("akak");
    event.preventDefault();
    setInitialSkillItem([...initialSkillItem, skillItem]);
    console.log(skillItem);
    console.log(initialSkillItem);
    setSkillItem({
        Image: "",
        SkillName: "",
        Experience: "",
    });
    
  }

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
          <ColumnOne>Image Source</ColumnOne>
          <ColumnTwo>Skill Name</ColumnTwo>
          <ColumnThree>Experience(%)</ColumnThree>
        </Header>
        {initialSkillItem.map((el) => (
          <SkillList key={el.id++}>
            <ColumnOne>{el.Image}</ColumnOne>
            <ColumnTwo>{el.SkillName}</ColumnTwo>
            <ColumnThree>{el.Experience}</ColumnThree>
          </SkillList>
        ))}
        </ViewSkills>
      </MainLayout>
    </>
  );
}

export default ManagaeSkills;
