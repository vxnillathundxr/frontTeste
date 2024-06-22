import { EndH } from '../../components/endH'
import { Header } from "../../components/header"
import CardProduto from "../../components/cards/cardProduto";
import { Filter } from '../../components/filter';

export function Calcas(){
    return(
        <div>
        <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Calças</h1>
                <div className='flex md:flex-row flex-col justify-center items-center md:pl-10'>
                    <Filter/>
                    <div className="flex flex-col md:flex-row  md:p-16 md:gap-24 gap-5 items-center justify-center">
                        <div className="flex gap-2 md:gap-24">
                            <CardProduto
                            image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                            title="Calça cargo - Preta"
                            price={1000.00}
                            newprice={500.00}
                            desconto={true}       
                            />
                            <CardProduto
                            image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                            title="Calça cargo - Preta"
                            price={1000.00}
                            newprice={500.00}
                            desconto={true}       
                            />
                        </div>
                        <div className="flex gap-2 md:gap-24">
                            <CardProduto
                            image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                            title="Calça cargo - Preta"
                            price={1000.00}
                            newprice={500.00}
                            desconto={true}       
                            />
                            <CardProduto
                            image="https://dcdn.mitiendanube.com/stores/002/975/032/products/calca-cargo-masculina-modelo-urban-preta111-a4cacd28c26da18b5516820081376075-640-0.webp"
                            title="Calça cargo - Preta"
                            price={1000.00}
                            newprice={500.00}
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