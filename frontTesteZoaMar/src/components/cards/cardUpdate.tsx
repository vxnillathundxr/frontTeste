import React, { useRef, FormEvent } from 'react';
import { api } from '../../services/api';

export function CardUpdate() {
    const productIdRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);
    const priceWithDiscountRef = useRef<HTMLInputElement | null>(null);
    const departmentIdRef = useRef<HTMLInputElement | null>(null);
    const descriptionRef = useRef<HTMLInputElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);
    const sizeRef = useRef<HTMLInputElement | null>(null);
    const storageRef = useRef<HTMLInputElement | null>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        // Obter productId como número
        const productId = productIdRef.current?.valueAsNumber;

        // Validar productId
        if (!productId && productId !== 0) {
            console.error("Product ID is required and must be a number.");
            return;
        }

        // Construir objeto com os dados atualizados do produto
        const updatedProductData: any = {
            // Incluir productId no objeto enviado para a API
            productId,
            name: nameRef.current?.value,
            price: priceRef.current?.valueAsNumber,
            priceWithDiscount: priceWithDiscountRef.current?.valueAsNumber,
            departmentId: departmentIdRef.current?.valueAsNumber,
            description: descriptionRef.current?.value,
            color: colorRef.current?.value,
            size: sizeRef.current?.value,
            storage: storageRef.current?.valueAsNumber,
        };

        try {
            const response = await api.put(`/products/${productId}`, updatedProductData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='bg-zinc-300 w-60 h-[80vh] rounded-lg overflow-hidden shadow-lg items-center '>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <div>
                    <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Atualizar</h1>
                    <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Produto</h1>
                </div>
                <div className='flex flex-col gap-3 items-center mt-[11vh]'>
                    <input 
                        className='outline rounded gap-1 p-1 bg-white' 
                        placeholder="Id do Produto" 
                        type="number" 
                        ref={productIdRef}
                        required
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
                        placeholder="Id do Departamento" 
                        type="number" 
                        ref={departmentIdRef}
                    />
                </div>
                <button 
                    className='hover:bg-zinc-500 hover:text-black mt-[6vh] ease-linear rounded-lg bg-black font-bold text-white p-2 mb-2'
                    onClick={handleSubmit}
                >
                    Atualizar Produto
                </button>
            </div>
        </div>
    );
}

export default CardUpdate;
