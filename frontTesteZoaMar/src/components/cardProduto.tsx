import React from 'react';

interface CardProdutoProps {
    title: string
    price: string;
    image: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({title, price, image}) =>{
    return(
        <div className='bg-zinc-300 w-60 rounded-lg overflow-hidden shadow-lg items-center '>
            <div className='flex flex-col gap-5 px-3 py-3'>
                <img className='flex rounded' src={image} alt={title} />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl left-0 font-bold'>{title}</h1>
                    <div className='flex flex-col gap-3 text-bold text-2xl'>{price}</div>
                    <button className='hover:bg-zinc-500 hover:text-black duration-200  rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>Ver Mais</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduto

// Utilização:
{/* <div>
<CardProduto
image=""
title=""
price=""    
/>
</div> */}