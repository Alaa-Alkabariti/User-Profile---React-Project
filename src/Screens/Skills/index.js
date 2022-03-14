// import { SkillNo, Title, Desc } from "../SkillItem/index.style";
import { useState } from "react";
import { SkillsList, SkillNo, Title, Desc } from "./index.style";
import Layout from "../../Layout";

function Skills() {
  const [skill, setSkill] = useState([
    {
      title: "skill1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      title: "skill2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      title: "skill3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      title: "skill4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      title: "skill5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    {
      title: "skill6",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
  ]);
  return (
    <>  
    <Layout title="Skills" image="/public/Images/personalPhoto.png">
      <SkillsList>
        
        {skill.map((el) => (
          <SkillNo width="48.5%" key={el.title}>
            <Title>{el.title}</Title>
            <Desc>{el.desc}</Desc>
          </SkillNo>
        ))}
      </SkillsList>
      </Layout>
    </>
  );
}

export default Skills;
