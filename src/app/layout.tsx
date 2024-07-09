import React from 'react';

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.ID_product} className="product_card">
          <img src={product.Image_URL} alt={product.Product_name} className="product_image" />
          <div className="product_info">
            <h3 className="product_title">{product.Product_name}</h3>
            <p className="product_price">{product.PriceSell} EUR</p>
            {product.Quantity === "0" && <p className="product_sold_out">AGOTADO</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
