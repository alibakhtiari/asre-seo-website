
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Database, FileText, BookOpen, MessageSquare, Clock } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-6 w-6 text-blue-700"/>,
    title: 'چت‌بات RAG پیشرفته',
    description: 'استفاده از تکنولوژی Retrieval-Augmented Generation برای پاسخ‌های دقیق و مبتنی بر داده‌های شما'
  },
  {
    icon: <Database className="h-6 w-6 text-green-700"/>,
    title: 'ادغام با پایگاه دانش',
    description: 'اتصال مستقیم به پایگاه دانش، صفحات سایت و اطلاعات محصولات برای پاسخ‌های جامع'
  },
  {
    icon: <FileText className="h-6 w-6 text-purple-700"/>,
    title: 'پردازش اسناد PDF',
    description: 'خواندن و تحلیل فایل‌های PDF، کاتالوگ‌ها و مستندات برای استخراج اطلاعات مرتبط'
  },
  {
    icon: <BookOpen className="h-6 w-6 text-orange-700"/>,
    title: 'یادگیری از محتوای سایت',
    description: 'تحلیل خودکار صفحات وب‌سایت و ایجاد پایگاه دانش جامع از محتوای موجود'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-indigo-700"/>,
    title: 'گفتگوی طبیعی فارسی',
    description: 'درک عمیق زبان فارسی و قابلیت گفتگوی طبیعی و روان با کاربران'
  },
  {
    icon: <Clock className="h-6 w-6 text-red-700"/>,
    title: 'پشتیبانی ۲۴/۷',
    description: 'ارائه خدمات پشتیبانی و پاسخگویی در تمام ساعات شبانه‌روز بدون وقفه'
  }
];

const benefits = [
  'کاهش ۸۰٪ بار کاری تیم پشتیبانی',
  'افزایش رضایت مشتریان با پاسخ‌های سریع و دقیق',
  'دسترسی فوری به اطلاعات محصولات و خدمات',
  'قابلیت یادگیری مداوم از تعاملات جدید',
  'یکپارچه‌سازی با سیستم‌های موجود شرکت',
  'گزارش‌دهی تحلیلی از تعاملات کاربران'
];

const faqs = [
  {
    question: 'چت‌بات RAG چگونه کار می‌کند؟',
    answer: 'چت‌بات RAG ابتدا پرسش کاربر را تحلیل کرده، سپس از پایگاه دانش اطلاعات مرتبط را جستجو می‌کند و در نهایت با ترکیب این اطلاعات، پاسخ دقیق و مفصلی ارائه می‌دهد.'
  },
  {
    question: 'چه نوع فایل‌هایی قابل پردازش است؟',
    answer: 'سیستم قادر به پردازش فایل‌های PDF، اسناد Word، صفحات وب، کاتالوگ‌های محصولات، و انواع مختلف متن‌های فارسی است.'
  },
  {
    question: 'آیا چت‌بات به‌روزرسانی خودکار دارد؟',
    answer: 'بله، سیستم به‌طور خودکار محتوای جدید وب‌سایت و اسناد اضافه شده را تحلیل کرده و پایگاه دانش خود را به‌روزرسانی می‌کند.'
  },
  {
    question: 'امکان یکپارچه‌سازی با سیستم‌های موجود وجود دارد؟',
    answer: 'بله، چت‌بات قابلیت اتصال به CRM، سیستم‌های فروش، پایگاه‌های داده و سایر نرم‌افزارهای سازمانی را دارد.'
  }
];

const PersianChatbot = () => {
  return (
    <ServicePageTemplate
      title="چت‌بات RAG فارسی | Persian AI Chatbot with Knowledge Base | عصر سئو"
      description="چت‌بات هوشمند فارسی با تکنولوژی RAG، قابلیت یادگیری از اسناد PDF، کاتالوگ‌ها و صفحات سایت برای پاسخگویی دقیق ۲۴/۷"
      keywords="چت‌بات RAG, چت‌بات فارسی, هوش مصنوعی, پایگاه دانش, Persian Chatbot, AI Bot"
      canonicalUrl="https://asreseo.com/services/ai/persian-chatbot"
      heroTitle="چت‌بات RAG هوشمند فارسی"
      heroDescription="چت‌بات پیشرفته با قابلیت یادگیری از پایگاه دانش، اسناد PDF، کاتالوگ‌ها و صفحات سایت"
    >
      <div className="space-y-16">
        {/* Features Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ویژگی‌های چت‌بات RAG
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              چت‌بات هوشمند فارسی با تکنولوژی پیشرفته RAG که از اطلاعات شما یاد می‌گیرد
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              مزایای چت‌بات RAG
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              بهبود کیفیت خدمات و کاهش هزینه‌های پشتیبانی
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              سوالات متداول
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              پاسخ به رایج‌ترین سوالات درباره چت‌بات RAG
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-right">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-right leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </ServicePageTemplate>
  );
};

export default PersianChatbot;
