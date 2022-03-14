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
   
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    color: #46079A;
`;

export const Desc = styled.p`
    color: #707070;
`;