'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'صفحه اصلی', href: '/' },
    { title: 'نمونه کارها', href: '/portfolio/' },
    { title: 'درباره ما', href: '/about/' },
    { title: 'وبلاگ', href: '/blog/' },
    { title: 'تماس با ما', href: '/contact/' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "top-4 mx-4 md:mx-auto max-w-7xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl border border-white/20"
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <div className={cn("px-6 sm:px-8", isScrolled ? "py-2" : "")}>
        <div className="flex items-center justify-between h-14">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors duration-200" />
            <div>
              <h1 className="text-xl font-bold text-text-900 group-hover:text-primary-600 transition-colors duration-200">عصر سئو</h1>
              <p className="text-xs text-text-500">AsreSEO Digital Marketing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
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
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact/">
              <Button className="bg-linear-to-r from-primary-500 to-secondary-500 text-white hover:opacity-90 transition-opacity duration-200 px-6 py-2 font-semibold shadow-md hover:shadow-lg">
                مشاوره رایگان
              </Button>
            </Link>
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
          <div className="lg:hidden border-t border-primary-100 py-4 animate-fade-in mt-2">
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
                <Link href="/contact/" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-linear-to-r from-primary-500 to-secondary-500 text-white w-full font-semibold">
                    مشاوره رایگان
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
