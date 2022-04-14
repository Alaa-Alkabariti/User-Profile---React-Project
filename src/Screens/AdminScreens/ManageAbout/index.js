import React, { useState } from "react";
import MainLayout from "../../../Layout/index";
import EditableInternalNav from "../EditableInternalNav/index";
import { Input } from "../EditableInternalNav/index.style";
import {
  EducationSection,
  Title,
  EducationForm,
  Button,
  ExperienceForm,
  EducationsList,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ColumnFour,
  EducationsListHeader,
} from "./index.style";

function ManageAbout() {
  const [initialFormDataEducation, setInitialFormData] = useState([]);
  const [formDataEducation, updateFormData] = useState({
    Faculty: "",
    University: "",
    From: "",
    To: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formDataEducation,
      [e.target.name]: e.target.value.trim(),
    });
    console.log("formData", formDataEducation);
  };

  const handleSubmitEducation = (e) => {
    e.preventDefault();
    setInitialFormData([...initialFormDataEducation, formDataEducation]);
    updateFormData({ Faculty: "", University: "", From: "", To: "" });
  };
  console.log(formDataEducation); //for testing

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [initialFormDataExperience, setInitialFormDataExperience] = useState(
    []
  ); //array
  const [formDataExperience, updateFormDataExperience] = useState({
    Certificate: "",
    University2: "",
    From2: "",
    To2: "",
  });

  function handleChangeExperience(e) {
    updateFormDataExperience({
      ...formDataExperience, //to keep the all inputs values
      [e.target.name]: e.target.value.trim(),
    });
    console.log("e", e.target.value);
  }

  function handleSubmitExperience(e) {
    e.preventDefault();
    console.log("alaa");
    setInitialFormDataExperience([
      ...initialFormDataExperience,
      formDataExperience,
    ]);
    updateFormDataExperience({
      Certificate: "",
      University2: "",
      From2: "",
      To2: "",
    });
  }
  return (
    <>
      <MainLayout>
        <EditableInternalNav />
        <EducationForm>
          <Title>Education</Title>
          <form>
            <EducationSection>
              <Input
                value={formDataEducation.Faculty}
                name="Faculty"
                onChange={handleChange}
                marginBottom="10px"
                width="49%"
                height="40px"
                marginRight="5px"
                placeholder="Faculty Name..."
                type="text"
              />
              <Input
                value={formDataEducation.University}
                name="University"
                onChange={handleChange}
                marginBottom="10px"
                width="49%"
                height="40px"
                placeholder="University Name..."
              />
              <Input
                value={formDataEducation.From}
                name="From"
                onChange={handleChange}
                type="date"
                marginBottom="10px"
                width="49%"
                height="40px"
                marginRight="5px"
                placeholder="From..."
              />
              <Input
                value={formDataEducation.To}
                name="To"
                onChange={handleChange}
                type="date"
                marginBottom="10px"
                width="49%"
                height="40px"
                placeholder="To..."
              />
              <Button onClick={handleSubmitEducation}>ADD</Button>
            </EducationSection>
          </form>
          <EducationsListHeader>
            <ColumnOne>Faculty Name</ColumnOne>
            <ColumnTwo>University Name</ColumnTwo>
            <ColumnThree>Started Date</ColumnThree>
            <ColumnFour>End Date</ColumnFour>
          </EducationsListHeader>
          {initialFormDataEducation.map((el) => (
            <EducationsList key={el.i++}>
              <ColumnOne>{el.Faculty}</ColumnOne>
              <ColumnTwo>{el.University}</ColumnTwo>
              <ColumnThree>{el.From}</ColumnThree>
              <ColumnFour>{el.To}</ColumnFour>
            </EducationsList>
          ))}
        </EducationForm>

        <ExperienceForm>
          <Title>Experience</Title>

          <form>
            <EducationSection>
              <Input
                onChange={handleChangeExperience}
                marginBottom="10px"
                width="49%"
                height="40px"
                marginRight="5px"
                placeholder="Certificate Title..."
                value={formDataExperience.Certificate}
                name="Certificate"
              />
              <Input
                onChange={handleChangeExperience}
                marginBottom="10px"
                width="49%"
                height="40px"
                value={formDataExperience.University2}
                name="University2"
                placeholder="University Name..."
              />
              <Input
                onChange={handleChangeExperience}
                type="date"
                value={formDataExperience.From2}
                marginBottom="10px"
                width="49%"
                height="40px"
                name="From2"
                marginRight="5px"
              />
              <Input
                onChange={handleChangeExperience}
                type="date"
                value={formDataExperience.To2}
                marginBottom="10px"
                width="49%"
                name="To2"
                height="40px"
                placeholder="To..."
              />
              <Button onClick={handleSubmitExperience}>Save</Button>
            </EducationSection>
          </form>
          <EducationsListHeader>
            <ColumnOne>Certificate Ttile</ColumnOne>
            <ColumnTwo>University Name</ColumnTwo>
            <ColumnThree>Start Date</ColumnThree>
            <ColumnFour>End Date</ColumnFour>
          </EducationsListHeader>
          {initialFormDataExperience.map((el) => (
            <EducationsList key={el.i++}>
              <ColumnOne>{el.Certificate}</ColumnOne>
              <ColumnTwo>{el.University2}</ColumnTwo>
              <ColumnThree>{el.From2}</ColumnThree>
              <ColumnFour>{el.To2}</ColumnFour>
            </EducationsList>
          ))}
        </ExperienceForm>
      </MainLayout>
    </>
  );
}

export default ManageAbout;
