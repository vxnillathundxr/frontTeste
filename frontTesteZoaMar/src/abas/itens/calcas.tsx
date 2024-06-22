import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';
import { EndH } from '../../components/endH';
import { Header } from "../../components/header";
import CardProduto from "../../components/cards/cardProduto";

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

export function Calcas(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])

    useEffect(() => {
        loadproducts();
        console.log('roudou loadProducts')
    }, [])

    async function loadproducts() {
        const response = await api.get("/produtos/7?forSale=true") 
        setProdutos(response.data);
    }
    return(
        <div>
        <Header />
            <div className="flex flex-col gap-20 bg-white">
                <div>
                    <h1 className='text-5xl font-bold p-10'>Calças</h1>
                    <div className="flex bg-black p-0.5 w-60 absolute top-[20vh] left-8"></div>
                </div>
                
            <section className="flex items-center justify-center gap-24">
                {Array.isArray(produtos) &&  produtos.map( (produto) => (
                    
                <article
                // className="flex gap-2"
                    key={produto.id}
                    >
                        <CardProduto
                        image={produto.image}
                        name={produto.name}
                        price={produto.price}
                        />

                </article>
                ))}
            </section>
            </div>
        <EndH />
    </div>
    )
}