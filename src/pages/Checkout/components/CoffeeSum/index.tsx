import { Trash } from "phosphor-react";
import { CoffeeInput, CoffeeText, CoffeeValues, CoffeesSum } from "./styles.ts"
import CoffeeImage from "../../../../assets/Type=Tradicional.png"
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext.tsx";


export function CoffeeSum(){
    const { quantity } = useContext(CartContext)

    return(
        <CoffeesSum>
            <img src={CoffeeImage} alt="" />
            <CoffeeValues>
                <CoffeeText>
                    <h3>Expresso Tradicional</h3>
                    <p>R$ 9,90</p>
                </CoffeeText>
                <CoffeeInput>
                    <input type="text" value={quantity} />
                    <button> <Trash color="#8047F8" /> REMOVER</button>
                </CoffeeInput>
            </CoffeeValues>
        </CoffeesSum>
    )

}