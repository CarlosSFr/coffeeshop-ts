import { ReactNode, createContext, useState } from "react";
import { coffees } from "../../data.json"

interface CartContextInputs { 
    handleCartButton: (quantity: number, coffeeId: string) => void,
    cartItem: number,
    newCartItem: CartItems | null,
}

interface CartContextProps {
    children: ReactNode
}

export interface CoffeeProps {
      coffee: {
        id: string,
        title: string,
        description: string,
        tag: string[],
        price: number,
        image: string,
      }
}

interface CartItems {
    quantity: number,
    item: CoffeeProps[],
}

export const CartContext = createContext({} as CartContextInputs)

export function CartContextProvider({ children }: CartContextProps){

    const [ cartItem, setCartItem ] = useState(0);
    const [ newCartItem, setNewCartItem ] = useState<CartItems | null>(null);

    function handleCartButton(quantity: number, coffeeId: string){
        const existingCartItem = newCartItem;
        
        if (coffees.find(coffee => coffee.id === coffeeId)) {
            const newCoffeeItem: CoffeeProps = {
                coffee: coffees.find(coffee => coffee.id === coffeeId) || { id: "", title: "", description: "", tag: [], price: 0, image: "" }
            }
            
            if (existingCartItem) {
                const updatedCartItem: CartItems = {
                    quantity: quantity,
                    item: [...existingCartItem.item, newCoffeeItem],
                };
                setNewCartItem(updatedCartItem); // Atualizando o newCartItem
            } else {
                const newCartItem: CartItems = {
                    quantity: quantity,
                    item: [newCoffeeItem],
                };
                setNewCartItem(newCartItem); // Definindo o novo newCartItem
            }

            setCartItem(cartItem + 1);
            console.log(newCartItem);
            // console.log(cartItem)
        }
    }


    return (
        <CartContext.Provider
            value={{
                handleCartButton,
                cartItem,
                newCartItem,
            }}
        >
        {children}
        </CartContext.Provider>
    )
}