import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        /* box-shadow: 0 0 0 2px ${props => props.theme['red-700']} */
    }

    body{
        background-color: ${props => props.theme['gray-100']};
        color: ${props => props.theme['gray-700']};
    }

    input, button, textarea{
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

`