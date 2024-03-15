import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface InputProps{
    decreaseValue: () => void,
    increaseValue: () => void,
    quantity: number
}

export function QtdInput({
    decreaseValue,
    increaseValue,
    quantity,
    }: InputProps){
    return (
        <Container>
            <button onClick={decreaseValue} >
                <Minus size={14}/>
            </button>
            
                <span>{quantity}</span>

            <button onClick={increaseValue} >
                <Plus size={14} />
            </button>
        </Container>
    )
}