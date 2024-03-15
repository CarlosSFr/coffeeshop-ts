import styled from "styled-components";


export const Container = styled.div`
    background-color: ${props => props.theme["gray-400"]};
    border: none;
    border-radius: 6px;
    width: 4.5rem;
    height: 2.375rem;
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;

    button{
        cursor: pointer;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-in-out;
        
        svg{
            color: ${props => props.theme["purple-500"]};
        }

        svg:hover{
            color: ${props => props.theme["purple-700"]};
        }
    }
    span{
        background: transparent;
        border: none;
        width: 1.25rem;
        text-decoration: none;
        text-align: center;
        font-family: "Roboto", sans-serif;
        color: ${props => props.theme["gray-900"]};
        font-size: 1rem;
    }
`
