import styled from "styled-components";

export const MenuContainer = styled.div`
    padding: 2rem 10rem 10rem 10rem;

    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["gray-800"]};
        font-size: 2rem;
        line-height: 1.3;
        font-weight: 900;
        margin-bottom: 3.375rem;
    }

`

export const MenuItems = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 70rem;

`