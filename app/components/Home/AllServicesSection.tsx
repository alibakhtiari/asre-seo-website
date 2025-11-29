'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Search,
  Globe,
  TrendingUp,
  Bot,
  Palette,
  Zap,
  Target,
  MessageSquare,
  Eye,
  Users,
  Mail,
  Share2,
  BarChart3,
  Sparkles,
  Video,
  BrainCircuit,
  UserCheck,
  Shield,
  FileText,
  BookOpen
} from 'lucide-react';

const AllServicesSection = () => {
  const serviceCategories = [
    {
      title: 'خدمات سئو',
      icon: Search,
      color: 'from-blue-500 to-blue-700',
      services: [
        { title: 'سئو تکنیکال و داخلی', description: 'بهینه‌سازی فنی و محتوایی سایت برای رتبه اول گوگل', href: '/services/seo/technical-onpage', icon: Zap, isPopular: true, isNew: true },
        { title: 'سئو محتوا و اعتبار', description: 'استراتژی محتوا و لینک‌سازی برای افزایش اعتبار دامنه', href: '/services/seo/content-authority', icon: FileText, isNew: true },
        { title: 'سئو محلی', description: 'ثبت در گوگل مپ و جذب مشتریان محلی', href: '/services/seo/local-seo', icon: Globe, isNew: true }
      ]
    },
    {
      title: 'طراحی و توسعه',
      icon: Palette,
      color: 'from-purple-500 to-purple-700',
      services: [
        { title: 'طراحی سایت سئو محور', description: 'طراحی سایت‌های زیبا و کاملاً بهینه برای گوگل', href: '/services/web/seo-web-design', icon: Globe },
        { title: 'بهینه‌سازی سرعت', description: 'افزایش سرعت بارگذاری برای تجربه کاربری بهتر', href: '/services/web/website-speed', icon: Zap },
        { title: 'صفحات فرود', description: 'طراحی صفحات فرود با نرخ تبدیل بالا', href: '/services/web/landing-pages', icon: Target },
        { title: 'تجربه کاربری', description: 'طراحی مسیر کاربر برای تعامل بهتر و فروش بیشتر', href: '/services/web/ux-architecture', icon: Users }
      ]
    },
    {
      title: 'بازاریابی دیجیتال',
      icon: TrendingUp,
      color: 'from-green-500 to-green-700',
      services: [
        { title: 'تبلیغات گوگل', description: 'تبلیغات هدفمند در نتایج جستجوی گوگل با بازدهی بالا', href: '/services/marketing/google-ads', icon: Target },
        { title: 'بازاریابی ایمیلی', description: 'ارتباط موثر با مشتریان و افزایش وفاداری', href: '/services/marketing/email-marketing', icon: Mail },
        { title: 'شبکه‌های اجتماعی', description: 'مدیریت حرفه‌ای شبکه‌های اجتماعی و جذب مخاطب', href: '/services/marketing/social-media', icon: Share2 },
        { title: 'قیف فروش', description: 'طراحی مسیر تبدیل بازدیدکننده به مشتری وفادار', href: '/services/marketing/sales-funnel', icon: TrendingUp },
        { title: 'کمپین یکپارچه', description: 'اجرای کمپین‌های 360 درجه برای حداکثر تاثیرگذاری', href: '/services/marketing/integrated-campaigns', icon: BarChart3 }
      ]
    },
    {
      title: 'محتوا و ترجمه',
      icon: FileText,
      color: 'from-orange-500 to-orange-700',
      services: [
        { title: 'تولید محتوای متنی', description: 'تولید مقالات تخصصی و یونیک برای وبلاگ و محصولات', href: '/services/content/text-content', icon: FileText },
        { title: 'محتوای شبکه‌های اجتماعی', description: 'تولید محتوای جذاب و ویروسی برای اینستاگرام و لینکدین', href: '/services/content/social-media-content', icon: Share2 },
        { title: 'تولید محتوای بصری', description: 'طراحی گرافیک، اینفوگرافیک و بنرهای تبلیغاتی', href: '/services/content/visual-content', icon: Eye },
        { title: 'تقویم محتوایی', description: 'برنامه‌ریزی دقیق انتشار محتوا برای نظم و تداوم', href: '/services/content/content-calendar', icon: BarChart3 },
        { title: 'ترجمه تخصصی', description: 'ترجمه متون تخصصی با رعایت اصول سئو و نگارش', href: '/services/content/translation', icon: Globe }
      ]
    },
    {
      title: 'خدمات هوش مصنوعی',
      icon: Bot,
      color: 'from-violet-500 to-violet-700',
      services: [
        { title: 'تولید محتوای هوشمند', description: 'تولید محتوای متنی و ویدیویی با هوش مصنوعی', href: '/services/ai/content-creation', icon: Sparkles, isNew: true },
        { title: 'بازاریابی و تعامل AI', description: 'اتوماسیون بازاریابی، چت‌بات و شخصی‌سازی', href: '/services/ai/marketing-engagement', icon: Bot, isNew: true },
        { title: 'تحلیل و استراتژی', description: 'سئو هوشمند، تحلیل رفتار و مانیتورینگ برند', href: '/services/ai/analysis-strategy', icon: BrainCircuit, isNew: true }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" aria-label="تمام خدمات">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            تمام <span className="gradient-text">خدمات</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            مجموعه کاملی از خدمات دیجیتال مارکتینگ، سئو، طراحی وب و هوش مصنوعی برای رشد کسب‌وکار شما
          </p>
        </div>

        {/* Services Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              {/* Category Header */}
              <div className="flex items-center justify-center mb-8">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  <category.icon className="h-6 w-6" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link key={serviceIndex} href={service.href} className="group block h-full" aria-label={`مشاهده جزئیات ${service.title}`}>
                    <Card className="service-card hover-lift hover-glow h-full relative overflow-hidden flex flex-col border-transparent hover:border-blue-200 transition-all duration-300">
                      {/* New/Popular Badge */}
                      {(service.isNew || service.isPopular) && (
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white z-10 shadow-sm ${service.isNew ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'
                          }`}>
                          {service.isNew ? 'جدید' : 'محبوب'}
                        </div>
                      )}

                      <CardHeader className="text-center pb-2 pt-6">
                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${category.color} mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md`}>
                          <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 flex-grow flex flex-col justify-between text-center">
                        <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3">
                          {service.description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full mt-auto text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        >
                          مشاهده جزئیات
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-3xl p-8 md:p-12 animate-pulse-glow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              سوالی دارید؟
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              با مشاورین ما تماس بگیرید تا بهترین خدمات برای نیاز شما را انتخاب کنیم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-bg text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                مشاوره رایگان
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-gray-50 transition-all duration-200"
              >
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
