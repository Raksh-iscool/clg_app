// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Navbar() {
    const [visible, setVisible] = useState(true);

    // This useEffect will toggle visibility based on scroll position (optional feature)
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            setVisible(lastScrollY > currentScrollY || currentScrollY < 10);
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Hackathons", link: "/components/Hackathons" },
        { name: "Projects", link: "/components/Projects" },
        { name: "Papers", link: "/components/Papers" },
        { name: "Notifications", link: "/components/Notifications" },
        { name: "Profile", link: "/components/Profile" },
        { name: "Login", link: "/components/Login" },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -200,
                }}
                animate={{
                    y: visible ? 0 : -200, // Adjust this value to control visibility
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="w-full fixed top-0 z-50 h-20 px-6 flex justify-between items-center border-b border-transparent dark:border-white/[0.2] bg-[rgba(26,26,26,0.8)] backdrop-blur-lg"
            >
                {/* Left side: Logo and Navigation Links */}
                <div className="flex items-center space-x-6">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/whitelogo.png"
                            alt="Vertex Logo"
                            width={80}
                            height={80}
                            className="h-10 w-10"
                        />
                    </Link>
                    {/* Navigation Links */}
                    <NavigationMenu.Root>
                        <NavigationMenu.List className="flex space-x-6">
                            {navItems.slice(0, 3).map((navItem, idx) => (
                                <NavigationMenu.Item key={idx}>
                                    <Link href={navItem.link} className="text-lg relative text-neutral-50 hover:text-neutral-400">
                                        <button className="text-sm font-medium px-4 py-2 rounded-full hover:bg-[#333]">
                                            {navItem.name}
                                        </button>
                                    </Link>
                                </NavigationMenu.Item>
                            ))}
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
                </div>

                {/* Right side: Notifications, Profile, Login */}
                <div className="flex items-center space-x-6">
                    <NavigationMenu.Root>
                        <NavigationMenu.List className="flex space-x-6">
                            {navItems.slice(3).map((navItem, idx) => (
                                <NavigationMenu.Item key={idx}>
                                    <Link href={navItem.link} className="text-lg relative text-neutral-50 hover:text-neutral-400">
                                        <button className="text-sm font-medium px-4 py-2 rounded-full hover:bg-[#333]">
                                            {navItem.name}
                                        </button>
                                    </Link>
                                </NavigationMenu.Item>
                            ))}
                        </NavigationMenu.List>
                    </NavigationMenu.Root>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
