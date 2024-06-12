import { Header } from "./components/header";
import { EndH } from "./components/endH"
import Carousel from './components/carousel';



const images = [
'https://i.pinimg.com/564x/73/6d/77/736d770fd183a92e22ba73df639f6902.jpg',
'https://i.pinimg.com/564x/b3/a4/f0/b3a4f0f172f8be1e5ec6d24f5110ef4a.jpg',
'https://presaviva.com.br/wp-content/uploads/2023/05/Poses_Camuflado_07.jpg'
];

export function Inicio() {
    return(
        <div>
            <Header />
        <div className="flex items-center justify-center">
        <Carousel images={images} />
        </div>
            <EndH />

        </div>
    )
};


