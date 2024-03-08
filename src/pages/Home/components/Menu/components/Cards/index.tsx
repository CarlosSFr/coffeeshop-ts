import { CoffeeText, CartItems, ProductDiv, TagCoffee, TittleCoffee, PriceTag, QtyInput, CartButton } from "./styles";
// import Tradicional from "../../../../../assets/Type=Tradicional.png"
import { ShoppingCart } from "phosphor-react"

interface CoffeeProps {
    coffee: {
        id: string,
        tag: string[],
        title: string,
        price: number,
        image: string,
        description: string,
    }
}

export function ProductContainer( {coffee}: CoffeeProps ){
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
                    <QtyInput type="number" placeholder="1" /> 
                        
                    <CartButton><ShoppingCart size={22} weight="fill" color="white" /></CartButton>
                </CartItems>

            </ProductDiv>
        </>
    )
}
