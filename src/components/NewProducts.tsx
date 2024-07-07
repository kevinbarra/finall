// NewProducts.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';

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
        <div className="container mx-auto py-8">
            <h2 className="text-lg font-semibold mb-6 text-center">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {products.map((item) =>
                    <ProductCard key={item.ID_product} product={item} onProductSelect={showProductDetails} />
                )}
            </div>
            {selectedProduct && (
                <ProductDetailsModal product={selectedProduct} onClose={closeProductDetails} />
            )}
        </div>
    );
}

export default NewProducts;
