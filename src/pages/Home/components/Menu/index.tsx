import { ProductContainer } from "./components";
import { MenuContainer, MenuItems } from "./styles";


export function Menu(){
    return (
        <MenuContainer>
            <h1>Nossos cafés</h1>

            <MenuItems>
                <ProductContainer/>
            </MenuItems>

        </MenuContainer>
    )
}