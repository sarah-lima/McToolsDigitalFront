import styled from "styled-components";

export const Menu = styled.header`
    background-color: #28666E;
    /* width: 100%; */
    height: 95px;
    color: white;
    font-weight: bold;
    font-size: 22px;
    padding-left: 10%;
    display: flex;
    align-items: center;
    @media (max-width: 800px){
        padding: 0;
        justify-content: center;
        font-size: 18px;
        height: 90px;
    }
`