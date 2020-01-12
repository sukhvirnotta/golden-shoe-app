import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    background: var(--mainDark);
    border: none;
    color: var(--mainGrey);
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #404040;
    }
    &:focus{
        outline: none;
    }
`
