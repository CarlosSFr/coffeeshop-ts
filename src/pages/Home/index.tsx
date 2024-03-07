import graosCafe from "../../assets/saco-de-cafe.png"
import { ApresentationContainer, IconsContainer, LeftContainer } from "./styles"
import { Coffee, ShoppingCart, Timer, Package } from "phosphor-react"

export function Home(){
    return (
        <ApresentationContainer>
            <LeftContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <IconsContainer>
                    <p> <ShoppingCart /> Compra simples e segura</p>
                    <p> <Timer /> Entrega rápida e rastreada</p>
                    <p> <Package /> Embalagem mantém o café intacto</p>
                    <p> <Coffee /> O café chega fresquinho até você</p>
                </IconsContainer>
            </LeftContainer>

            <img src={graosCafe} alt="" />

        </ApresentationContainer>
    )
}