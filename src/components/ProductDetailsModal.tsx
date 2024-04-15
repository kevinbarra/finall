'use client'
import React from 'react';
import Image from 'next/image';

interface Product{
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
                <div className="flex">
                    <div className="mr-8">
                        <Image src={product.Image_URL} alt={product.Product_name} width={400} height={400} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{product.Product_name}</h2>
                        <p>Precio: {product.PriceSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} - Talla: {product.SizeEU}EU</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex">
                    <div className="mr-8">
                        <Image src={product.Image_URL} alt={product.Product_name} width={400} height={400}/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{product.Product_name}</h2>
                        <h3 className="text-2xl font-bold mb-4">AGOTADO</h3>
                        <p>Precio: {product.PriceSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} -
                            Talla: {product.SizeEU}EU</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-5 rounded shadow-lg w-full max-w-xl m-8">
                    {stock(product.Quantity)}
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
