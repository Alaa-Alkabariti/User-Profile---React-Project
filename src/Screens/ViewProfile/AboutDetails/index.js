import React from "react";
import {Details , Desc , Title} from './index.style'
import {useState} from 'react'

function AboutDetails(props) {
    const [details , setDetails] = useState([
        {title : 'Bio' , desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo'},
        {title : 'Education' , desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo'},
        {title : 'Experience' , desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bo'}
    ]);
    return(
        <div>
            {details.map(el => 
                <Details width="80%" key={el.title}>
                    <Title>{el.title}</Title> 
                    <Desc>{el.desc}</Desc>
                </Details>
            )}
        </div>
    )
}

export default AboutDetails;

