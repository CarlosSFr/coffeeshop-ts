import { useContext } from "react";
import { QtdInput } from "../../../../../../components/QtdInput";
import { CoffeeText, CartItems, ProductDiv, TagCoffee, TittleCoffee, PriceTag, CartButton } from "./styles";
// import Tradicional from "../../../../../assets/Type=Tradicional.png"
import { ShoppingCart } from "phosphor-react"
import { CartContext, CoffeeProps } from "../../../../../../contexts/CartContext";

export function ProductContainer( {coffee}: CoffeeProps ){
    const { handleCartButton, quantity, increaseValue, decreaseValue } = useContext(CartContext);

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
                        
                    <CartButton onClick={handleCartButton} ><ShoppingCart size={22} weight="fill" color="white" /></CartButton>
                </CartItems>

            </ProductDiv>
        </>
    )
}
