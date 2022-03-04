import React from "react";
import {Desc , Title , SkillNo} from '../SkillItem/index.style'
function Skill(props) {
    return(
        <SkillNo>
            <Title>{props.title}</Title>
            <Desc>{props.desc}</Desc>
        </SkillNo>
    )
}

export default Skill