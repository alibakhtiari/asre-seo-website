
import ServicePageTemplate from '@/components/Services/ServicePageTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, BookOpen, Star, Sparkles, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <ScrollText className="h-6 w-6 text-blue-600" />,
    title: 'مقالات تخصصی و سئو محور',
    description: 'نگارش مقالات هدفمند و کاملاً بهینه برای موتورهای جستجو در حوزه شما.'
  },
  {
    icon: <BookOpen className="h-6 w-6 text-green-700" />,
    title: 'تولید توضیحات محصولات',
    description: 'متون جذاب و قانع‌کننده برای معرفی بهتر محصولات فروشگاه اینترنتی شما.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-yellow-700" />,
    title: 'تنوع سبک نگارش',
    description: 'مطابق با پرسونای کسب‌وکار شما، با لحنی رسمی یا غیر رسمی، دوستانه یا آموزشی تولید می‌شود.'
  },
  {
    icon: <Star className="h-6 w-6 text-pink-600" />,
    title: 'ویرایش و تضمین کیفیت',
    description: 'تمام محتوای تولیدی قبل از تحویل ویرایش و از نظر انحصار و کیفیت بررسی می‌گردد.'
  }
];

const benefits = [
  'افزایش رتبه سئو و حضور ثابت در نتایج گوگل',
  'جذب اعتماد و ارتباط قوی‌تر با مشتریان',
  'صرفه‌جویی در وقت شما توسط تیم حرفه‌ای محتوا',
  'افزایش نرخ تبدیل و وفاداری مخاطب'
];

const faqs = [
  {
    question: 'محتوای تولید شده منحصر به فرد است؟',
    answer: 'بله، تمام متون با ضمانت یونیک بودن و بدون کپی برای هر سفارش تولید می‌شوند.'
  },
  {
    question: 'چه نوع محتواهایی را پوشش می‌دهید؟',
    answer: 'از بلاگ پست، متن سایت، توضیح محصول، معرفی خدمات، پرسش و پاسخ تا هر نوع محتوای نگارشی.'
  },
  {
    question: 'زمان تحویل به چه صورت است؟',
    answer: 'بسته به حجم سفارش، از ۲ روز تا یک هفته متداول است. مدت دقیق هنگام سفارش اعلام می‌شود.'
  }
];

const contentSection = (
  <>
    {/* Features */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            چرا تولید محتوای متنی با عصر سئو؟
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">تیم تولید محتوای ما با رعایت اصول سئو و خلاقیت، بالاترین تاثیرگذاری و بازدهی را برای سایت شما تضمین می‌کند.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    {/* Benefits */}
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">مزایای انتخاب عصر سئو برای تولید محتوا</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <BadgeCheck className="h-5 w-5 text-green-500 ml-3" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
    {/* FAQs */}
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">سوالات متداول تولید محتوای متنی</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-right">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-right">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);

const TextContent = () => {
  return (
    <ServicePageTemplate
      title="تولید محتوای متنی | تولید محتوا سئو محور | عصر سئو"
      description="تولید محتوای متنی تخصصی، سئو شده و منحصر به فرد توسط کارشناسان عصر سئو. مقالات، متن سایت و توضیحات محصول با کیفیت و بازدهی بالا."
      keywords="تولید محتوا, محتوای متنی, مقاله نویسی, محتوای سئو"
      canonicalUrl="https://asreseo.com/services/content/text-content"
      heroTitle="تولید محتوای متنی"
      heroDescription="محتوای جذاب و سئو محور برای افزایش ترافیک و تعامل کاربران"
    >
      {contentSection}
    </ServicePageTemplate>
  );
};

export default TextContent;

