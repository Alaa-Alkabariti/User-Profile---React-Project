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
  AboutSec,
} from "./index.style";

function About(props) {
  const [title, setTitle] = useState("Bio");
  const [desc, setDesc] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo"
  );

  const [educItem, setEduItem] = useState([
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering11",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering22",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering33",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
  ]);

  const [expeItem, setExpetem] = useState([
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering1",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering2",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
    {
      /* number: `&#1011`, */
      certificateTitle: "Computer Engineering3",
      universityName: "Isalmic university",
      from: "12/3/2021",
      to: "12/2/2022",
    },
  ]);
  return (
    <>
      <Layout title="About" image="Images/personalPhoto.png">
        <AboutSec>
          <Details width="80%">
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
          </Details>
          <Education>
            {educItem.map((el) => (
              <EducationItem key={el.certificateTitle}>
                <Vertical top="44%"></Vertical>
                <Number>&#10112;</Number>
                <CertificateTitle>{el.certificateTitle} - </CertificateTitle>
                <UniversityName>{el.universityName}</UniversityName>
                <br></br>
                <FrotTo>
                  From {el.from} To {el.to}
                </FrotTo>
              </EducationItem>
            ))}
          </Education>

          <Experience>
            {expeItem.map((el) => (
              <EducationItem key={el.certificateTitle}>
                <Vertical top="71%  "></Vertical>
                <Number>&#10113;</Number>
                <CertificateTitle>{el.certificateTitle} - </CertificateTitle>
                <UniversityName>{el.universityName}</UniversityName>
                <br></br>
                <FrotTo>
                  From {el.from} To {el.to}
                </FrotTo>
              </EducationItem>
            ))}
          </Experience>
        </AboutSec>
      </Layout>
    </>
  );
}

export default About;
