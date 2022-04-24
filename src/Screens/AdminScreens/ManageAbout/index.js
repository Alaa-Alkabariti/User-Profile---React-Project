import React, { useState } from "react";
import EditableInternalNav from "../EditableInternalNav/index";
import { Input, Message } from "../EditableInternalNav/index.style";
import { AiFillDelete } from "react-icons/ai";
import { BiCalendarEdit } from "react-icons/bi";

import {
  EducationSection,
  Title,
  EducationForm,
  Button,
  ExperienceForm,
  EducationsListHeader,
  Delete,
  Table,
  Tr,
  Th,
  Td,
  BioForm,
  ViewBio,
  BioParagraph,
  Edit,Textarea,
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
  };

  let idy = initialFormDataEducation.length;
  const handleSubmitEducation = (e) => {
    e.preventDefault();
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
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [ExperienceMessage, setExperienceMessage] = useState("");
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
    const currentID = el.id;
    setInitialFormData(
      initialFormDataEducation.filter((items) => items.id !== currentID)
    );
    setInitialFormDataExperience(
      initialFormDataExperience.filter((items) => items.id !== currentID)
    );
  }

  function handleChangeExperience(e) {
    updateFormDataExperience({
      ...formDataExperience,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function handleSubmitExperience(e) {
    e.preventDefault();
    const experienceOnList = initialFormDataExperience.filter(
      (item) => item.id === formDataExperience.id
    ).length;

    if (experienceOnList) {
    }
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

  const [initialBio, setInitialBio] = useState();
  const [BioText, setBio] = useState({ text: "" });
  const [BioMessage, setBioMessage] = useState("");

  function handleChangeBio(e) {
    setBio({ [e.target.name]: e.target.value.trim() });
  }

  const SubmitBio = (e) => {
    e.preventDefault();
    if (BioText.text === "") {
      setBioMessage("Please add a non empty value");
    } else {
      setBioMessage("Bio has been added successfully");
      setInitialBio(BioText.text);
      setBio({ text: "" });
    }
  };


  let editBio = (initialBio) => {
    console.log('here is the el' , initialBio)
    setBio({text : initialBio.text})
  }


 



  return (
    <>
      <EditableInternalNav />
      <BioForm>
        <Title>User Bio</Title>
        <Textarea
          value={BioText.text}
          name="text"
          onChange={handleChangeBio}
          marginBottom="10px"
          width="49%"
          height="40px"
          marginRight="5px"
          placeholder="Bio..."
          type="text"
        />
        <Button onClick={SubmitBio}>ADD</Button>
        <Message>{BioMessage}</Message>
        <ViewBio>
        <Edit onClick={() => editBio(initialBio)}>
          <BiCalendarEdit /> Edit Bio
        </Edit>
          <BioParagraph>{initialBio}</BioParagraph>
        </ViewBio>
       
      </BioForm>

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
                    <Delete onClick={() => deleteItem(el)}>
                      <AiFillDelete />
                    </Delete>
                    <Edit>
                      <BiCalendarEdit />
                    </Edit>
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
              required
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
              required
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
              required
            />
            <Button onClick={handleSubmitExperience}>Save</Button>
          </EducationSection>
        </form>
        <Message>{ExperienceMessage}</Message>

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
                    <Delete onClick={() => deleteItem(el)}>
                      <AiFillDelete />
                    </Delete>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </EducationsListHeader>
      </ExperienceForm>
    </>
  );
}

export default ManageAbout;
