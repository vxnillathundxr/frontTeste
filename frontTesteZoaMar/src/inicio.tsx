import { Header } from "./components/header";
import { EndH } from "./components/endH"
import Carousel from './components/carousel';

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
            <div className="w-[100vw]">
                <Carousel>
                    {images.map((s) => (
                        <img src={s} />
                    ))}
                </Carousel>

            </div>
            <EndH />

        </div>
    )
};


