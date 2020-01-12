import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    background:${prop => prop.back ? "var(--mainDark)" : "var(--mainButton)"};
    border: none;
    color: var(--mainGrey);
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background:${prop => prop.back ? "#404040" : "#535a5f"};
    }
    &:focus{
        outline: none;
    }
`
