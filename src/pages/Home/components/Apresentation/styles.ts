import styled from "styled-components";


export const ApresentationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0 3.5rem;
    padding: 5.75rem 10rem;
    
    img{
        max-height: 23rem;
    }

`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme["gray-900"]};
        font-size: 3rem;
        line-height: 1.3;
        margin-bottom: 1rem;
        font-weight: 900;
    }
    h4{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        color: ${props => props.theme["gray-800"]};
        font-size: 1.25rem;
        line-height: 1.3;
        margin-bottom: 4.125rem;
    }

`

export const IconsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1rem;
    max-width: 38rem;
    gap: 1.25rem 0;
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme["gray-700"]};
`

export const IconText = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const CIRCLE_COLOR = {
    darkRed: 'red-700',
    red: 'red-500',
    gray: 'gray-700',
    purple: 'purple-500'
} as const

interface CircleProps {
    circleColor: keyof typeof CIRCLE_COLOR
}

export const IconsCircle = styled.div<CircleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme[CIRCLE_COLOR[props.circleColor]]};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: white;
`