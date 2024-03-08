import styled from "styled-components";

export const ProductDiv = styled.div`
    width: 16rem;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px 36px 6px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 1.25rem 1.25rem 1.25rem;

     img{
         margin-top: -20px;
         width: 120px;
         height: 120px;
         align-self: center;
     }

`
export const TagCoffee = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        span{
            display: flex;
            align-items: center;
            padding: 4px 8px 4px 8px;
            justify-content: center;
            background-color: ${props => props.theme["red-300"]};
            height: 1.3125rem;
            border-radius: 100px;
            color: ${props => props.theme["red-700"]};
            font-size: 0.625rem;
            line-height: 1.3;
            font-weight: bold;
            font-family: "Roboto", sans-serif;
            margin: 12px 0 16px 0;
        }

`

export const TittleCoffee = styled.p`
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 8px;
`

export const CoffeeText = styled.p`
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
    color: ${props => props.theme["gray-600"]};
    margin-bottom: 2.0625rem;
`

export const CartItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const PriceTag = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 1.4375rem;
    color: ${props => props.theme["gray-700"]};
    font-family: "Roboto", sans-serif;
    font-weight: 500;

     p{
        font-family: "Baloo 2", sans-serif;
        font-size: 1.5rem;
        line-height: 1.3;
        font-weight: 700;
        color: ${props => props.theme["gray-700"]};
     }

`

export const QtyInput = styled.input`
    background-color: ${props => props.theme["gray-400"]};
    border: none;
    border-radius: 6px;
    width: 4.5rem;
    height: 2.375rem;
    margin-right: 0.5rem;
`
export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.375rem;
    border: none;
    background-color: ${props => props.theme["purple-700"]};
    border-radius: 6px;

`