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
        { title: 'سئو سایت', href: '/services/seo/website-seo', icon: Globe, isPopular: true },
        { title: 'سئو تکنیکال', href: '/services/seo/technical-seo', icon: Zap },
        { title: 'سئو محتوا', href: '/services/seo/content-seo', icon: FileText },
        { title: 'لینک‌سازی', href: '/services/seo/link-building', icon: Target },
        { title: 'آنالیز سئو', href: '/services/seo/analysis', icon: BarChart3 },
        { title: 'آموزش سئو', href: '/services/seo/training', icon: BookOpen }
      ]
    },
    {
      title: 'طراحی و توسعه',
      icon: Palette,
      color: 'from-purple-500 to-purple-700',
      services: [
        { title: 'طراحی سایت سئو محور', href: '/services/web/seo-web-design', icon: Globe },
        { title: 'بهینه‌سازی سرعت', href: '/services/web/website-speed', icon: Zap },
        { title: 'صفحات فرود', href: '/services/web/landing-pages', icon: Target },
        { title: 'تجربه کاربری', href: '/services/web/ux-architecture', icon: Users }
      ]
    },
    {
      title: 'بازاریابی دیجیتال',
      icon: TrendingUp,
      color: 'from-green-500 to-green-700',
      services: [
        { title: 'تبلیغات گوگل', href: '/services/marketing/google-ads', icon: Target },
        { title: 'بازاریابی ایمیلی', href: '/services/marketing/email-marketing', icon: Mail },
        { title: 'شبکه‌های اجتماعی', href: '/services/marketing/social-media', icon: Share2 },
        { title: 'قیف فروش', href: '/services/marketing/sales-funnel', icon: TrendingUp },
        { title: 'کمپین یکپارچه', href: '/services/marketing/integrated-campaigns', icon: BarChart3 }
      ]
    },
    {
      title: 'محتوا و ترجمه',
      icon: FileText,
      color: 'from-orange-500 to-orange-700',
      services: [
        { title: 'تولید محتوای متنی', href: '/services/content/text-content', icon: FileText },
        { title: 'محتوای شبکه‌های اجتماعی', href: '/services/content/social-media-content', icon: Share2 },
        { title: 'تولید محتوای بصری', href: '/services/content/visual-content', icon: Eye },
        { title: 'تقویم محتوایی', href: '/services/content/content-calendar', icon: BarChart3 },
        { title: 'ترجمه تخصصی', href: '/services/content/translation', icon: Globe }
      ]
    },
    {
      title: 'خدمات هوش مصنوعی',
      icon: Bot,
      color: 'from-violet-500 to-violet-700',
      services: [
        { title: 'اتوماسیون بازاریابی', href: '/services/ai/marketing-automation', icon: Bot, isNew: true },
        { title: 'تولید محتوا با AI', href: '/services/ai/auto-content-generation', icon: Sparkles, isNew: true },
        { title: 'تحلیل رفتار کاربران', href: '/services/ai/user-behavior-analysis', icon: UserCheck },
        { title: 'سئو هوشمند', href: '/services/ai/smart-seo', icon: BrainCircuit },
        { title: 'چت‌بات فارسی', href: '/services/ai/persian-chatbot', icon: MessageSquare },
        { title: 'بهینه‌سازی نرخ تبدیل', href: '/services/ai/conversion-optimization', icon: Target },
        { title: 'شخصی‌سازی محتوا', href: '/services/ai/content-personalization', icon: UserCheck },
        { title: 'مانیتورینگ برند', href: '/services/ai/brand-monitoring', icon: Shield },
        { title: 'تولید ویدیو با AI', href: '/services/ai/ai-video-generation', icon: Video, isNew: true },
        { title: 'مشاوره AI', href: '/services/ai/ai-consulting', icon: BrainCircuit }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
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
            <div key={categoryIndex} className="animate-slide-in-up" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              {/* Category Header */}
              <div className="flex items-center justify-center mb-8">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                  <category.icon className="h-6 w-6" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link key={serviceIndex} href={service.href} className="group">
                    <Card className="service-card hover-lift hover-glow h-full relative overflow-hidden">
                      {/* New/Popular Badge */}
                      {(service.isNew || service.isPopular) && (
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white ${
                          service.isNew ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'
                        }`}>
                          {service.isNew ? 'جدید' : 'محبوب'}
                        </div>
                      )}

                      <CardHeader className="text-center pb-2">
                        <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
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
                className="gradient-bg text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105"
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
