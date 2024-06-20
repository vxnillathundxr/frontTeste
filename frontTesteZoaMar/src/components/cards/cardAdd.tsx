import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import { api } from '../../services/api';

interface ProdutosProps {
    id: string;
    name: string;
    price: number;
    priceWithDiscount: number;
    departmentName: string;
    description: string;
    color: string;
    image: string;
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

    // useEffect(() => {
    //     loadCustomers();
    // }, [])

    // async function loadCustomers() {
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
