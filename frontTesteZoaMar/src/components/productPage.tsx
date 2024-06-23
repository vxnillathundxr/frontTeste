import React from "react";
import SizeSelector from "./sizeSelector";

interface ProductPageProps{
    name: string
    price: string
    description: string
    image: string
    desconto: boolean
    newprice: string
   productId: number
}

const ProductPage: React.FC<ProductPageProps> = ({name, price, description, image, newprice, desconto,productId}) =>{

    let risco

    if(desconto){
        risco = <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-3 text-bold md:text-3xl line-through'>{price}</div>
            <div className='flex flex-col gap-3 text-bold md:text-7xl '>{newprice}</div>
        </div>
    }
    else{
        risco = <div>
                <div className='flex flex-col gap-3 text-bold md:text-8xl'>{price}</div>
            </div>
    }

    return(
        <div className="flex md:flex-row flex-col p-10 size h-[90vh] gap-32 justify-center bg-zinc-300 rounded">
            <div className="flex flex-col">
                <img className="rounded md:size-[600px] size-72" src={image} alt="Moletom" />
                <div className="text-sm">{productId}</div>
            </div>
            <div className="flex flex-col gap-14">
                <h1 className="font-bold text-7xl">{name}</h1>
                <div>{risco}</div>
                <div className="flex flex-col justify-center items-center gap-16">
                    <p className="font-medium text-2xl">{description}</p>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <SizeSelector/>
                        <button className="flex bg-lime-500 w-[33vw] h-[10vh] hover:scale-105 duration-100 rounded items-center justify-center text-3xl font-bold">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductPage