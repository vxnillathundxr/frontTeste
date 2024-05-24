import camiseta from '../assets/camiseta.svg'
import { Header } from "../components/header";

export function Tenis(){
    return(
        <div>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen">
                <img src={camiseta} className="size-40"/>
                <h1>Tênis</h1>
            </div>
        </div>
    )
}

// "min-h-screen" centraliza uma div no eixo y