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
        if (stock > 0) {
            return (
                <div className="modal-body">
                    <Image src={product.Image_URL} alt={product.Product_name} width={400} height={400} className="rounded-lg" />
                    <h2 className="modal-header">{product.Product_name}</h2>
                    <p className="text-gray-700">Talla: {product.SizeEU}EU</p>
                    <p className="text-gray-900 text-xl font-semibold">{product.PriceSell} €</p>
                    <p className="text-green-600 font-semibold">En stock</p>
                </div>
            );
        } else {
            return (
                <div className="modal-body">
                    <Image src={product.Image_URL} alt={product.Product_name} width={400} height={400} className="rounded-lg" />
                    <h2 className="modal-header">{product.Product_name}</h2>
                    <p className="text-gray-700">Talla: {product.SizeEU}EU</p>
                    <p className="text-gray-900 text-xl font-semibold">{product.PriceSell} €</p>
                    <p className="text-red-600 font-semibold">Agotado</p>
                </div>
            );
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {stock(parseInt(product.Quantity))}
                <button onClick={onClose} className="modal-close-button">Cerrar</button>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
