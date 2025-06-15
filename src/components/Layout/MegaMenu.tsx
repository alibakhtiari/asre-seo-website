
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
  color: string;
}

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const menuCategories: MenuCategory[] = [
    {
      title: 'خدمات سئو',
      icon: '🔍',
      color: 'text-blue-600',
      items: [
        { title: 'سئو سایت', href: '/services/seo/website-seo', isPopular: true },
        { title: 'سئو تکنیکال', href: '/services/seo/technical-seo' },
        { title: 'سئو محتوا', href: '/services/seo/content-seo' },
        { title: 'لینک‌سازی', href: '/services/seo/link-building' },
        { title: 'آنالیز سئو', href: '/services/seo/analysis' }
      ]
    },
    {
      title: 'طراحی و توسعه',
      icon: '💻',
      color: 'text-purple-600',
      items: [
        { title: 'طراحی سایت سئو محور', href: '/services/web/seo-web-design' },
        { title: 'بهینه‌سازی سرعت', href: '/services/web/website-speed' },
        { title: 'صفحات فرود', href: '/services/web/landing-pages' },
        { title: 'تجربه کاربری', href: '/services/web/ux-architecture' }
      ]
    },
    {
      title: 'بازاریابی دیجیتال',
      icon: '📈',
      color: 'text-green-600',
      items: [
        { title: 'تبلیغات گوگل', href: '/services/marketing/google-ads' },
        { title: 'بازاریابی ایمیلی', href: '/services/marketing/email-marketing' },
        { title: 'شبکه‌های اجتماعی', href: '/services/marketing/social-media' },
        { title: 'قیف فروش', href: '/services/marketing/sales-funnel' }
      ]
    },
    {
      title: 'هوش مصنوعی',
      icon: '🤖',
      color: 'text-violet-600',
      items: [
        { title: 'اتوماسیون بازاریابی', href: '/services/ai/marketing-automation', isNew: true },
        { title: 'تولید محتوا با AI', href: '/services/ai/auto-content-generation', isNew: true },
        { title: 'تحلیل رفتار کاربران', href: '/services/ai/user-behavior-analysis' },
        { title: 'سئو هوشمند', href: '/services/ai/smart-seo' },
        { title: 'چت‌بات فارسی', href: '/services/ai/persian-chatbot' }
      ]
    }
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center text-text-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-medium">خدمات</span>
        <ChevronDown className={`mr-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-screen max-w-4xl bg-white rounded-xl shadow-lg border border-gray-100 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: 'translateY(0)',
            opacity: 1,
            transition: 'all 0.2s ease'
          }}
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-text-900">خدمات عصر سئو</h3>
            <p className="text-sm text-text-500 mt-1">راهکارهای جامع دیجیتال مارکتینگ</p>
          </div>

          {/* Menu Grid - 4 Columns */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-6">
              {menuCategories.map((category, index) => (
                <div key={index} className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center space-x-2 space-x-reverse mb-3">
                    <span className="text-lg">{category.icon}</span>
                    <h4 className={`font-semibold text-sm ${category.color}`}>
                      {category.title}
                    </h4>
                  </div>

                  {/* Category Items */}
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.href}
                          className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-text-700 group-hover:text-text-900">
                                {item.title}
                              </span>
                              {item.isNew && (
                                <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded font-medium">
                                  جدید
                                </span>
                              )}
                              {item.isPopular && (
                                <span className="bg-orange-100 text-orange-700 text-xs px-1.5 py-0.5 rounded font-medium">
                                  محبوب
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Simple CTA */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-text-600 mb-3">مشاوره رایگان دریافت کنید</p>
                <div className="flex gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    تماس با ما
                  </Link>
                  <Link
                    to="/services"
                    className="border border-gray-300 text-text-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    همه خدمات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
