import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Camisetas(){
    return(
        <div>
        <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Camisetas</h1>
                <div className="flex flex-col md:flex-row p-10 md:p-16 md:gap-24 items-center justify-center">
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="Camisa VASCO - Oficial"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="Camisa VASCO - Oficial"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="Camisa VASCO - Oficial"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="Camisa VASCO - Oficial"
                    price="R$1000,00"    
                    />
                </div>
            </div>
        <EndH />
    </div>
    )
}