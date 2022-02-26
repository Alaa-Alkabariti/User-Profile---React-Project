import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json";
import dot from "../../../Images/dot.png"


const Item = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

&:hover{
        border: 1px solid #eeeeee;
        cursor: pointer;
    }
`;

const Image = styled.img`
    width: auto;
    height: auto;
`;

const EngageDesc = styled.p`
    font-size: 18px;
    color: #707070;
    min-width: 300px;
`



function EngagingItem(props) {
    return(
        <Item>
            <Image src={dot} alt="dot icon" />
            <EngageDesc>{props.Desc}</EngageDesc>
        </Item>
    )
}
export default EngagingItem