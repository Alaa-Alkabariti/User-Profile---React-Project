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
  EducationsListHeader,
  Delete,
  Table,
  Message,
  Tr,
  Th,
  Td,
} from "./index.style";

function ManageAbout() {
  const [message, setMessage] = useState("");
  const [initialFormDataEducation, setInitialFormData] = useState([]);
  const [formDataEducation, updateFormData] = useState({
    id: 1,
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
    console.log("formData", formDataEducation.id);
  };

  let idy = initialFormDataEducation.length;
  const handleSubmitEducation = (e) => {
    e.preventDefault();
    console.log("Number of education list items", formDataEducation.id);
    setInitialFormData([
      ...initialFormDataEducation,
      {
        id: idy,
        Faculty: formDataEducation.Faculty,
        University: formDataEducation.University,
        From: formDataEducation.From,
        To: formDataEducation.To,
      },
    ]);

    setMessage("Element #" + (idy + 1) + " was added successfully");
    updateFormData({ Faculty: "", University: "", From: "", To: "" });
    console.log(initialFormDataEducation);
  };



  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [initialFormDataExperience, setInitialFormDataExperience] = useState(
    []
  ); //array
  const [formDataExperience, updateFormDataExperience] = useState({
    id: 0,
    Certificate: "",
    University2: "",
    From2: "",
    To2: "",
  });
  let idExp = initialFormDataExperience.length;

  function deleteItem(el) {
    const currentID = el.id
    setInitialFormData(initialFormDataEducation.filter((items) => items.id !== currentID)) 
    setInitialFormDataExperience(initialFormDataExperience.filter((items) => items.id !== currentID)) 
  }

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
      {
        id: idExp,
        Certificate: formDataExperience.Certificate,
        University2: formDataExperience.University2,
        From2: formDataExperience.From2,
        To2: formDataExperience.To2,
      },
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
          {initialFormDataEducation.length === 0 ? "" : <>{message}</>}
          <EducationsListHeader>
            <Table>
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Faculty Name</Th>
                  <Th>University Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Action</Th>
                </Tr>
              </thead>
              <tbody>
                {initialFormDataEducation.map((el) => (
                  <Tr key={el.id}>
                    <Td>{el.id + 1}</Td>
                    <Td>{el.Faculty}</Td>
                    <Td>{el.University}</Td>
                    <Td>{el.From}</Td>
                    <Td>{el.To}</Td>
                    <Td>
                      <Delete onClick={() => deleteItem(el)}>Delete</Delete>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </EducationsListHeader>
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
            <Table>
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Certificate Ttile</Th>
                  <Th>University Name</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Action</Th>
                </Tr>
              </thead>
              <tbody>
                {initialFormDataExperience.map((el) => (
                  <Tr key={el.id}>
                    <Td>{el.id + 1}</Td>
                    <Td>{el.Certificate}</Td>
                    <Td>{el.University2}</Td>
                    <Td>{el.From2}</Td>
                    <Td>{el.To2}</Td>
                    <Td>
                      <Delete onClick={() => deleteItem(el)}>Delete</Delete>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </EducationsListHeader>
        </ExperienceForm>
      </MainLayout>
    </>
  );
}

export default ManageAbout;
