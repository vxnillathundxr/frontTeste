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
        <div className='bg-zinc-300 w-60 h-115 rounded-lg overflow-hidden shadow-lg items-center '>
                  <h1 className="flex items-center text-2xl">Remover Produto</h1>
            <div className='flex flex-col gap-28 p-3 justify-center'>
                <div className='flex flex-col justify-center gap-4'>
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    type="text" 
                    placeholder="Digite o Id do Produto"
                    ref={idRef}
                    />
                </div>
                <button 
                className='hover:bg-zinc-500 hover:text-black hover:ease-linear ease-linear rounded-lg bg-black font-bold text-xl text-white p-1 mb-2' onClick={handleSubmit}
                >Remover</button>    
            </div>
        </div>
    )
}

export default CardRemove