import { EndH } from '../../components/endH';
import { Header } from "../../components/header";
import CardProduto from "../../components/cards/cardProduto";
import { Filter } from '../../components/filter';

export function Camisetas(){
    return(
        <div>
        <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Camisetas</h1>
                <div className='flex md:flex-row flex-col justify-center items-center md:pl-10'>
                    <Filter/>
                    <div className="flex flex-col md:flex-row md:p-16 md:gap-24 gap-5 items-center justify-center">
                        <div className="flex gap-2 md:gap-24">
                            <CardProduto
                            image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                            title="Camisa VASCO - Oficial"
                            price={1000}
                            newprice={500}
                            desconto={true}       
                            />
                            <CardProduto
                            image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                            title="Camisa VASCO - Oficial"
                            price={1000}
                            newprice={500}
                            desconto={true}       
                            />
                        </div>
                        <div className="flex gap-2 md:gap-24">
                            <CardProduto
                            image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                            title="Camisa VASCO - Oficial"
                            price={1000}
                            newprice={500}
                            desconto={true}       
                            />
                            <CardProduto
                            image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                            title="Camisa VASCO - Oficial"
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