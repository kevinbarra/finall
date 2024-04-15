// NewProducts.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';

interface Product {
    ID_product: string;
    Product_name: string;
    PriceSell: string;
    SizeEU: string;
    Image_URL: string;
    Quantity: string;
}

interface NewProductsProps {
    products: Product[];
    category: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ products, category }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const showProductDetails = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeProductDetails = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-5">
                    {category}
                </h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {products.map((item) =>
                        <ProductCard key={item.ID_product} product={item} onProductSelect={showProductDetails} />
                    )}
                </div>
            </div>
            <ProductDetailsModal product={selectedProduct} onClose={closeProductDetails} />
        </div>
    );
}

export default NewProducts;
