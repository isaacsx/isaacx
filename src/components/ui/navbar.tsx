'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
    { name: 'Introduction', href: '#introduction' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
]

export function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        event.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-5xl">
            <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-full px-4 py-2 flex items-center justify-center">
                <ul className="flex justify-center space-x-5">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative h-10 sm:w-28 w-20 flex items-center justify-center">
                            <Link href={item.href} className="relative flex items-center justify-center w-full h-full"
                                onClick={(event) => handleSmoothScroll(event, item.href)}
                            >
                                {item.name}
                                {activeSection == item.href.slice(1) && (
                                    <motion.div
                                        className="absolute inset-0 z-10 bg-white mix-blend-difference rounded-full"
                                        layoutId="highlight"
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
