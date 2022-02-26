import React from "react";
import styled from "styled-components";
import Utilization from "../../../Components/Utilization/en.json"
import profily from "../../../Images/Profily.png";


const media = {
    mobile : `@media(min-width : 320px)`
}


const footerSection = styled.div `
    width: 100%;
    height: auto;
    background-color: white;
`

const Text = styled.p `
    color: #707070;
    font-size: 14px;
    text-align: center;
`;

const Img = styled.img `
    height: 30px;

`

function Footer() {
    return(
      <Text>{Utilization["ٌRights"]} <Img src={profily} alt="logo" /></Text>
    )
}

export default Footer