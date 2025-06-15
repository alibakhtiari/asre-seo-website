
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowLeft, Sparkles } from 'lucide-react';
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
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
      setActiveCategory(null);
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
      color: 'from-blue-500 to-cyan-500',
      items: [
        { title: 'سئو سایت', href: '/services/seo/website-seo', description: 'بهینه‌سازی کلی وب‌سایت', isPopular: true },
        { title: 'سئو تکنیکال', href: '/services/seo/technical-seo', description: 'بهینه‌سازی فنی و ساختاری' },
        { title: 'سئو محتوا', href: '/services/seo/content-seo', description: 'بهینه‌سازی محتوا برای کلمات کلیدی' },
        { title: 'لینک‌سازی', href: '/services/seo/link-building', description: 'استراتژی لینک‌سازی قدرتمند' },
        { title: 'آنالیز سئو', href: '/services/seo/analysis', description: 'تحلیل جامع و ارائه راهکار' },
        { title: 'آموزش سئو', href: '/services/seo/training', description: 'آموزش تخصصی تکنیک‌های سئو' }
      ]
    },
    {
      title: 'طراحی و توسعه',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      items: [
        { title: 'طراحی سایت سئو محور', href: '/services/web/seo-web-design', description: 'طراحی وب‌سایت بهینه' },
        { title: 'بهینه‌سازی سرعت', href: '/services/web/website-speed', description: 'افزایش سرعت بارگذاری' },
        { title: 'صفحات فرود', href: '/services/web/landing-pages', description: 'طراحی صفحات پرتبدیل' },
        { title: 'تجربه کاربری', href: '/services/web/ux-architecture', description: 'طراحی UX بهینه' }
      ]
    },
    {
      title: 'بازاریابی دیجیتال',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
      items: [
        { title: 'تبلیغات گوگل', href: '/services/marketing/google-ads', description: 'مدیریت Google Ads' },
        { title: 'بازاریابی ایمیلی', href: '/services/marketing/email-marketing', description: 'کمپین‌های ایمیل مارکتینگ' },
        { title: 'شبکه‌های اجتماعی', href: '/services/marketing/social-media', description: 'مدیریت کانال‌های اجتماعی' },
        { title: 'کمپین‌های ترکیبی', href: '/services/marketing/integrated-campaigns', description: 'استراتژی‌های چندکاناله' },
        { title: 'قیف فروش', href: '/services/marketing/sales-funnel', description: 'بهینه‌سازی مسیر فروش' }
      ]
    },
    {
      title: 'تولید محتوا',
      icon: '📝',
      color: 'from-orange-500 to-red-500',
      items: [
        { title: 'محتوای متنی', href: '/services/content/text-content', description: 'نوشتن مقالات کیفی' },
        { title: 'محتوای اجتماعی', href: '/services/content/social-media-content', description: 'محتوای جذاب شبکه‌ها' },
        { title: 'محتوای بصری', href: '/services/content/visual-content', description: 'تولید محتوای تصویری' },
        { title: 'تقویم محتوایی', href: '/services/content/content-calendar', description: 'برنامه‌ریزی محتوا' },
        { title: 'ترجمه و بومی‌سازی', href: '/services/content/translation', description: 'ترجمه و تطبیق محتوا' }
      ]
    },
    {
      title: 'هوش مصنوعی',
      icon: '🤖',
      color: 'from-violet-500 to-purple-600',
      items: [
        { title: 'اتوماسیون بازاریابی', href: '/services/ai/marketing-automation', description: 'خودکارسازی فرایندها', isNew: true },
        { title: 'تولید محتوا با AI', href: '/services/ai/auto-content-generation', description: 'محتوای هوشمند', isNew: true },
        { title: 'تحلیل رفتار کاربران', href: '/services/ai/user-behavior-analysis', description: 'بررسی الگوهای رفتاری' },
        { title: 'سئو هوشمند', href: '/services/ai/smart-seo', description: 'بهینه‌سازی با AI' },
        { title: 'چت‌بات فارسی', href: '/services/ai/persian-chatbot', description: 'ربات گفتگوی پیشرفته' },
        { title: 'بهینه‌سازی تبدیل', href: '/services/ai/conversion-optimization', description: 'افزایش تبدیل با AI' },
        { title: 'شخصی‌سازی محتوا', href: '/services/ai/content-personalization', description: 'محتوای شخصی‌سازی‌شده' },
        { title: 'مانیتورینگ برند', href: '/services/ai/brand-monitoring', description: 'نظارت بر برند با AI' },
        { title: 'ساخت ویدیو و تصویر', href: '/services/ai/ai-video-generation', description: 'تولید محتوای بصری' },
        { title: 'مشاوره AI', href: '/services/ai/ai-consulting', description: 'مشاوره کاربرد هوش مصنوعی' }
      ]
    }
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center text-text-700 hover:text-primary-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-primary-50 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-semibold">خدمات</span>
        <ChevronDown className={`mr-2 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:text-primary-600`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-3 w-screen max-w-7xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary-100/50 z-50 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            animation: 'fadeIn 0.3s ease-out, slideUp 0.3s ease-out'
          }}
          role="menu"
          aria-label="خدمات عصر سئو"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">خدمات عصر سئو</h3>
                <p className="text-primary-100">راهکارهای جامع دیجیتال مارکتینگ</p>
              </div>
              <div className="hidden lg:flex items-center text-white/80">
                <Sparkles className="h-5 w-5 mr-2" />
                <span className="text-sm">+۵۰۰ پروژه موفق</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {menuCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="group"
                  onMouseEnter={() => setActiveCategory(index)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Category Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg mb-3 group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-xl ml-2" role="img" aria-label={category.title}>
                        {category.icon}
                      </span>
                      <h4 className="font-bold text-sm">{category.title}</h4>
                    </div>
                  </div>

                  {/* Category Items */}
                  <ul className="space-y-2" role="none">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} role="none">
                        <Link
                          to={item.href}
                          className={`group/item relative block p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:${category.color} hover:text-white hover:shadow-lg transform hover:-translate-y-0.5 ${
                            activeCategory === index ? 'bg-primary-50/50' : ''
                          }`}
                          onClick={() => setIsOpen(false)}
                          role="menuitem"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm group-hover/item:text-white transition-colors">
                                  {item.title}
                                </span>
                                {item.isNew && (
                                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                    جدید
                                  </span>
                                )}
                                {item.isPopular && (
                                  <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                    محبوب
                                  </span>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-xs text-text-600 group-hover/item:text-white/90 leading-relaxed transition-colors">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <ArrowLeft className="h-3 w-3 text-text-400 group-hover/item:text-white opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/item:translate-x-0" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="mt-8 pt-8 border-t border-primary-100">
              <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">مشاوره رایگان دریافت کنید</h4>
                  <p className="mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
                    با متخصصان ما تماس بگیرید و راهکار بهترین خدمات را دریافت کنید
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 group"
                      onClick={() => setIsOpen(false)}
                    >
                      درخواست مشاوره رایگان
                      <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      مشاهده همه خدمات
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(10px); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default MegaMenu;
