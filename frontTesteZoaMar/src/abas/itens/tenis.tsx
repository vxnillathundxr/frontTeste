import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { api } from '../../services/api';
import { EndH } from '../../components/endH';
import { Header } from "../../components/header";
import CardProduto from "../../components/cards/cardProduto";
import { Filter } from '../../components/filters/filter';

interface ProdutosProps {
    id: string;
    name: string;
    price: number;
    priceWithDiscount: number;
    descont: boolean;
    departmentName: string;
    description: string;
    color: string;
    imagePath: string;
    array: string;
}

export function Tenis(){

    const [produtos, setProdutos] = useState<ProdutosProps[]>([])

    useEffect(() => {
        loadproducts();
        console.log('roudou loadProducts')
    }, [])

    async function loadproducts() {
        const response = await api.get("/produtos/4?forSale=true") 
        setProdutos(response.data);
    }
    return(
        <div>
        <Header />
            <div className="flex flex-col gap-5 bg-white">
                <div>
                    <h1 className='text-5xl font-bold p-10'>Tênis</h1>
                    <div className="flex bg-black p-0.5 w-[22vw] absolute top-[20vh] left-8"></div>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                    <Filter/>   
                    <section className="flex items-center justify-center gap-5">
                        {Array.isArray(produtos) &&  produtos.map( (produto) => (   
                        <article
                        // className="flex gap-2"
                            key={produto.id}
                            >
                                <CardProduto
                                imagePath={produto.imagePath}
                                name={produto.name}
                                price={produto.price}
                                priceWithDiscount={produto.priceWithDiscount}
                                desconto={true}
                                color=""
                                />
                        </article>
                        ))}
                    </section>
                </div>
            </div>
        <EndH />
    </div>
    )
}