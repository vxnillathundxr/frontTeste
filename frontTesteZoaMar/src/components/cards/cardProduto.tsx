import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProdutoProps {
    imagePath: string;
    name: string;
    price: number;
    priceWithDiscount: number;
    desconto: boolean;
    color: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({ name, price, imagePath, priceWithDiscount, desconto, color }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/productPage', {
            state: { name, price, imagePath, priceWithDiscount, desconto, color }
        });
    };

    let risco;

    if (desconto) {
        risco = (
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-3 text-bold md:text-lg text-lg line-through'>R${price}</div>
                <div className='flex flex-col gap-3 text-bold md:text-3xl text-3xl'>R${priceWithDiscount}</div>
            </div>
        );
    } else {
        risco = (
            <div>
                <div className='flex flex-col gap-3 text-bold md:text-2xl text-xl'>{price}</div>
            </div>
        );
    }

    return (
        <div className='bg-zinc-300 md:w-60 w-[45vw] rounded-lg overflow-hidden shadow-lg items-center'>
            <div className='flex flex-col gap-5 px-3 py-3'>
                <img className='flex rounded' src={`${imagePath}?v=${new Date().getTime()}`} />
                <div className='flex flex-col gap-3'>
                    <h1 className='md:text-3xl text-3xl font-bold'>{name}</h1>
                    <div>{risco}</div>
                    <button
                        onClick={handleClick}
                        className='hover:bg-zinc-500 hover:text-black duration-200 rounded-lg bg-black font-bold text-xl text-white p-1 mb-2 cursor-pointer'
                    >
                        Ver Mais
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduto;
