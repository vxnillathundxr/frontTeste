import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';

interface ProdutosProps {
    id: string;
    name: string;
    image: string;
    price: number;
    priceWithDiscount: number;
    departmentName: string;
    description: string;
    color: string;
    array: string;
}

export function CardAdd(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])
    const nameRef = useRef<HTMLInputElement | null>(null)
    const priceRef = useRef<HTMLInputElement | null>(null)
    const priceWithDiscountRef = useRef<HTMLInputElement | null>(null)
    const departmentNameRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const colorRef = useRef<HTMLInputElement | null>(null)
    const imageRef = useRef<HTMLInputElement | null>(null)

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
    // useEffect(() => {
    //     loadproducts();
    // }, [])

    // async function loadproducts() {
    //     const response = await api.get("/produtos")        
    //     setProdutos(response.data);
    //     // console.log(response.data)
    // }

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
            console.log(response.data)
    };

    return (
        <div className='bg-zinc-300 w-60 h-[80vh] rounded-lg overflow-hidden shadow-lg items-center'>
            <div className='flex flex-col gap-5 px-6 py-4'>
                <div>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Adicionar</h1>
                <h1 className='text-2xl font-bold pl-4 flex items-center justify-center'>Produto</h1>
                </div>
                <input 
                type="file" 
                name="image" />
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 items-center px-6 mt-[4vh]'>
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
                    placeholder="Nome do departamento" 
                    type="text" 
                    ref={departmentNameRef} 
                    />
                    <div className="flex items-center justify-center">
                    {/* <input
                    type="submit"
                    value="Postar"
                    className="flex bg-black text-white p-2 rounded w-24 h-10 items-center justify-center cursor-pointer hover:scale-110 duration-100"
                    /> */}
                    </div>
                    <button
                    className='hover:bg-zinc-500 hover:text-black  ease-linear rounded-lg bg-black font-bold
                    text-white p-2 mb-2 w-48 mt-[6vh]'
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
                    key={produto.id}
                    >
                    <div className='bg-zinc-300 md:w-60 w-[45vw] rounded-lg overflow-hidden shadow-lg items-center '>
                        <div className='flex flex-col gap-5 px-3 py-3'>
                            <p><span className="md:text-3xl text-base font-bold">Nome:</span>{produto.name}</p>
                            <p><span className="flex flex-col gap-3 text-bold md:text-2xl">Preço:</span>{produto.price}</p>
                            <p><span className="flex flex-col gap-3 text-bold md:text-2xl">Color</span>{produto.color}</p>
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

export default CardAdd;