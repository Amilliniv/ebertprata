'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ebertlogo from '../../../public/ebertlogo.png'
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Elenco', href: '#team' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <nav className="bg-black shadow-lg fixed w-full top-0 z-50">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-18 sm:h-16">
          
          <div className="flex-shrink-0 w-10 h-12">
            <a href="#home" className="text-lg sm:text-2xl font-bold text-white hover:text-blue-600 transition-colors duration-200">
              <Image 
                src={ebertlogo}
                alt='Logo da Equipe'
                className='object-contain'
                quality={100}
                priority
              
              />
            </a>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-yellow-400 hover:bg-gray-500 rounded-md focus:outline-none focus:text-yellow-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-100 hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 active:bg-blue-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}