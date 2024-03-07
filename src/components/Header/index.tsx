import { HeaderStyle } from "./styles"
import logoCoffee from "../../assets/icon-logo2.png"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header(){
    return (
        <HeaderStyle>
            <NavLink to="/">
                <img src={logoCoffee} alt="" height="40px"/>
            </NavLink>
            
            <div>
                <button><MapPin size={22} color="#8047F8" weight="fill" />Curitiba, PR</button>
                <NavLink to="/checkout" ><ShoppingCart size={22} color="#C41717" weight="fill" /></NavLink>
            </div>
        </HeaderStyle>
    )
}