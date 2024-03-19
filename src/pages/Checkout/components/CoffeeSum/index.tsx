import { Trash } from "phosphor-react";
import { CoffeeInput, CoffeeText, CoffeeValues, CoffeesSum } from "./styles.ts"
// import CoffeeImage from "../../../../assets/Type=Tradicional.png"
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext.tsx";

interface CoffeeSumProps {
    title: string,
    price: number,
    image: string,
    quantity: number
}

export function CoffeeSum({ title, price, image, quantity }: CoffeeSumProps){
    const { newCartItem } = useContext(CartContext);

    return(
        <>
        {newCartItem.item.length > 0 ? (
                <CoffeesSum>
                <img src={image} alt="" />
                <CoffeeValues>
                    <CoffeeText>
                        <h3>{title}</h3>
                        <p>R$ {price}</p>  
                    </CoffeeText>
                    <CoffeeInput>
                        <input 
                            type="text" 
                            value={quantity} 
                        />
                        <button> <Trash color="#8047F8" /> REMOVER</button>
                    </CoffeeInput>
                </CoffeeValues>
                </CoffeesSum>
                )
            :
                (<CoffeesSum>
                
                </CoffeesSum>)
            }  
        </>
    )

}