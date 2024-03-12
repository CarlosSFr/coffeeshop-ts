import styled from "styled-components";


export const CheckoutContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5rem 10rem 20rem 10rem;
    
`
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    h1{
        margin-bottom: 15px;
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        line-height: 1.3;
        font-weight: bold;
    }

`
export const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 0.05fr 1fr;

    p{
        grid-column: 2;
        margin-bottom: 2rem;
        color: ${props => props.theme["gray-700"]};
        font-size: 0.875rem;
        line-height: 1.3;
        font-family: "Roboto", sans-serif;
    }

    span{
        color: ${props => props.theme["gray-700"]};
        font-size: 1rem;
        line-height: 1.3;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px;
    margin-bottom: 0.75rem;

    input{
        border-radius: 4px;
        background-color: ${props => props.theme["gray-300"]};
        border: 1px solid ${props => props.theme["gray-400"]};;
        color: ${props => props.theme["gray-600"]};
        padding: 0.75rem;
    }

`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1rem;
`
export const NumberComplement = styled.div`
    display: flex;
    gap: 0.75rem;
`
export const NeighborCity = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px;

    p{
        margin-bottom: 2rem;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 0.75rem;

`
export const PaymentButton = styled.button`
    padding: 1rem;
    color: ${props => props.theme["gray-700"]};
    background-color: ${props => props.theme["gray-400"]};
    border: none;
    border-radius: 6px;
    gap: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 51px;
    white-space: nowrap;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    h1{
        margin-bottom: 15px;
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        line-height: 1.3;
        font-weight: bold;
    }
`

export const EndCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["gray-200"]};
    border-radius: 6px 36px 6px 36px;
    padding: 1rem 2.5rem 2.5rem 2.5rem;
    width: 28rem;

    a{
        text-decoration: none;
        background-color: ${props => props.theme["red-500"]};
        color: ${props => props.theme["white"]};
        width: 100%;
        border-radius: 6px;
    }
`

export const SumContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    gap: 0.75rem;
`
export const TotalItens = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme["gray-700"]};
    font-size: 0.875;
    line-height: 1.3;
    font-weight: 400;
`
export const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme["gray-800"]};
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;

`

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["red-500"]};
    color: ${props => props.theme["white"]};
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 6px;

`