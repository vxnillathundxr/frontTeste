import { Header } from "./components/header";
import allStar from './assets/allStarIcon.svg'
import BotaoParaInput from "./components/search";

export function CartPage(){
    return(
        <div>
            <Header />
            <h1>Cart</h1>
            <BotaoParaInput />
        </div>
    )
}