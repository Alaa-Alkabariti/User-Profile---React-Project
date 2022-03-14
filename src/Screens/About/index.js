import { useState } from "react";
import Layout from "../../Layout";
import { Aboutus, Desc, Details, Title } from "./index.style";
/* import personal from "personalPhoto.png"; */
function About(props) {
  const [details, setDetails] = useState([
    {
      title: "Bio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
    },
    {
      title: "Education",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
    },
    {
      title: "Experience",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo",
    },
  ]);
  return (
    <Layout title="About" >
      {details.map((el) => (
        <Details width="80%" key={el.title}>
          <Title>{el.title}</Title>
          <Desc>{el.desc}</Desc>
        </Details>
      ))}
    </Layout>
  );
}

export default About;
