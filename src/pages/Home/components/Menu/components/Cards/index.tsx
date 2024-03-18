import { useContext, useState } from "react";
import { QtdInput } from "../../../../../../components/QtdInput";
import { CoffeeText, CartItems, ProductDiv, TagCoffee, TittleCoffee, PriceTag, CartButton } from "./styles";
// import Tradicional from "../../../../../assets/Type=Tradicional.png"
import { ShoppingCart } from "phosphor-react"
import { CartContext, CoffeeProps } from "../../../../../../contexts/CartContext";

export function ProductContainer( {coffee}: CoffeeProps ){
    const { handleCartButton } = useContext(CartContext);

    const [ quantity, setQuantity ] = useState(1);

    function increaseValue(){
        setQuantity(quantity + 1)
    }

    function decreaseValue(){
        setQuantity(quantity - 1)
    }

    //const coffeeId = coffee.id;

    return (
        <>
            <ProductDiv>
                <img src={coffee.image} alt="" />
                <TagCoffee>
                    {coffee.tag.map((tags) => (
                        <span key={tags}>{tags}</span>
                ))}
                </TagCoffee>
                <TittleCoffee>{coffee.title}</TittleCoffee>
                <CoffeeText>{coffee.description}</CoffeeText>

                <CartItems>
                    <PriceTag>R$<p>{coffee.price.toFixed(2)}</p></PriceTag>
                    <QtdInput 
                    quantity={quantity}
                    increaseValue={increaseValue}
                    decreaseValue={decreaseValue}
                    />
                    
                    <CartButton onClick={() => handleCartButton(quantity, coffee.id)} ><ShoppingCart size={22} weight="fill" color="white" /></CartButton>
                </CartItems>

            </ProductDiv>
        </>
    )
}
