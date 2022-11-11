import styled from "styled-components";

export const Menu = styled.div`
    position: absolute;
    top: 102%;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: #FFFFFF;
    border-radius: 14px;
    border: 1px solid grey;
`;

export const MenuBtn = styled.button`
    padding: 10px;
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    border-bottom: 1px solid grey;
    background-color: transparent;
    cursor: pointer;

    & span {
        pointer-events: none;
    }

    &:hover, &:focus {
    background-color: grey;
    color: #fff;
    }
`;