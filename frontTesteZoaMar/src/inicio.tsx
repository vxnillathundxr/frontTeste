import { Header } from "./components/header";
import { EndH } from "./components/endH"
import Carousel from './components/carousel';
import CardProduto from "./components/cardProduto";

// Tamanho da imagens para caber no Carousel 80x30cm
const images = [
    'https://i.im.ge/2024/06/13/K8Q69L.Novo-Projeto-2.jpeg',
    'https://i.im.ge/2024/06/13/K8QxqS.Novo-Projeto.jpeg',
    'https://i.im.ge/2024/06/13/K8QYk6.Novo-Projeto-2.jpeg',
    'https://i.im.ge/2024/06/13/K8QcFF.Novo-Projeto-1.jpeg',
]

export function Inicio() {
    return(
        <div>
            <Header />
            <div className="md:w-[100vw]">
                <Carousel>
                    {images.map((s) => (
                        <img className="md:h-[80vh] h-64" src={s} />
                    ))}
                </Carousel>    
            </div>
            {/* Img-https://i.im.ge/2024/06/14/K874SF.imagem-2024-06-13-153411570.png */}
            <div className="-space-y-36 bg-custom-image">
                <div className="flex p-28 gap-24">
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                </div>
                <div className="flex p-28 gap-24">
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                </div>
                <div className="flex p-28 gap-24">
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                    <CardProduto
                    image="https://imgcentauro-a.akamaihd.net/1366x1366/M1327C02.jpg"
                    title="DO GIGANTE"
                    price="R$1000,00"    
                    />
                </div>


            </div>

            <EndH />
        </div>
    )
};


