
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { title: 'سئو و بهینه‌سازی', href: '/services/seo' },
      { title: 'تبلیغات گوگل', href: '/services/google-ads' },
      { title: 'دیجیتال مارکتینگ', href: '/services/digital-marketing' },
      { title: 'طراحی وب‌سایت', href: '/services/web-design' }
    ],
    company: [
      { title: 'درباره ما', href: '/about' },
      { title: 'نمونه کارها', href: '/portfolio' },
      { title: 'وبلاگ', href: '/blog' },
      { title: 'تماس با ما', href: '/contact' }
    ],
    support: [
      { title: 'سوالات متداول', href: '/faq' },
      { title: 'پشتیبانی', href: '/support' },
      { title: 'مشاوره رایگان', href: '/consultation' },
      { title: 'قوانین و مقررات', href: '/terms' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-asre-blue-500 to-asre-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">عصر سئو</h3>
                <p className="text-sm text-gray-400">AsreSEO</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              ما در عصر سئو با ارائه خدمات حرفه‌ای دیجیتال مارکتینگ، کسب‌وکار شما را به قله موفقیت می‌رسانیم. تیم متخصص ما آماده همراهی شماست.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <a href="mailto:info@asreseo.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 ml-2" />
                info@asreseo.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمات ما</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">شرکت</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">پشتیبانی</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} عصر سئو. تمامی حقوق محفوظ است.
            </p>
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                حریم خصوصی
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                قوانین و مقررات
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                نقشه سایت
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
