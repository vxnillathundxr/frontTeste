import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';

export function CardRemove(){

    const idRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        if(!idRef.current?.value
        )return;
        const response = await api.put("/produto/aVenda", {
            id: Number(idRef.current?.value),
            boolean: false
        }) 
}

    return(
        <div className='bg-zinc-300 w-60 h-[77vh] rounded-lg overflow-hidden shadow-lg items-center '>
                <div className="py-4">
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Remover</h1>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Produto</h1>
                </div>
            <div className='flex flex-col gap-8 p-3 justify-center'>
                <div className='flex flex-col justify-center gap-4 mt-11'>
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    type="text" 
                    placeholder="Digite o Id do Produto"
                    ref={idRef}
                    />
                </div>
                <button 
                className='hover:bg-zinc-500 hover:text-black  ease-linear rounded-lg bg-black font-bold
                text-white p-2 mb-2 mt-[40vh]' onClick={handleSubmit}
                >Remover</button>    
            </div>
        </div>
    )
}

export default CardRemove