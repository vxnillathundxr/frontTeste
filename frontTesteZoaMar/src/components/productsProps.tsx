import React from 'react';
import { useLocation } from 'react-router-dom';

interface ProductDetailProps {
    imagePath: string;
    name: string;
    price: number;
    priceWithDiscount: number;
    desconto: boolean;
    color: string;
}   

const ProductDetail: React.FC = () => {
    const location = useLocation();
    const product = location.state as ProductDetailProps;

    return (
        <div className="bg-zinc-300 md:w-60 w-[45vw] rounded-lg overflow-hidden shadow-lg items-center">
            <div className="flex flex-col gap-5 px-3 py-3">
                <img className="flex rounded" src={`${product.imagePath}?v=${new Date().getTime()}`} />
                <div className="flex flex-col gap-3">
                    <h1 className="md:text-3xl text-3xl font-bold">{product.name}</h1>
                    <div className="flex flex-col gap-2">
                        {product.desconto ? (
                            <>
                                <div className="flex flex-col gap-3 text-bold md:text-lg text-lg line-through">R${product.price}</div>
                                <div className="flex flex-col gap-3 text-bold md:text-3xl text-3xl">R${product.priceWithDiscount}</div>
                            </>
                        ) : (
                            <div className="flex flex-col gap-3 text-bold md:text-2xl text-xl">{product.price}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="text-bold md:text-xl text-lg">Color: {product.color}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
