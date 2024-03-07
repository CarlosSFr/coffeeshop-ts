import { styled } from "styled-components"

export const HeaderStyle = styled.header`
    padding: 2rem 10rem;
    //max-width: 70rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        color: ${props => props.theme["purple-700"]};
        border: none;
        border-radius: 6px;
        gap: 0.25rem;
        padding: 0.5rem;
        background-color: ${props => props.theme["purple-300"]};
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            padding: 0.5rem;
            background-color: ${props => props.theme["red-300"]};
    }
    }
`
