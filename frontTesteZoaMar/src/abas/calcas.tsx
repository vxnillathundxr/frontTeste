import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH'
import { Header } from "../components/header"
import CardProduto from "../components/cardProduto";

export function Calcas(){
    return(
        <div>
        <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Calças</h1>
                <div className="flex flex-col md:flex-row p-10 md:p-16 md:gap-24 gap-5 items-center justify-center">
                    <div className="flex gap-2 md:gap-24">
                        <CardProduto
                        image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                    </div>
                    <div className="flex gap-2 md:gap-24">
                        <CardProduto
                        image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                    </div>
                </div>
            </div>
            <EndH />
        </div>
    )
}