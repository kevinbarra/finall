'use client';

import React, { useState, useEffect } from 'react';
import NewProducts from '@/components/NewProducts';
import HeaderMain from '@/components/HeaderMain';

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

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('ALL');
  const [currentCategoryName, setCurrentCategoryName] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('https://luxariazure.azurewebsites.net/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    (currentCategory === 'ALL' || product.ID_Category === currentCategory) &&
    product.Product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategorySelect = (categoryId: string, catName: string) => {
    setCurrentCategory(categoryId);
    setCurrentCategoryName(catName);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center max-w-[100%] justify-between p-2">
      <HeaderMain onCategorySelect={handleCategorySelect} />
      <input
        className="search_input"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <NewProducts products={filteredProducts} category={currentCategoryName} />
    </main>
  );
};

export default Home;
