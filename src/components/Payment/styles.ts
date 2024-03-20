import styled from 'styled-components'

export const Container = styled.label`
    padding: 1rem;
    color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["gray-400"]};
    border: 1px solid transparent;
    border-radius: 6px;
    gap: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 51px;
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;        
    font-weight: 400;

    &:hover {
        background-color: ${props => props.theme["gray-500"]};
        cursor: pointer;
    }

    &[data-state='true'] {
        background-color: ${props => props.theme["purple-300"]};
        border: 1px solid ${props => props.theme["purple-500"]};
    }

    input {
        display: none;
    }

    svg {
        color: ${props => props.theme["purple-500"]};
    }
    `