import { BaseInfo, DeliveryInfo, IconStyle, Info, LeftContainer, LeftTitle, RightContainer, SuccessContainer, TextInfo } from "./styles"
import DeliveryBike from "../../assets/bicicleta-de-entrega.png"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success(){
    return (
        <SuccessContainer>
            <LeftContainer>
                <LeftTitle>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você!</p>
                </LeftTitle>
                <Info>
                    <DeliveryInfo>
                        <BaseInfo>
                            <IconStyle circleColor="purple" >
                            <MapPin  weight="fill" color="white" size={16} />
                            </IconStyle>
                                <TextInfo>
                                    <span>Entrega em <strong>Rua Padre Leonardo Nunes, 88</strong></span>
                                    <p>Portão - Curitiba - PR</p>
                                </TextInfo>
                        </BaseInfo>
                        <BaseInfo>
                            <IconStyle circleColor="red">
                            <Timer weight="fill" color="white" size={16} />
                            </IconStyle>
                                <TextInfo>
                                    <span>Previsão de entrega</span>
                                    <p><strong>20 min - 30 min</strong></p>
                                </TextInfo>
                        </BaseInfo>
                        <BaseInfo>
                            <IconStyle circleColor="darkRed">
                            <CurrencyDollar weight="fill" color="white" size={16} />
                            </IconStyle>
                                <TextInfo>
                                    <span>Pagamento na entrega</span>
                                    <p><strong>Cartão de Crédito</strong></p>
                                </TextInfo>
                        </BaseInfo>
                    </DeliveryInfo>
                </Info>
            </LeftContainer>
            <RightContainer>
                <img src={DeliveryBike} alt="" />
            </RightContainer>
        </SuccessContainer>
    )
}