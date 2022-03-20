// import { SkillNo, Title, Desc } from "../SkillItem/index.style";
import { useState } from "react";
import { SkillsList, SkillNo, Title, Experience , Image ,LeftSide , Center ,RightSide } from "./index.style";
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
      title: "Css",
      expe: "95",
    },
    {
      image: "Images/javascript.png",
      title: "React",
      expe: "85",
    }, 
  ]);
  return (
    <>  
    <Layout title="Skills" image="Images/skills.png">
      <SkillsList>
        
        {skill.map((el) => (
          <SkillNo width="100%" key={el.title}>
            <LeftSide>
            <Image src={el.image}></Image>
            </LeftSide>
           <Center>
           <Title>{el.title}</Title>
           </Center>
           <RightSide>
            <Experience>{el.expe} %</Experience>
           </RightSide>
          </SkillNo>
        ))}
      </SkillsList>
      </Layout>
    </>
  );
}

export default Skills;
