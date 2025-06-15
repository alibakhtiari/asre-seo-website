
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { title: 'صفحه اصلی', href: '/' },
    { 
      title: 'خدمات', 
      href: '/services',
      hasSubmenu: true,
      submenu: [
        { title: 'سئو و بهینه‌سازی', href: '/services/seo' },
        { title: 'تبلیغات گوگل', href: '/services/google-ads' },
        { title: 'دیجیتال مارکتینگ', href: '/services/digital-marketing' },
        { title: 'طراحی وب‌سایت', href: '/services/web-design' }
      ]
    },
    { title: 'نمونه کارها', href: '/portfolio' },
    { title: 'درباره ما', href: '/about' },
    { title: 'وبلاگ', href: '/blog' },
    { title: 'تماس با ما', href: '/contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-asre-blue-500 to-asre-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ع</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">عصر سئو</h1>
              <p className="text-xs text-gray-500">AsreSEO</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.hasSubmenu ? (
                  <div>
                    <button
                      className="flex items-center text-gray-700 hover:text-asre-blue-600 transition-colors duration-200 py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="mr-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div
                        className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.submenu?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-asre-blue-600 transition-colors duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-asre-blue-600 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity duration-200">
              مشاوره رایگان
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.href}
                    className="block text-gray-700 hover:text-asre-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.hasSubmenu && (
                    <div className="mr-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-asre-blue-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="gradient-bg text-white w-full mt-4">
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
