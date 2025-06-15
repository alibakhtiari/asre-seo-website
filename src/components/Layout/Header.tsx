
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ع</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-900">عصر سئو</h1>
              <p className="text-xs text-text-500">AsreSEO</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => 
              index === 1 ? (
                <MegaMenu key="services" />
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="text-text-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:opacity-90 transition-opacity duration-200">
              مشاوره رایگان
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-text-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-100 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="block text-text-700 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-full mt-4">
                مشاوره رایگان
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
