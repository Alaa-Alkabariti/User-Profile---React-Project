import styled from "styled-components";

export const Aboutus = styled.div`
    width: 100%;
`;


export const Details = styled.div `
    width: ${props => props.width};
    height: auto;
    border: 0.1px solid #eeeeee;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3 `
    color: #46079A;
`;

export const Desc = styled.p `
    color: #707070;
`;