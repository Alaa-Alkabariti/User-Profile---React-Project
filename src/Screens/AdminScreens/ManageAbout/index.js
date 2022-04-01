import React from "react";
import Layout from "../../../Layout/index";
import EditableInternalNav from "../EditableInternalNav/index";
import { Input } from "../EditableInternalNav/index.style";
import {
  EducationSection,
  ExperienceSection,
  Title,
  EducationForm,
  Button,
  AddNew,
  ExperienceForm,
} from "./index.style";

function ManageAbout() {
  return (
    <>
      <EditableInternalNav />
      <EducationForm>
        <Title>Education</Title>

        <AddNew> +Add New</AddNew>
        <EducationSection>
          <Input
            marginBottom="10px"
            width="49%"
            height="40px"
            marginRight="5px"
            placeholder="Faculty Name..."
          />
          <Input
            marginBottom="10px"
            width="49%"
            height="40px"
            placeholder="University Name..."
          />
          <Input
            type="date"
            marginBottom="10px"
            width="49%"
            height="40px"
            marginRight="5px"
            placeholder="EFrom..."
          />
          <Input
            type="date"
            marginBottom="10px"
            width="49%"
            height="40px"
            placeholder="To..."
          />
          <Button>Save</Button>
        </EducationSection>
      </EducationForm>

      <ExperienceForm>
        <Title>Experience</Title>

        <AddNew> +Add New</AddNew>
        <EducationSection>
          <Input
            marginBottom="10px"
            width="49%"
            height="40px"
            marginRight="5px"
            placeholder="Certificate Title..."
          />
          <Input
            marginBottom="10px"
            width="49%"
            height="40px"
            placeholder="University Name..."
          />
          <Input
            type="date"
            marginBottom="10px"
            width="49%"
            height="40px"
            marginRight="5px"
            placeholder="EFrom..."
          />
          <Input
            type="date"
            marginBottom="10px"
            width="49%"
            height="40px"
            placeholder="To..."
          />
          <Button>Save</Button>
        </EducationSection>
      </ExperienceForm>

      {/*  <ExperienceSection>
          <Title></Title>
        </ExperienceSection> */}
    </>
  );
}

export default ManageAbout;
