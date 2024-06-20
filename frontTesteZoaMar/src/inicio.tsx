import { Header } from "./components/header";
import { EndH } from "./components/endH"
import Carousel from './components/carousel';
import CardProduto from "./components/cards/cardProduto";

// Tamanho da imagens para caber no Carousel 80x30cm
const images = [
    'https://i.im.ge/2024/06/20/KHDpSP.Camisas-1-.jpeg',
    'https://i.im.ge/2024/06/20/KHD4rm.Moletom.jpeg',
    'https://i.im.ge/2024/06/20/KHIMM0.calcas.jpeg',
    'https://i.im.ge/2024/06/20/KHIQIT.Tenis.jpeg',
]

export function Inicio() {
    return(
        <div>
            <Header />
            <div className="md:w-[100vw] relative">
                <Carousel>  
                    {/* {images.map((s, index) => (
                        <div key={index}>
                            <img className="md:h-[80vh] h-[20vh]" src={s} />
                        </div> */}
                        {images.map((s) => (
                        <img className="md:h-[80vh] h-[20vh]" src={s} />

                    ))}
                </Carousel>    
            </div>
            {/* Img-https://i.im.ge/2024/06/14/K874SF.imagem-2024-06-13-153411570.png */}
            {/* <div className="-space-y-36 bg-white">
                <div className="flex p-28 gap-24"> */}
            <div className="md:-space-y-36 space-y-0.5 bg-white">
                <div className="flex flex-col md:flex-row p-10 md:p-28 md:gap-24 gap-5 items-center justify-center">
                    <div className="flex gap-2 md:gap-24">
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
                    <div className="flex gap-2 md:gap-24">
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
                <div className="flex flex-col md:flex-row p-10 md:p-28 md:gap-24 gap-5 items-center justify-center">
                    <div className="flex gap-2 md:gap-24">
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Moletom - Preto"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Moletom - Preto"
                        price="R$1000,00"    
                        />
                    </div>
                    <div className="flex gap-2 md:gap-24">
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Moletom - Preto"
                        price="R$1000,00"    
                        />
                        <CardProduto
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlyE3bG8-loKw6D2nbuVuSJocn4s3JMPtL1UF34dWIe6K6qBhGUsAc69djzszqKGQ8fw&usqp=CAU"
                        title="Moletom - Preto"
                        price="R$1000,00"    
                        />
                    </div>
                    </div>
                <div className="flex flex-col md:flex-row p-10 md:p-28 md:gap-24 gap-5 items-center justify-center">
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
                    </div >
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
                <div className="flex flex-col md:flex-row p-10 md:p-28 md:gap-24 gap-5 items-center justify-center">
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
};


