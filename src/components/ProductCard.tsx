// ProductCard.tsx
import React from "react";
import Image from "next/image";
import Link from 'next/link';

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
                    <h2 className="text-blackish font-medium uppercase">{product.Product_name}</h2>
                    <p> Precio: {product.PriceSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} -
                        Talla: {product.SizeEU}EU </p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-blackish font-medium uppercase">{product.Product_name}</h2>
                    <p> AGOTADO </p>
                </div>
            );
        }
    }

    return (
        <div onClick={handleClick} className="px-4 border border-gray-200  rounded-xl max-w-[400px] cursor-pointer">
            <div>
                <Image className="w-[3500px] h-[250px]" src={product.Image_URL} alt={product.Product_name} width={200} height={300} />
            </div>
            {stock(parseInt(product.Quantity))}
        </div>
    );
}

export default ProductCard;
