'use client'
import React from 'react';
import Image from 'next/image';

interface Product {
    ID_product: string;
    Product_name: string;
    ID_Category: string;
    PriceSell: string;
    SizeEU: string;
    Image_URL: string;
    Revenue: string;
    Color: string;
    Quantity: string;
}

interface ProductDetailsModalProps {
    product: Product | null;
    onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({product, onClose}) => {
    if (!product) return null;

    function stock(stock: number) {
        if (stock > 0) {
            return (
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:mr-8 mb-4 md:mb-0">
                        <Image src={product!.Image_URL} alt={product!.Product_name} width={400} height={400} className="rounded-md" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{product!.Product_name}</h2>
                        <p className="mb-2">Talla: {product!.SizeEU}EU</p>
                        <p className="text-lg font-semibold">{product!.PriceSell} EUR</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="md:mr-8 mb-4 md:mb-0">
                        <Image src={product!.Image_URL} alt={product!.Product_name} width={400} height={400} className="rounded-md" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{product!.Product_name}</h2>
                        <h3 className="text-xl font-bold text-red-500 mb-4">AGOTADO</h3>
                        <p className="mb-2">Talla: {product!.SizeEU}EU</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50">
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl">
                    {stock(parseInt(product.Quantity))}
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
