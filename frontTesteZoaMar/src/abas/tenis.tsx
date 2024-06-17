import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Tenis(){
    return(
        <div>
            <Header />
                <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Calças</h1>
                    <div className="flex flex-col md:flex-row p-10 md:p-16 md:gap-24 gap-5 items-center justify-center">
                        <div className="flex gap-2 md:gap-24">
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
                        <div className="flex gap-2 md:gap-24">
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
                </div>
            <EndH />
        </div>
    )
}

// "min-h-screen" centraliza uma div no eixo y