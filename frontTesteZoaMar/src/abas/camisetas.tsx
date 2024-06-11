import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH';
import { Header } from "../components/header";

export function Camisetas(){
    return(
        <div>
        <Header />
        <div className="flex flex-col justify-center items-center min-h-screen">
            <img src={camiseta} className="size-40"/>
            <h1>Camisetas</h1>
        </div>
        <EndH />
    </div>
    )
}