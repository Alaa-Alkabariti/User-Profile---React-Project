import styled from "styled-components";

export const SkillsList = styled.div `
    width: 80%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const SkillNo = styled.div`
     width: ${props => props.width};
     min-width: 250px;
     height: auto;
    border: 0.1px solid #eeeeee;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 50px;
    box-shadow: 3px 3px 3px #eeeeee;
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    align-items: center;
    
    &:hover {
        box-shadow: 5px 5px 5px #e1e1e3;
        cursor: pointer;
    }
`;

export const Title = styled.h3`
    color: #46079A; &:hover {
       transform: scale(1.1);
       box-shadow: 5px 5px 5px #eeeeee;     
         cursor: pointer;
font-weight: bold;
   }

`;

export const Experience = styled.p`
    color: #707070;
    &:hover {
       transform: scale(1.1);
       border-bottom: 2px solid black;
       box-shadow: 5px 5px 5px #eeeeee;
font-weight: bold;
       cursor: pointer;
   }
`;

export const Image = styled.img `
   &:hover {
       transform: scale(1.1);
       cursor: pointer;
       box-shadow: 5px 5px 5px #eeeeee;
   }
`