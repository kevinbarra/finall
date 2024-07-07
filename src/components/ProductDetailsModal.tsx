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

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose }) => {
    if (!product) return null;

    function stock(stock: number) {
        return (
            <div className="flex">
                <div className="mr-8">
                    <Image src={product.Image_URL} alt={product.Product_name} width={400} height={400} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">{product.Product_name}</h2>
                    <p>Talla: {product.SizeEU}EU</p>
                    {stock > 0 ? (
                        <p className="text-gray-900 text-xl font-semibold">{product.PriceSell} €</p>
                    ) : (
                        <h3 className="text-2xl font-bold mb-4">AGOTADO</h3>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="modal">
            <div className="modal_content">
                {stock(parseInt(product.Quantity))}
                <button onClick={onClose} className="modal_close_btn">
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
