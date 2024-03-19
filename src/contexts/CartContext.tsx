import { ReactNode, createContext, useEffect, useState } from "react";
import { coffees } from "../../data.json"

interface CartContextInputs { 
    handleCartButton: (quantity: number, coffeeId: string) => void,
    cartItem: number,
    newCartItem: CartItems | null,
    arrayItems: CartItems[],
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
      },
      quantity: number,
}

interface CartItems {
    item: CoffeeProps[],
}

export const CartContext = createContext({} as CartContextInputs)

export function CartContextProvider({ children }: CartContextProps){

    const [ cartItem, setCartItem ] = useState(0);
    const [ newCartItem, setNewCartItem ] = useState<CartItems | null>(null);
    const [ arrayItems, setArrayItems ] = useState<CartItems[]>([]);

function handleCartButton(quantity: number, coffeeId: string){       

    if (coffees.find(coffee => coffee.id === coffeeId)) {
        const newCartItem: CartItems = {
            item: [
                    {
                        coffee: coffees.find(coffee => coffee.id === coffeeId) || { id: "", title: "", description: "", tag: [], price: 0, image: "" },
                        quantity: quantity
                    }
                ],
        };
        setCartItem(cartItem + 1);
        setNewCartItem(newCartItem);
        setArrayItems(arrayItems => [...arrayItems, newCartItem])
    }
}

useEffect(() => {
    console.log(arrayItems);
}, [arrayItems, newCartItem])

    return (
        <CartContext.Provider
            value={{
                handleCartButton,
                cartItem,
                newCartItem,
                arrayItems,
            }}
        >
        {children}
        </CartContext.Provider>
    )
}