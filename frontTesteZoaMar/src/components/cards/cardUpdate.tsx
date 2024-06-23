import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';

interface CardUpdateProps {
    name: string;
    // image: string;
    price: number;
    priceWithDiscount: number;
    // departamentId: number;
    description: string;
    color: string;
    slug: string;
    folrSae:boolean;
    size: string;
    storage: number;
}

export function CardUpdate(){

    const productIdRef = useRef<HTMLInputElement | null>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    // const imageRef = useRef<HTMLInputElement | null>(null)
    const priceRef = useRef<HTMLInputElement | null>(null)
    const priceWithDiscountRef = useRef<HTMLInputElement | null>(null)
    // const departmentIdRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const colorRef = useRef<HTMLInputElement | null>(null)
    const sizeRef = useRef<HTMLInputElement | null>(null)
    const storageRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        if(!productIdRef.current?.value ||
           !nameRef.current?.value || 
        //    !imageRef.current?.value || 
           !priceRef.current?.value ||
        //    !departmentNameRef.current?.value ||
           !colorRef.current?.value ||
           !sizeRef.current?.value ||
           !storageRef.current?.value
        )return;
           
        const response = await api.put("/products/:productId", {
            productId: Number(productIdRef.current?.value),
            name: nameRef.current?.value,
            price: priceRef.current?.valueAsNumber,
            // image: imageRef.current?.value
            priceWithDiscount: priceWithDiscountRef.current?.valueAsNumber,
            // departmentName: departmentNameRef.current?.value,               
            description: descriptionRef.current?.value,
            color: colorRef.current?.value,
            forSale: false,
            size: sizeRef.current?.value,
            storage: storageRef.current?.valueAsNumber
            })
    };

    return(
        <div className='bg-zinc-300 w-60 rounded-lg overflow-hidden shadow-lg items-center '>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <div>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Atualizar</h1>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Produto</h1>
                </div>
                <input type="file" name="image" />
                <div className='flex flex-col gap-3 items-center'>
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Id do Produto" type="number" 
                    ref={productIdRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Novo nome" 
                    type="text" 
                    ref={nameRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Novo preço" 
                    type="number"
                    ref={priceRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Novo desconto" 
                    type="number" 
                    ref={priceWithDiscountRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Nova descrição" 
                    type="text" 
                    ref={descriptionRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Nova cor" 
                    type="text" 
                    ref={colorRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Novo tamanho" 
                    type="text" 
                    ref={colorRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Nova quantidade em estoque" 
                    type="number"
                    ref={storageRef}
                     />
                </div>
                
                <button 
                className='hover:bg-zinc-500 hover:text-black  ease-linear rounded-lg bg-black font-bold
              text-white p-2 mb-2'
                onClick={handleSubmit}
              >Atualizar Produto
                </button>
            </div>
        </div>
    )
}

export default CardUpdate