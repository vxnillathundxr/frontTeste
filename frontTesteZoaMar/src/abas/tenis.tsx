import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Tenis(){
    return(
        <div>
            <Header />
                <div className="md:-space-y-36 space-y-0.5 bg-white">
                    <div className="flex flex-col md:flex-row p-10 md:p-28 space-y-8 md:gap-24  ">
                        <CardProduto
                        image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                        title="Tênis Nike SB - Preto"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                        title="Tênis Nike SB - Preto"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                        title="Tênis Nike SB - Preto"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                        title="Tênis Nike SB - Preto"
                        price="R$1000,00"    
                        />
                    </div>
                </div>
            <EndH />
        </div>
    )
}

// "min-h-screen" centraliza uma div no eixo y