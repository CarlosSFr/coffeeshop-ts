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
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout(){

    const { arrayItems } = useContext(CartContext)

    // function handlePaymentMethod(){

    // }

    function sumOfCartItem(){
        let priceUnit = 0;

        if(arrayItems.length > 0){
            arrayItems.forEach((cartItem) => {
                cartItem.item.forEach((coffee) => {
                    priceUnit += coffee.coffee.price * coffee.quantity;
                })
            })
        }

        return priceUnit;

    }

    const totalPrice = sumOfCartItem()

    const delirevyPrice = 3.5;

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
                    <ButtonContainer className="radio-group" >
                        <PaymentButton className="container" > 
                            <input type="radio" name="radio"/>
                            <CreditCard size={16} color="#8047F8"/>CARTÃO DE CRÉDITO
                        </PaymentButton>
                        <PaymentButton className="container"> 
                            <input type="radio" name="radio" />
                            <Bank size={16} color="#8047F8"/> CARTÃO DE DÉBITO
                        </PaymentButton>
                        <PaymentButton className="container">
                            <input type="radio" name="radio" />
                            <Money size={16} color="#8047F8"/>DINHEIRO
                        </PaymentButton>
                    </ButtonContainer>
                </PaymentContainer>
            </LeftContainer>
            <RightContainer>
            <h1>Cafés selecionados</h1>
                <EndCart>
                {arrayItems.length > 0 &&
                    arrayItems.map((cartItem) => (
                        cartItem.item.map((coffee) => (
                            <CoffeeSum 
                                key={coffee.coffee.id}
                                title={coffee.coffee.title}
                                price={coffee.coffee.price}
                                image={coffee.coffee.image}
                                quantity={coffee.quantity}
                            />
                        ))
                    ))}
                    <SumContainer>
                        <TotalItens>
                            <span>Total de itens</span>
                            <span>
                                { `R$ ${totalPrice}` }
                            </span>
                        </TotalItens>
                        <TotalItens>
                            <span>Entrega</span>
                            <span>{`R$ ${delirevyPrice}`}</span>
                        </TotalItens>
                        <TotalValue>
                            <span>Total</span>
                            <span>{ `R$ ${delirevyPrice + totalPrice}` }</span>
                        </TotalValue>
                    </SumContainer>
                    <NavLink to="/success" >
                        <SubmitButton disabled={true} >
                        
                            CONFIRMAR PEDIDO
                            
                        </SubmitButton>
                    </NavLink>
                </EndCart>
            </RightContainer>

        </CheckoutContainer>
    )
}