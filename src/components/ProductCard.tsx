// ProductCard.tsx
import React from "react";
import Image from "next/image";

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

interface ProductCardProps {
    product: Product;
    onProductSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onProductSelect
}) => {
    const handleClick = () => {
        onProductSelect(product);
    };

    function stock(stock: number) {
        if (stock > 0) {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-lg font-medium truncate text-gray-800">{product.Product_name}</h2>
                    <p className="text-sm sm:text-base text-gray-600">Talla: {product.SizeEU}EU</p>
                    <p className="text-sm sm:text-base text-green-600 font-semibold">En stock</p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-lg font-medium truncate text-gray-800">{product.Product_name}</h2>
                    <p className="text-sm sm:text-base text-red-600 font-semibold">Agotado</p>
                </div>
            );
        }
    }

    return (
        <div onClick={handleClick} className="product-card max-w-full cursor-pointer">
            <Image className="rounded-t-lg" src={product.Image_URL} alt={product.Product_name} layout="responsive" width={350} height={250} />
            <div className="product-card-content">
                {stock(parseInt(product.Quantity))}
                <p className="product-card-price">{product.PriceSell} €</p>
            </div>
        </div>
    );
}

export default ProductCard;
