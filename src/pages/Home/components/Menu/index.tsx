import { ProductContainer } from "./components/Cards";
import { MenuContainer, MenuItems } from "./styles";
import { coffees } from "../../../../../data.json"

export function Menu(){
    return (
        <MenuContainer>
            <h1>Nossos cafés</h1>

            <MenuItems>
                {coffees.map((coffee) => (
                    <ProductContainer  
                        key={coffee.id}
                        coffee={coffee}
                    />
                ))}
            </MenuItems>

        </MenuContainer>
    )
}