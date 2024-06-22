import { EndH } from '../../components/endH';
import { Header } from "../../components/header";
import CardProduto from "../../components/cards/cardProduto";
import { Filter } from '../../components/filter';

export function Tenis(){
    return(
        <div>
            <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Calças</h1>
                <div className='flex md:flex-row flex-col justify-center items-center md:pl-10'>
                    <Filter/>
                        <div className="flex flex-col md:flex-row md:p-16 md:gap-24 gap-5 items-center justify-center">
                            <div className="flex gap-2 md:gap-24">
                                <CardProduto
                                image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                                title="Tênis Nike SB - Preto"
                                price={1000}
                                newprice={500}
                            desconto={true}   
                                />
                                <CardProduto
                                image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                                title="Tênis Nike SB - Preto"
                                price={1000}
                                newprice={500}
                            desconto={true}   
                                />
                            </div>
                            <div className="flex gap-2 md:gap-24">
                                <CardProduto
                                image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                                title="Tênis Nike SB - Preto"
                                price={1000}
                                newprice={500}
                            desconto={true}   
                                />
                                <CardProduto
                                image="https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-chron-2-preto-branco-97523.jpg"
                                title="Tênis Nike SB - Preto"
                                price={1000}
                                newprice={500}
                            desconto={true}   
                                />
                            </div>
                        </div>
                    </div>
                </div>
            <EndH />
        </div>
    )
}

// "min-h-screen" centraliza uma div no eixo y