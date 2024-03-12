import { Bank, CreditCard, CurrencyDollarSimple, MapPin, Money } from "phosphor-react";
import { 
    ButtonContainer, 
    CheckoutContainer, 
    EndCart, 
    FormContainer, 
    InputsContainer, 
    LeftContainer, 
    NeighborCity, 
    NumberComplement, 
    PaymentButton, 
    PaymentContainer, 
    RightContainer, 
    SubmitButton, 
    SumContainer, 
    TextContainer, 
    TotalItens,
    TotalValue} from "./styles";
import { CoffeeSum } from "./components/CoffeeSum";
import { NavLink } from "react-router-dom"

export function Checkout(){
    return (
        <CheckoutContainer>
            <LeftContainer>
                <h1>Complete seu pedido</h1>
                <FormContainer>
                    <form action="">
                        <TextContainer>
                            < MapPin color="#C41717" size={22} /><span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </TextContainer>
                        <InputsContainer>
                            <input type="number" placeholder="CEP" /> 
                            <input type="text" placeholder="Rua" />
                            <NumberComplement>
                                <input type="number" placeholder="Número" />
                                <input type="text" placeholder="Complemento" />
                            </NumberComplement>
                            <NeighborCity>
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="Cidade" />
                                <input type="text" placeholder="UF" />
                            </NeighborCity>
                        </InputsContainer>
                    </form>
                </FormContainer>
                <PaymentContainer>
                    <TextContainer>
                        <CurrencyDollarSimple size={22} color="#8047F8" /><span>Pagamento</span>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </TextContainer>
                    <ButtonContainer>
                        <PaymentButton> <CreditCard size={16} color="#8047F8"/>CARTÃO DE CRÉDITO</PaymentButton>
                        <PaymentButton> <Bank size={16} color="#8047F8"/> CARTÃO DE DÉBITO</PaymentButton>
                        <PaymentButton> <Money size={16} color="#8047F8"/>DINHEIRO </PaymentButton>
                    </ButtonContainer>
                </PaymentContainer>
            </LeftContainer>
            <RightContainer>
            <h1>Cafés selecionados</h1>
                <EndCart>
                    <CoffeeSum/>
                    <SumContainer>
                        <TotalItens>
                            <span>Total de itens</span>
                            <span>R$ 29,70</span>
                        </TotalItens>
                        <TotalItens>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </TotalItens>
                        <TotalValue>
                            <span>Total</span>
                            <span>R$ 33,20</span>
                        </TotalValue>
                    </SumContainer>
                    <NavLink to="/success" >
                        <SubmitButton>
                        
                            CONFIRMAR PEDIDO
                            
                        </SubmitButton>
                    </NavLink>
                </EndCart>
            </RightContainer>

        </CheckoutContainer>
    )
}