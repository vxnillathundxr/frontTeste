import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';
import CardProduto from "./cardProduto";

interface ProdutosProps {
    id: string;
    name: string;
    price: number;
    priceWithDiscount: number;
    departmentName: string;
    description: string;
    color: string;
    image: string;
    array: string;
}

export function CardAdd(){

    const nameRef = useRef<HTMLInputElement | null>(null)
    const priceRef = useRef<HTMLInputElement | null>(null)
    const priceWithDiscountRef = useRef<HTMLInputElement | null>(null)
    const departmentNameRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const colorRef = useRef<HTMLInputElement | null>(null)
    const imageRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        if(!nameRef.current?.value || 
           !priceRef.current?.value ||
           !departmentNameRef.current?.value ||
           !colorRef.current?.value ||
           !imageRef.current?.value
        )return;
           
        const response = await api.post("/produtos", {
            name: nameRef.current?.value,
            price: priceRef.current?.valueAsNumber,
            priceWithDiscount: priceWithDiscountRef.current?.valueAsNumber,
            departmentName: departmentNameRef.current?.value,               
            color: colorRef.current?.value,
            description: descriptionRef.current?.value,
            image: imageRef.current?.value
            })
    };

    return (
        <div className='bg-zinc-300 w-60 rounded-lg overflow-hidden shadow-lg items-center'>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <h1 className='text-lg font-bold pl-4'>Title</h1>
                <input 
                type="file" 
                name="image" />
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 items-center px-6'>
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Nome do produto"
                    type="text" 
                    ref={nameRef}
                    />
                    <input
                    className='outline rounded gap-1 p-1 bg-white'  
                    type="desable" 
                    placeholder='image'
                    ref={imageRef}  
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Preço" 
                    type="number" 
                    ref={priceRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white'
                    placeholder="Desconto" 
                    type="number" 
                    ref={priceWithDiscountRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Descrição" 
                    type="text" 
                    ref={descriptionRef} 
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white'
                    placeholder="Color" 
                    name="color" 
                    type="string" 
                    ref={colorRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Departamento" 
                    type="text" 
                    ref={departmentNameRef} 
                    />
                    <div className="flex items-center justify-center">
                    <input
                    type="submit"
                    value="Postar"
                    className="flex bg-black text-white p-2 rounded w-24 h-10 items-center justify-center cursor-pointer hover:scale-110 duration-100"
                    />
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default CardAdd;


