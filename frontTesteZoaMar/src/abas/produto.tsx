import { EndH } from "../components/endH";
import { Header } from "../components/header";
import ProductPage from "../components/productPage";
import SizeSelector from "../components/sizeSelector";

export function Produto(){
    return(
        <div className="flex flex-col">
            <Header/>
            <div className="flex w-[100vw] h-[100vh] justify-center items-center">
                <ProductPage
                image="https://i.im.ge/2024/06/20/KHDZgD.moletomSol.jpeg"
                name="Moletom Sol"
                price="R$1000,00"    
                newprice="R$500,00"
                description="Moletom preto com desenho de sol"
                desconto={true} 
                productId={123}  
                />
            </div>
            <EndH/>
        </div>
    )
}