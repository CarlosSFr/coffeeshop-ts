import graosCafe from "../../../../assets/saco-de-cafe.png"
import { ApresentationContainer, IconText, IconsCircle, IconsContainer, LeftContainer } from "./styles"
import { Coffee, ShoppingCart, Timer, Package } from "phosphor-react"

export function Apresentation(){
    return (
        <ApresentationContainer>
            <LeftContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
                <IconsContainer>
                    <IconText>
                        <IconsCircle circleColor="darkRed"  > 
                            <ShoppingCart size={16} weight="fill" /> 
                        </IconsCircle> 
                        <p> Compra simples e segura</p>
                    </IconText>
                    <IconText>
                        <IconsCircle circleColor="gray"> 
                            <Package size={16} weight="fill" /> 
                        </IconsCircle>
                        <p> Embalagem mantém o café intacto</p>
                    </IconText>
                    <IconText>
                        <IconsCircle circleColor="red"> 
                            <Timer size={16} weight="fill" /> 
                        </IconsCircle>
                        <p>  Entrega rápida e rastreada</p>
                    </IconText>
                    <IconText>
                        <IconsCircle circleColor="purple"> 
                            <Coffee size={16} weight="fill" /> 
                        </IconsCircle>
                        <p>  O café chega fresquinho até você</p>
                    </IconText>
                </IconsContainer>
            </LeftContainer>

            <img src={graosCafe} alt="" />

        </ApresentationContainer>
    )
}