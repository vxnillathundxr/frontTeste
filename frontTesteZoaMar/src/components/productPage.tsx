import React from "react";
import SizeSelector from "./sizeSelector";

interface ProductPageProps{
    title: string
    price: string
    description: string
    image: string
    desconto: boolean
    newprice: string
    id_product: number
}

const ProductPage: React.FC<ProductPageProps> = ({title, price,description, image, newprice, desconto, id_product}) =>{

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
        <div className="flex md:flex-row flex-col w-4/5 h-auto p-10 gap-32 justify-center  bg-zinc-300 rounded">
                    <div className="flex flex-col">
                        <img className="rounded md:size-[700px] size-72" src={image} alt="Moletom" />
                        <div className="text-sm">{id_product}</div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <h1 className="font-bold text-7xl">{title}</h1>
                        <div>{risco}</div>
                        <div className="flex flex-col justify-center items-center gap-48">
                            <p className="font-medium text-2xl">{description}</p>
                                <div className="flex flex-col gap-5 justify-center items-center">
                                    <SizeSelector/>
                                    <button className="flex bg-lime-500 w-[33vw] h-[10vh] rounded items-center justify-center text-3xl font-bold">Adicionar ao Carrinho</button>
                                </div>
                        </div>
                    </div>
                </div>
    )

}

export default ProductPage