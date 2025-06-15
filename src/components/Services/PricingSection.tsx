
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const plans = [
    {
      name: 'پایه',
      description: 'مناسب برای کسب‌وکارهای کوچک',
      price: '۲.۵',
      period: 'ماهانه',
      features: [
        'سئو پایه سایت',
        'تحلیل رقبا',
        'گزارش ماهانه',
        'پشتیبانی ایمیلی',
        '۱۰ کلمه کلیدی'
      ],
      isPopular: false,
      buttonText: 'انتخاب پلن پایه'
    },
    {
      name: 'حرفه‌ای',
      description: 'محبوب‌ترین انتخاب کسب‌وکارها',
      price: '۵',
      period: 'ماهانه',
      features: [
        'سئو کامل و پیشرفته',
        'تبلیغات گوگل ادز',
        'مدیریت شبکه‌های اجتماعی',
        'گزارش‌گیری هفتگی',
        'پشتیبانی تلفنی',
        '۳۰ کلمه کلیدی',
        'تولید محتوا'
      ],
      isPopular: true,
      buttonText: 'انتخاب پلن حرفه‌ای'
    },
    {
      name: 'پیشرفته',
      description: 'برای کسب‌وکارهای بزرگ',
      price: '۱۰',
      period: 'ماهانه',
      features: [
        'تمام خدمات پلن حرفه‌ای',
        'مشاوره استراتژیک',
        'طراحی لندینگ پیج',
        'ایمیل مارکتینگ',
        'A/B تست',
        'آنالیز عمیق داده‌ها',
        'کلمات کلیدی نامحدود',
        'مدیر اختصاصی پروژه'
      ],
      isPopular: false,
      buttonText: 'انتخاب پلن پیشرفته'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            پکیج‌های <span className="gradient-text">خدماتی</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            بسته‌های متنوع و منطبق با نیاز کسب‌وکار شما
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden ${plan.isPopular ? 'border-asre-blue-500 border-2 shadow-xl scale-105' : 'border-gray-200 shadow-md'} hover:shadow-xl transition-all duration-300 animate-fade-in`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0">
                  <div className="bg-gradient-to-r from-asre-blue-500 to-asre-green-500 text-white text-center py-2 text-sm font-medium">
                    محبوب‌ترین انتخاب
                  </div>
                </div>
              )}
              
              <CardHeader className={plan.isPopular ? 'pt-12' : ''}>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 mr-2">میلیون تومان</span>
                    <div className="text-sm text-gray-500">{plan.period}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-asre-green-100 flex items-center justify-center ml-3">
                        <div className="w-2 h-2 rounded-full bg-asre-green-500"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${plan.isPopular ? 'gradient-bg text-white' : 'bg-gray-900 text-white hover:bg-gray-800'} transition-all`}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            نیاز به پکیج سفارشی دارید؟
          </p>
          <Button variant="outline" className="border-asre-blue-500 text-asre-blue-600 hover:bg-asre-blue-50">
            درخواست پکیج سفارشی
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
