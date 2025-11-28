"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "होम", href: "/" },
    { name: "राज्य", href: "/nation" },
    { name: "देश", href: "/world" },
    { name: "क्रिकेट", href: "/politics" },
    { name: "लाइव स्कोर", href: "/tech" },
    { name: "मनोरंजन", href: "/sports" },
    { name: "बिजनेस", href: "/business" },
    { name: "करियर", href: "/science" },
    { name: "विदेश", href: "/environment" },
    { name: "धर्म", href: "/health" },
    { name: "राशिफल", href: "/lifestyle" },
    { name: "लाइफस्टाइल", href: "/entertainment" },
    { name: "ऑटो", href: "/education" },
    { name: "गैजेट्स", href: "/career" }
  ];

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-2xl font-bold">हि</span>
              </div>
              <span className="text-3xl font-bold text-red-600" style={{ fontFamily: 'serif' }}>
                हिन्दुस्तान
              </span>
            </Link>

            {/* Top Right Icons */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <button className="flex items-center space-x-2 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>फोटो</span>
              </button>
              
              <button className="flex items-center space-x-2 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>वीडियो</span>
              </button>
              
              <button className="flex items-center space-x-2 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>शहर चुनें</span>
              </button>
              
              <button className="flex items-center space-x-2 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>ई-पेपर</span>
              </button>
              
              <button className="flex items-center space-x-2 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>साइन इन</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <input 
                type="text" 
                placeholder="यहाँ लिखें"
                className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:border-red-600"
              />
              <button className="ml-2 text-gray-400 hover:text-red-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 h-14 overflow-x-auto scrollbar-hide">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-800 hover:text-red-600 transition-colors font-medium whitespace-nowrap text-base border-b-3 pb-4 ${
                  index === 0 ? 'border-red-600 text-red-600' : 'border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors font-medium border-l-4 border-transparent hover:border-red-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .border-b-3 {
          border-bottom-width: 3px;
        }
      `}</style>
    </div>
  );
}