import styled from "styled-components";

export const Select = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 14px;
    border: ${({theme: {sizes: {select}}}) => `${select.border}px solid grey`};
    height: 40px;
    padding: ${({theme: {sizes: {select}}}) => `${select.padding}px`};
`;

export const DropDownBtn = styled.button`
margin-left: auto;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border: none;
background-color: transparent;
cursor: pointer;

& svg {
    width: 100%;
    height: 100%;
}
`