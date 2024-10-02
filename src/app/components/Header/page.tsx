// src/components/Header.tsx
"use client";

import * as Dialog from '@radix-ui/react-dialog';

export default function Header() {
    return (
        <header className="bg-gray-300 p-4 flex justify-between items-center">
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="p-2 rounded-md border"
                />
            </div>
            {/* Icon Buttons */}
            <div className="flex space-x-3">
                <Dialog.Root>
                    <Dialog.Trigger className="h-8 w-8 bg-gray-500 rounded-full" />
                    <Dialog.Trigger className="h-8 w-8 bg-gray-500 rounded-full" />
                    <Dialog.Trigger className="h-8 w-8 bg-gray-500 rounded-full" />
                </Dialog.Root>
            </div>
        </header>
    );
}
