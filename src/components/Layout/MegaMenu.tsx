
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories: MenuCategory[] = [
    {
      title: 'خدمات سئو',
      icon: '🔍',
      items: [
        { title: 'سئو سایت', href: '/services/seo/website-seo', description: 'بهینه‌سازی کلی وب‌سایت برای موتورهای جستجو' },
        { title: 'سئو تکنیکال', href: '/services/seo/technical-seo', description: 'بهینه‌سازی فنی و ساختاری وب‌سایت' },
        { title: 'سئو محتوا', href: '/services/seo/content-seo', description: 'بهینه‌سازی محتوا برای کلمات کلیدی' },
        { title: 'لینک‌سازی خارجی و داخلی', href: '/services/seo/link-building', description: 'استراتژی لینک‌سازی قدرتمند' },
        { title: 'آنالیز و مشاوره سئو', href: '/services/seo/analysis', description: 'تحلیل جامع و ارائه راهکار' },
        { title: 'آموزش سئو', href: '/services/seo/training', description: 'آموزش تخصصی تکنیک‌های سئو' }
      ]
    },
    {
      title: 'طراحی و بهینه‌سازی سایت',
      icon: '💻',
      items: [
        { title: 'طراحی سایت سئو محور', href: '/services/web/seo-web-design', description: 'طراحی وب‌سایت بهینه برای سئو' },
        { title: 'بهینه‌سازی سرعت سایت', href: '/services/web/website-speed', description: 'افزایش سرعت بارگذاری صفحات' },
        { title: 'صفحات فرود اختصاصی', href: '/services/web/landing-pages', description: 'طراحی صفحات فرود پرتبدیل' },
        { title: 'معماری اطلاعات و UX', href: '/services/web/ux-architecture', description: 'طراحی تجربه کاربری بهینه' }
      ]
    },
    {
      title: 'تبلیغات و بازاریابی دیجیتال',
      icon: '📈',
      items: [
        { title: 'تبلیغات کلیکی گوگل', href: '/services/marketing/google-ads', description: 'مدیریت کمپین‌های Google Ads' },
        { title: 'بازاریابی ایمیلی', href: '/services/marketing/email-marketing', description: 'کمپین‌های ایمیل مارکتینگ' },
        { title: 'مدیریت شبکه‌های اجتماعی', href: '/services/marketing/social-media', description: 'مدیریت کانال‌های اجتماعی' },
        { title: 'کمپین‌های تبلیغاتی ترکیبی', href: '/services/marketing/integrated-campaigns', description: 'استراتژی‌های چندکاناله' },
        { title: 'مدیریت قیف فروش', href: '/services/marketing/sales-funnel', description: 'بهینه‌سازی مسیر فروش' }
      ]
    },
    {
      title: 'تولید محتوا و رسانه',
      icon: '📝',
      items: [
        { title: 'تولید محتوای متنی', href: '/services/content/text-content', description: 'نوشتن مقالات و محتوای کیفی' },
        { title: 'محتوای شبکه‌های اجتماعی', href: '/services/content/social-media-content', description: 'محتوای جذاب برای شبکه‌ها' },
        { title: 'محتوای تصویری و ویدیویی', href: '/services/content/visual-content', description: 'تولید محتوای بصری' },
        { title: 'تقویم محتوایی', href: '/services/content/content-calendar', description: 'برنامه‌ریزی و زمان‌بندی محتوا' },
        { title: 'ترجمه و بومی‌سازی', href: '/services/content/translation', description: 'ترجمه و تطبیق محتوا' }
      ]
    },
    {
      title: 'خدمات هوش مصنوعی',
      icon: '🤖',
      items: [
        { title: 'اتوماسیون بازاریابی', href: '/services/ai/marketing-automation', description: 'خودکارسازی فرایندهای بازاریابی' },
        { title: 'تولید محتوای خودکار', href: '/services/ai/auto-content-generation', description: 'تولید محتوا با هوش مصنوعی' },
        { title: 'تحلیل رفتار کاربران', href: '/services/ai/user-behavior-analysis', description: 'بررسی الگوهای رفتاری با AI' },
        { title: 'سئو هوشمند', href: '/services/ai/smart-seo', description: 'بهینه‌سازی هوشمند با AI' },
        { title: 'چت‌بات هوشمند فارسی', href: '/services/ai/persian-chatbot', description: 'ربات گفتگوی پیشرفته' },
        { title: 'بهینه‌سازی نرخ تبدیل', href: '/services/ai/conversion-optimization', description: 'افزایش تبدیل با هوش مصنوعی' },
        { title: 'شخصی‌سازی محتوا', href: '/services/ai/content-personalization', description: 'محتوای شخصی‌سازی‌شده' },
        { title: 'مانیتورینگ برند', href: '/services/ai/brand-monitoring', description: 'نظارت بر برند با AI' },
        { title: 'ساخت ویدیو و تصویر', href: '/services/ai/ai-video-generation', description: 'تولید محتوای بصری با AI' },
        { title: 'مشاوره پیاده‌سازی AI', href: '/services/ai/ai-consulting', description: 'مشاوره کاربرد هوش مصنوعی' }
      ]
    }
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center text-text-700 hover:text-primary-600 transition-colors duration-200 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>خدمات</span>
        <ChevronDown className="mr-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 w-screen max-w-6xl bg-white rounded-lg shadow-2xl border border-primary-100 py-8 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-8">
            {menuCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-text-900 border-b-2 border-primary-200 pb-2">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        to={item.href}
                        className="group block p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="font-semibold text-text-800 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="text-sm text-text-600 group-hover:text-text-700">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-primary-100 px-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-bold mb-2">مشاوره رایگان</h4>
              <p className="mb-4">با متخصصان ما تماس بگیرید و راهکار بهترین خدمات را دریافت کنید</p>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                درخواست مشاوره
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
