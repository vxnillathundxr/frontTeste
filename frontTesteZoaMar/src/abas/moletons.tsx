import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Moletons(){
    return(
        <div>
        <Header />
            <div className="flex flex-col bg-white">
                <h1 className='text-5xl font-bold p-10'>Moletons</h1>
                <div className="flex flex-col md:flex-row p-10 md:p-16 md:gap-24 items-center justify-center">
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Calça cargo - Preta"
                        price="R$1000,00"    
                        />
                    </div>
            </div>
        <EndH />
    </div>
    )
}