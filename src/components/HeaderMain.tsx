@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .header {
        @apply flex justify-between items-center py-4 px-6 bg-white shadow-md;
    }

    .header__logo {
        @apply flex-grow text-center;
    }

    .header__menu {
        @apply flex-grow flex items-center;
    }

    .header__search {
        @apply flex-grow flex justify-center relative;
    }

    .header__social {
        @apply flex-grow flex justify-end;
    }

    .search_input {
        @apply w-full max-w-md px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-accent;
    }

    .autocomplete {
        @apply absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10;
    }

    .autocomplete-item {
        @apply px-4 py-2 cursor-pointer hover:bg-gray-100;
    }

    .product_card {
        @apply bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105;
    }

    .product_image {
        @apply w-full h-48 object-cover;
    }

    .product_info {
        @apply p-4 text-center;
    }

    .product_title {
        @apply text-lg font-semibold mb-2;
    }

    .product_price {
        @apply text-accent font-bold;
    }

    .product_sold_out {
        @apply text-red-600 font-bold;
    }

    .modal {
        @apply fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center px-4;
    }

    .modal_content {
        @apply bg-white p-6 rounded-md shadow-lg w-full max-w-2xl;
    }

    .modal_close {
        @apply mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors;
    }
}
