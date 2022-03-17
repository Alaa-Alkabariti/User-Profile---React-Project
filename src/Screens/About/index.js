import { useState } from "react";
import Layout from "../../Layout";
import {
  Aboutus,
  Desc,
  Details,
  Title,
  Education,
  Experience,
  EducationItem,
  CertificateTitle,
  UniversityName,
  FrotTo,
  Number,
  Vertical,
} from "./index.style";

function About(props) {
  const [details, setDetails] = useState([
    {
      title: "Bio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
    },
  ]);

  const [educItem , setEduItem] = useState([
    {
      /* number: `&#1011`, */
      certificateTitle: 'Computer Engineering',
      universityName: 'Isalmic university',
      from:'12/3/2021',
      to:'12/2/2022',
    },
    {
      /* number: `&#1011`, */
      certificateTitle: 'Computer Engineering',
      universityName: 'Isalmic university',
      from:'12/3/2021',
      to:'12/2/2022',
    },
    {
      /* number: `&#1011`, */
      certificateTitle: 'Computer Engineering',
      universityName: 'Isalmic university',
      from:'12/3/2021',
      to:'12/2/2022',
    },
  ])
  return (
    <>
      <Layout title="About" image="Images/personalPhoto.png">
        <Details width="80%">
          <Title>{details.title}</Title>
          <Desc>{details.desc}</Desc>
        </Details>
        <Education>
          Education
        {educItem.map(el => 
          <EducationItem>
            <Vertical></Vertical>
            <Number>&#10112;</Number> 
            <CertificateTitle>{el.certificateTitle} - </CertificateTitle> 
            <UniversityName>{el.universityName}</UniversityName>
            <br></br>
            <FrotTo>From {el.from} To {el.to}</FrotTo>
        </EducationItem>
        )}
        </Education>

        <Experience>
        {educItem.map(el => 
          <EducationItem>
            <Vertical></Vertical>
            <Number>&#10113;</Number> 
            <CertificateTitle>{el.certificateTitle} - </CertificateTitle> 
            <UniversityName>{el.universityName}</UniversityName>
            <br></br>
            <FrotTo>From {el.from} To {el.to}</FrotTo>
        </EducationItem>
        )}
        </Experience>
      </Layout>
    </>
  );
}

export default About;
