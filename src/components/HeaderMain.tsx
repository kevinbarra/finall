'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsInstagram } from "react-icons/bs";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface HeaderMainProps {
    onCategorySelect: (categoryId: string, catName: string) => void;
    onSearchChange: (searchTerm: string) => void;
}

interface Category {
    ID_Category: string;
    name: string;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ onCategorySelect, onSearchChange }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        const loadBrands = async () => {
            try {
                const response = await fetch('https://luxariazure.azurewebsites.net/categories');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Category[] = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        loadBrands();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearchChange(value);

        // Simular sugerencias basadas en el término de búsqueda
        const exampleSuggestions = ['Versace', 'Nike', 'Adidas', 'Puma'];
        setSuggestions(exampleSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        ));
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        onSearchChange(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="header">
            <div className="header__menu">
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                        Categorías
                        <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => onCategorySelect("ALL", "ALL")}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}>
                                        ALL
                                    </button>
                                )}
                            </Menu.Item>
                            {categories.map((category) => (
                                <Menu.Item key={category.ID_Category}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => onCategorySelect(category.ID_Category, category.name)}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}>
                                            {category.name}
                                        </button>
                                    ))}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className="header__logo">
                <Image src="/images/luxaris.png" alt="logo luxaris" width={192} height={48} />
            </div>
            <div className="header__search">
                <input
                    className="search_input"
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {suggestions.length > 0 && (
                    <div className="autocomplete">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="autocomplete-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="header__social">
                <a href="https://www.instagram.com/_luxaris_" className="text-gray-500 text-2xl hover:text-gray-700">
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};

export default HeaderMain;
