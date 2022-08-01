import styled from "styled-components";

export const CardComponent = styled.div`
    width: 960px;
    height: 66px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding:0 5%;
    margin: 35px 0;
    align-items: center;
    @media (max-width: 800px) {
        width: 90%;
    }
`