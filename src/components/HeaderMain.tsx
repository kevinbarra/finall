'use client'

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
}

interface Category {
    ID_Category: string;
    name: string;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState<Category[]>([]);

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

    return (
        <div className="header">
            <div className="header-container">
                <Image src="/images/luxaris.png" alt="logo luxaris" width={192} height={48} className="header-logo" />
                <div className="header-categories">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="header-category-button">
                            Categorías
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <div className="header-instagram">
                    <a href="https://www.instagram.com/_luxaris_" className="hover:text-gray-700">
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
