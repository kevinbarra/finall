import React from "react";
import Image from "next/image";

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

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductSelect }) => {
    const handleClick = () => {
        onProductSelect(product);
    };

    function stock(stock: number) {
        if (stock > 0) {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-blackish font-medium truncate">{product.Product_name}</h2>
                    <p className="text-sm">Talla: {product.SizeEU}EU</p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="text-blackish font-medium truncate">{product.Product_name}</h2>
                    <p className="text-sm"> AGOTADO </p>
                </div>
            );
        }
    }

    return (
        <div onClick={handleClick} className="product_card">
            <div>
                <Image src={product.Image_URL} alt={product.Product_name} layout="responsive" width={350} height={250} className="rounded-t-xl" />
            </div>
            {stock(parseInt(product.Quantity))}
        </div>
    );
}

export default ProductCard;
