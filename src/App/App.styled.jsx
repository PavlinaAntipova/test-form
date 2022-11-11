import styled from "styled-components";

export const Container = styled.div`
     padding: 50px 15px;
   max-width: 800px;
   margin: 0 auto;
    background: #FFFFFF;
    border-radius: 40px;
`;

export const Title = styled.h1`
 text-align: center;
`;

export const Navigation = styled.ul`
 display: flex;
justify-content: center;

& li {
    margin-right: 30px; 

    &:last-child {
    margin-right: 0;
    }
}
`;
