import React, { useState } from "react";
import {Details , Title , Desc} from '../AboutDetails/index.style';

function Services() {
    const [details , setDetails] = useState([
        {title : 'Service 1' , desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '},
        {title : 'Service 2' , desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '},
        {title : 'Service 3' , desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '},
        {title : 'Service 4' , desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '},
    ])
    return(
        <div>
            {details.map(el => 
                <Details width="75%" key={el.title}>
                    <Title>{el.title}</Title> 
                    <Desc>{el.desc}</Desc>
                </Details>
            )}
        </div>
    )
}

export default Services