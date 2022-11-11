import styled from "styled-components";

export const StyledSelectedOption = styled.div`
    padding: 10px;
    border-radius: 14px;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    margin-right: ${({ theme: { sizes: { selectedOption } } }) => `${selectedOption.margin}px`};
    
    & span {
        margin-right: 15px;
    }
`;

export const RemoveBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 25px;
    height: 25px;
    
    & svg {
    pointer-events: none;
    width: 100%;
    height: 100%;
    }
`;
