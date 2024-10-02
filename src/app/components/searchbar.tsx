// src/components/SearchBar.tsx
"use client";

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle the search logic here
        console.log("Searching for:", searchTerm);
    };
    return (
        <form onSubmit={handleSearch} className="flex items-center bg-[rgba(26,26,26,0.8)] backdrop-blur-lg">
            <input
                type="text"
                placeholder="Type your search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 w-full border-none rounded-l-md focus:outline-none bg-[rgba(26,26,26,0.8)] backdrop-blur-lg text-white placeholder-gray-500"
            />
            <button type="submit" className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
        </form>
    );
};

export default SearchBar;
