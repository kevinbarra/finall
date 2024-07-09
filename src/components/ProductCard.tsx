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
                    <h2 className="product_title">{product!.Product_name}</h2>
                    <p className="text-xs sm:text-base">Talla: {product!.SizeEU}EU </p>
                </div>
            );
        } else {
            return (
                <div className="space-y-2 py-2">
                    <h2 className="product_title">{product!.Product_name}</h2>
                    <p className="text-xs sm:text-base product_sold_out">AGOTADO</p>
                </div>
            );
        }
    }

    return (
        <div onClick={handleClick} className="product_card cursor-pointer">
            <div className="relative">
                <Image className="product_image" src={product.Image_URL} alt={product.Product_name} layout="responsive" width={350} height={250} />
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">{product.SizeEU}</div>
            </div>
            <div className="product_info">
                {stock(parseInt(product.Quantity))}
            </div>
        </div>
    );
}

export default ProductCard;
