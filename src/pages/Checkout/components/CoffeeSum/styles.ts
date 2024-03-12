import styled from "styled-components"

export const CoffeesSum = styled.div`
    display: flex;
    gap: 1.25rem;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};
    padding: 1.5rem 0.25rem;
    width: 100%;

    img{
        height: 64px;
    }

`
export const CoffeeValues = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const CoffeeText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h3{
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        color: ${props => props.theme["gray-800"]};
        font-size: 1rem;
        font-weight: 400;
    }
    p{
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        color: ${props => props.theme["gray-800"]};
        font-size: 1rem;
        font-weight: 700;
    }

`
export const CoffeeInput = styled.div`
    display :flex;
    gap: 0.5rem;

    input{
        border: none;
        border-radius: 6px;
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 1rem;
        color: ${props => props.theme["gray-900"]};
        background-color: ${props => props.theme["gray-400"]};
        padding: 5.5px;
        max-width: 4.5rem;
    }
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 6px;
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 1rem;
        color: ${props => props.theme["gray-700"]};
        background-color: ${props => props.theme["gray-400"]};
        padding: 6.5px 0.5rem;
        gap: 0.25rem;
    }

`