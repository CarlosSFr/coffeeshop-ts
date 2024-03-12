import { Trash } from "phosphor-react";
import { CoffeeInput, CoffeeText, CoffeeValues, CoffeesSum } from "./styles.ts"
import CoffeeImage from "../../../../assets/Type=Tradicional.png"


export function CoffeeSum(){
    return(
        <CoffeesSum>
            <img src={CoffeeImage} alt="" />
            <CoffeeValues>
                <CoffeeText>
                    <h3>Expresso Tradicional</h3>
                    <p>R$ 9,90</p>
                </CoffeeText>
                <CoffeeInput>
                    <input type="text" />
                    <button> <Trash color="#8047F8" /> REMOVER</button>
                </CoffeeInput>
            </CoffeeValues>
        </CoffeesSum>
    )

}