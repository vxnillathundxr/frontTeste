import React from 'react';

interface CardAddProps {
    title: string
    button: string;
    name: string;
    price: string;
    stock: string;
    departament: string;
    tag: string;
}

const CardAdd: React.FC<CardAddProps> = ({title, button, name, price, stock, departament, tag}) =>{
    return(
        <div className='bg-zinc-300 w-60 rounded-lg overflow-hidden shadow-lg items-center '>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <h1 className='text-lg font-bold pl-4'>{title}</h1>
                <input type="file" name="image" />
                <div className='flex flex-col gap-3 items-center px-6'>
                    <input className='outline rounded gap-1 p-1 bg-white' placeholder={name}type="text" />
                    <input className='outline rounded gap-1 p-1 bg-white' placeholder={price} type="number" />
                    <input className='outline rounded gap-1 p-1 bg-white' placeholder={stock} type="number" />
                    <input className='outline rounded gap-1 p-1 bg-white' placeholder={departament} type="number" />
                    <input className='outline rounded gap-1 p-1 bg-white' placeholder={tag} type="text" />
                </div>
                <button className='hover:bg-zinc-500 hover:text-black hover:ease-linear ease-linear rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>{button}</button>
            </div>
        </div>
    )
}

export default CardAdd