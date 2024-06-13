import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Camisetas(){
    return(
        <div>
        <Header />
            <div className="md:-space-y-36 space-y-0.5 bg-white">
                <div className="flex flex-col md:flex-row p-10 md:p-28 space-y-8 md:gap-24">
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