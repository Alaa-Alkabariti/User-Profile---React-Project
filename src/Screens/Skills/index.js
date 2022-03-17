// import { SkillNo, Title, Desc } from "../SkillItem/index.style";
import { useState } from "react";
import { SkillsList, SkillNo, Title, Experience , Image } from "./index.style";
import Layout from "../../Layout";

function Skills() {
  const [skill, setSkill] = useState([
     {
      image: "Images/html.png",
      title: "HTML",
      expe: "95",
    },
    {
      image: "Images/javascript.png",
      title: "JavaScript",
      expe: "85",
    }, 
    {
      image: "Images/html.png",
      title: "HTML",
      expe: "95",
    },
    {
      image: "Images/javascript.png",
      title: "JavaScript",
      expe: "85",
    }, 
  ]);
  return (
    <>  
    <Layout title="Skills" image="Images/skills.png">
      <SkillsList>
        
        {skill.map((el) => (
          <SkillNo width="100%" key={el.title}>
            <Image src={el.image}></Image>
            <Title>{el.title}</Title>
            <Experience>{el.expe} %</Experience>
          </SkillNo>
        ))}
      </SkillsList>
      </Layout>
    </>
  );
}

export default Skills;
