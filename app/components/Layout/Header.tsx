
'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کارها', href: '/portfolio' },
    { title: 'درباره ما', href: '/about' },
    { title: 'وبلاگ', href: '/blog' },
    { title: 'تماس با ما', href: '/contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-primary-100 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow duration-200">
              <span className="text-white font-bold text-lg">ع</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-900 group-hover:text-primary-600 transition-colors duration-200">عصر سئو</h1>
              <p className="text-xs text-text-500">AsreSEO Digital Marketing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => 
              index === 0 ? (
                <Link
                  key={index}
                  href={item.href}
                  className="text-text-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.title}
                </Link>
              ) : index === 1 ? (
                <MegaMenu key="services" />
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="text-text-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:opacity-90 transition-opacity duration-200 px-6 py-2 font-semibold shadow-md hover:shadow-lg">
              مشاوره رایگان
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-primary-50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="منوی موبایل"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-700" />
            ) : (
              <Menu className="h-6 w-6 text-text-700" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-text-700 hover:text-primary-600 transition-colors duration-200 py-2 px-4 rounded-md hover:bg-primary-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-full font-semibold">
                  مشاوره رایگان
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
