import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';

interface ProdutosProps {
    productId: string;
    size: string;
    storage: number
}

export function CardAddProdutostorage(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])
    const productIdRef = useRef<HTMLInputElement | null>(null)
    const sizeRef = useRef<HTMLInputElement | null>(null)
    const storageRef = useRef<HTMLInputElement | null>(null)
   

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await api.get("/produtos");
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        };
        loadProducts();
    }, []);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        if(!productIdRef.current?.valueAsNumber || 
           !sizeRef.current?.value ||
           !storageRef.current?.valueAsNumber 
        )return;

        
        const response = await api.post("/produtos/estoque", {
            productId: productIdRef.current?.valueAsNumber,
            size: sizeRef.current?.value,
            storage: storageRef.current?.valueAsNumber
            });
            console.log(response.data)

    };

    return (
        <div className='bg-zinc-300 w-60 h-[80vh] rounded-lg overflow-hidden shadow-lg items-center'>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <div>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Adicionar</h1>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Produto</h1>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Estoque</h1>
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
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Estoque do produto" 
                    type="number" 
                    ref={storageRef}
                    />
                    
                    <div className="flex items-center justify-center">
                    </div>
                    <button
                    className='hover:bg-zinc-500 hover:text-black  ease-linear rounded-lg bg-black font-bold
                    text-white p-2 mb-2 w-48 mt-[29vh]'
                    onClick={handleSubmit}
                    >
                    Postar Produto
                    </button>
                </div>
            </form>
            </div>

            <section className="flex ">
                {Array.isArray(produtos) &&  produtos.map( (produto) => (
                    <article
                    key={produto.productId}
                    >
                    <div className='bg-zinc-300 md:w-60 w-[45vw] rounded-lg overflow-hidden shadow-lg items-center '>
                        <div className='flex flex-col gap-5 px-3 py-3'>
                            <p><span className="md:text-3xl text-base font-bold">Nome:</span>{produto.productId}</p>
                            <p><span className="flex flex-col gap-3 text-bold md:text-2xl">Preço:</span>{produto.size}</p>
                            <p><span className="flex flex-col gap-3 text-bold md:text-2xl">Color</span>{produto.storage}</p>
                            <button className='hover:bg-zinc-500 hover:text-black duration-200  rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>Ver Mais
                            </button>
                        </div>
                        </div>
                </article>
                ))}
            </section>
        </div>
    );
}

export default CardAddProdutostorage;