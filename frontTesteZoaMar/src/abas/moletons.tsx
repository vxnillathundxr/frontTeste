import camiseta from '../assets/camiseta.svg'
import { EndH } from '../components/endH';
import { Header } from "../components/header";
import CardProduto from "../components/cardProduto";

export function Moletons(){
    return(
        <div>
        <Header />
            <div className="md:-space-y-36 space-y-0.5 bg-white">
                <div className="flex flex-col md:flex-row p-10 md:p-28 space-y-8 md:gap-24">
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