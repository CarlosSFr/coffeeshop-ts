import { CoffeeText, CartItems, ProductDiv, TagCoffee, TittleCoffee, PriceTag, QtyInput, CartButton } from "./styles";
import Tradicional from "../../../../../assets/Type=Tradicional.png"
import { ShoppingCart } from "phosphor-react"


export function ProductContainer(){
    return (
        <>
            <ProductDiv>
                <img src={Tradicional} alt="" />
                <TagCoffee>TRADICIONAL</TagCoffee>
                <TittleCoffee>Expresso Tradicional</TittleCoffee>
                <CoffeeText>O tradicional café feito com água quente e grãos moídos</CoffeeText>

                <CartItems>
                    <PriceTag>R$<p>9,90</p></PriceTag>
                    <QtyInput type="number" /> 
                        
                    <CartButton><ShoppingCart size={22} weight="fill" color="white" /></CartButton>
                </CartItems>

            </ProductDiv>
        </>
    )
}
