import camiseta from '../assets/camiseta.svg'
import { Header } from "../components/header"

export function Calcas(){
    return(
        <div>
        <Header />
        <div className="flex flex-col justify-center items-center min-h-screen">
            <img src={camiseta} className="size-40"/>
            <h1>Calças</h1>
        </div>
    </div>
    )
}