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
                    <h2 className="text-blackish font-medium truncate">{product!.Product_name}</h2>
                    <p className="text-xs sm:text-base"> Precio: {product!.PriceSell.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} -
                        Talla: {product!.SizeEU}EU </p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-blackish font-medium truncate">{product!.Product_name}</h2>
                    <p className="text-xs sm:text-base"> AGOTADO </p>
                </div>
            );
        }
    }

    return (
        <div onClick={handleClick} className="px-2 sm:px-4 border border-gray-200 rounded-xl max-w-full cursor-pointer">
            <div>
                <Image className="w-[350px] h-[250px]" src={product.Image_URL} alt={product.Product_name} layout="responsive" width={350} height={250} />

            </div>
            {stock(parseInt(product.Quantity))}
        </div>
    );
}

export default ProductCard;
