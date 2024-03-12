import styled from "styled-components";

export const SuccessContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between; 
    padding: 5rem 10rem;
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const LeftTitle = styled.div`
    gap: 4px;
    margin-bottom: 2.5rem;

    h1{
        font-family: "Baloo 2", sans-serif;
        line-height: 1.3;
        font-size: 2rem;
        color: ${props => props.theme["red-700"]};
    }
    p{
        font-family: "Roboto", sans-serif;
        line-height: 1.3;
        font-size: 1.25;
        color: ${props => props.theme["gray-800"]};
    }

`
export const Info = styled.div`
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${( props ) =>
    `linear-gradient(to bottom right, ${props.theme["red-500"]}, ${props.theme["purple-500"]})`};

`
export const DeliveryInfo = styled.div`
    padding: 40px 132px 40px 40px;
    background-color: white;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 2rem;
`
export const BaseInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

`
const CIRCLE_COLOR = {
    darkRed: 'red-700',
    red: 'red-500',
    purple: 'purple-500'
} as const

interface CircleProps {
    circleColor: keyof typeof CIRCLE_COLOR
}
export const IconStyle = styled.div<CircleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme[CIRCLE_COLOR[props.circleColor]]};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: white;

`
export const TextInfo = styled.div`
    font-family: "Roboto", sans-serif;
    line-height: 1.3;
    font-size: 1rem;


`

export const RightContainer = styled.div`
    img{
        height: 29rem;
    }

`

