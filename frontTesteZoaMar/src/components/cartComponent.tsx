import React from 'react';

interface CardComponentProps{
    image: string
    name: string
    price: string
}

const CartComponent: React.FC<CardComponentProps> = ({image, name, price}) =>{
    return(
        <div className="flex flex-col md:text-3xl text-md font-medium gap-16">
            <div className="flex md:w-[35vw] w-[80vw] border-b-2 border-black items-center p-3 gap-4 ">
                <img className="md:size-24 size-14 rounded" src={image}/>
                <div className="flex w-full justify-between">
                    <div className="flex flex-col ">
                        <a>{name}</a>
                        <div className="flex gap-6 items-center">
                            <a><input type="number" className="bg-zinc-300 placeholder:text-black rounded p-2 md:w-[5vw] w-[30vw] outline-none" placeholder="N°"/></a>
                        </div>
                    </div>
                    <a>{price}</a>
                </div>
            </div>
        </div>
    )
}

export default CartComponent