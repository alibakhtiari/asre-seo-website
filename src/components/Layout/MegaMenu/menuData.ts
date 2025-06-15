
import { MenuCategory } from './types';

export const menuCategories: MenuCategory[] = [
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
    title: 'خدمات هوش مصنوعی',
    icon: '🤖',
    color: 'text-violet-600',
    items: [
      { title: 'اتوماسیون بازاریابی', href: '/services/ai/marketing-automation', isNew: true },
      { title: 'تولید محتوا با AI', href: '/services/ai/auto-content-generation', isNew: true },
      { title: 'تحلیل رفتار کاربران', href: '/services/ai/user-behavior-analysis' },
      { title: 'سئو هوشمند', href: '/services/ai/smart-seo' },
      { title: 'چت‌بات فارسی', href: '/services/ai/persian-chatbot' },
      { title: 'بهینه‌سازی نرخ تبدیل', href: '/services/ai/conversion-optimization' },
      { title: 'شخصی‌سازی محتوا', href: '/services/ai/content-personalization' },
      { title: 'مانیتورینگ برند', href: '/services/ai/brand-monitoring' },
      { title: 'تولید ویدیو با AI', href: '/services/ai/ai-video-generation', isNew: true },
      { title: 'مشاوره AI', href: '/services/ai/ai-consulting' }
    ]
  }
];
