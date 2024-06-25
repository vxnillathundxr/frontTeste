import {useRef, FormEvent } from 'react';
import { api } from '../../services/api';

interface ProdutosProps {
    productId: number;
    size: string;
}

export function CardRemoverProdutoStorage() {
    const productIdRef = useRef<HTMLInputElement | null>(null);
    const sizeRef = useRef<HTMLInputElement | null>(null);
   

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        const productId = productIdRef.current?.valueAsNumber;
        const size = sizeRef.current?.value;

        if (!productId || !size) {
            console.error("Id do produto e tamanho são obrigatórios.");
            return;
        }
        
        try {
            const response = await api.delete(`/produtos/${productId}/${size}`);
            console.log(response.data);
    
        } catch (error) {
            console.error("Erro ao remover produto:", error);
        }
    };

    return (
        <div className='bg-zinc-300 w-60 h-[80vh] rounded-lg overflow-hidden shadow-lg items-center'>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <div>
                    <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Remover Produto do Estoque</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3 items-center px-6 mt-12'>
                        <input 
                            className='outline rounded gap-1 p-1 bg-white' 
                            placeholder="Id do produto"
                            type="number" 
                            ref={productIdRef}
                        />
                        <input
                            className='outline rounded gap-1 p-1 bg-white'  
                            type="text"
                            placeholder='Tamanho do produto'
                            ref={sizeRef}  
                        />                    
                        <button
                            className='hover:bg-zinc-500 hover:text-black ease-linear rounded-lg bg-black font-bold
                            text-white p-2 mb-2 w-48 mt-[36vh]'
                            type="submit" 
                        >
                            Remover Produto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardRemoverProdutoStorage;
