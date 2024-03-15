import { ReactNode, createContext, useState } from "react";
// import { coffees } from "../../data.json"

interface CartContextInputs { 
    handleCartButton: () => void,
    cartItem: number,
    quantity: number,
    increaseValue: () => void,
    decreaseValue: () => void,
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
    // coffee: CoffeeProps[],
    quantity: number,
}

export const CartContext = createContext({} as CartContextInputs)

export function CartContextProvider({ children }: CartContextProps){

    const [ quantity, setQuantity ] = useState(1);

    const [ cartItem, setCartItem ] = useState(0);

    function handleCartButton(){
        const newCartItem: CartItems = {
            quantity: quantity,
        }
        setCartItem(cartItem + 1);
        console.log(newCartItem);
    }
    function increaseValue(){
        setQuantity(quantity + 1)
    }

    function decreaseValue(){
        setQuantity(quantity - 1)
    }

    return (
        <CartContext.Provider
            value={{
                handleCartButton,
                cartItem,
                quantity,
                increaseValue,
                decreaseValue
            }}
        >
        {children}
        </CartContext.Provider>
    )
}