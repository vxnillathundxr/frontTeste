import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import { api } from '../../services/api';

interface ProdutosProps {
    id: string;
    title: string;
    name: string;
    price: number;
    stock: number;
    department: string;
    tag: string;
    description: string;
    imagem: Blob;
}

export function CardAdd(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])
    const titleRef = useRef<HTMLInputElement | null>(null)
    const nameRef = useRef<HTMLInputElement | null>(null)
    const priceRef = useRef<HTMLInputElement | null>(null)
    const stockRef = useRef<HTMLInputElement | null>(null)
    const departamentRef = useRef<HTMLInputElement | null>(null)
    const tagRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        loadCustomers();
    }, [])

    async function loadCustomers() {
        const response = await api.get("/produtos")        
        setProdutos(response.data);
        // console.log(response.data)
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        if(!titleRef.current?.value || 
           !nameRef.current?.value || 
           !priceRef.current?.value ||
           !stockRef.current?.value ||
           !departamentRef.current?.value ||
           !tagRef.current?.value ||
           !descriptionRef.current?.value
        )return;
           
        const response = await api.post("/produtos/", {
            title: titleRef.current?.value,
            name: nameRef.current?.value,
            price: priceRef.current?.value,
            stock: stockRef.current?.value,
            department: departamentRef.current?.value,               
            tag: tagRef.current?.value,
            description: descriptionRef.current?.value
            })
            console.log(response.data)
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
                    placeholder="Preço" 
                    type="number" 
                    ref={priceRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white'
                    placeholder="Estoque" 
                    name="stock" 
                    type="number" 
                    ref={stockRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Departamento" 
                    type="text" 
                    ref={departamentRef} 
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white'
                    placeholder="Tag" 
                    type="text" 
                    ref={tagRef}
                    />
                    <input 
                    className='outline rounded gap-1 p-1 bg-white' 
                    placeholder="Descrição" 
                    type="text" 
                    ref={descriptionRef} 
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
                {/* <button className='hover:bg-zinc-500 hover:text-black hover:ease-linear ease-linear rounded-lg bg-black font-bold text-xl text-white p-1 mb-2' onClick={handleSubmit}>{button}</button> */}
            </div>

            <section>
                {produtos.map( (produto) => (
                    <article>
                        key={produto.id}
                    <div className='bg-zinc-300 md:w-60 w-[45vw] rounded-lg overflow-hidden shadow-lg items-center '>
                        <div className='flex flex-col gap-5 px-3 py-3'>
                            {/* Arrumar dps */}
                        {/* <img className='flex rounded' src={produto.imagem} alt={produto.name} /> */}
                        <div className='flex flex-col gap-3'>
                        <h1 className='md:text-3xl text-base font-bold'>{produto.name}</h1>
                            <div className='flex flex-col gap-3 text-bold md:text-2xl'>{produto.price}</div>
                            <button className='hover:bg-zinc-500 hover:text-black duration-200  rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>Ver Mais
                            </button>
                        </div>
                        </div>
                    </div>
                </article>
                ))}
            </section>
        </div>
    );
}

export default CardAdd;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';  
// import { api } from '../../services/api';

// interface CardAddProps {
//     title: string;
//     button: string;
//     name: string;
//     price: string;
//     stock: string;
//     departament: string;
//     tag: string;
//     description: string;
// }

// const CardAdd: React.FC<CardAddProps> = ({ title, button, name, price, stock, departament, tag, description }) => {

//     const [produto, setProduto] = useState<any>(null);

//     useEffect(() => {
//         const postProduct = async () => {
//             try {
//                 const response = await api.post('/produtos/');
//                 setProduto(response.data);
//             } catch (error) {
//                 console.error("Erro ao buscar dados do produto:", error);
//             }
//         };

//         postProduct();
//     }, []);

//     return (
//         <div className='bg-zinc-300 w-60 rounded-lg overflow-hidden shadow-lg items-center'>
//             <div className='flex flex-col gap-5 px-6 py-4'>
//                 <h1 className='text-lg font-bold pl-4'>{title}</h1>
//                 <input type="file" name="image" />
//                 <div className='flex flex-col gap-3 items-center px-6'>
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={name} type="text" />
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={price} type="number" />
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={stock} type="number" />
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={departament} type="number" />
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={tag} type="text" />
//                     <input className='outline rounded gap-1 p-1 bg-white' placeholder={description} type="text" />
//                 </div>
//                 <button className='hover:bg-zinc-500 hover:text-black hover:ease-linear ease-linear rounded-lg bg-black font-bold text-xl text-white p-1 mb-2'>{button}</button>
//             </div>
//         </div>
//     );
// }

// export default CardAdd;
