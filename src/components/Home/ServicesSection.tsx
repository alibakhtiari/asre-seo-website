
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, User, Image } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'سئو و بهینه‌سازی',
      description: 'بهینه‌سازی وب‌سایت شما برای موتورهای جستجو و افزایش رتبه در گوگل',
      features: ['تحلیل کلمات کلیدی', 'بهینه‌سازی محتوا', 'لینک‌سازی داخلی و خارجی', 'گزارش‌دهی مفصل'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: User,
      title: 'دیجیتال مارکتینگ',
      description: 'استراتژی‌های جامع بازاریابی دیجیتال برای رشد کسب‌وکار شما',
      features: ['مدیریت شبکه‌های اجتماعی', 'تبلیغات محتوایی', 'ایمیل مارکتینگ', 'تحلیل رقبا'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Image,
      title: 'طراحی وب‌سایت',
      description: 'طراحی و توسعه وب‌سایت‌های مدرن، سریع و کاربرپسند',
      features: ['طراحی ریسپانسیو', 'بهینه‌سازی سرعت', 'رابط کاربری حرفه‌ای', 'پشتیبانی فنی'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            خدمات <span className="gradient-text">حرفه‌ای</span> ما
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            با استفاده از جدیدترین تکنولوژی‌ها و روش‌های بازاریابی، کسب‌وکار شما را به سطح بعدی می‌بریم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden animate-slide-in-right"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-800 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-800">
                      <div className="w-2 h-2 bg-gradient-to-r from-asre-blue-500 to-asre-green-500 rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-2 hover:bg-gradient-to-r hover:from-asre-blue-500 hover:to-asre-green-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  اطلاعات بیشتر
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-asre-blue-500 to-asre-green-500 rounded-2xl p-8 md:p-12 text-white animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              آماده شروع هستید؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              مشاوره رایگان دریافت کنید و ببینید چگونه می‌توانیم کسب‌وکار شما را متحول کنیم
            </p>
            <Button 
              size="lg"
              className="bg-white text-asre-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              درخواست مشاوره رایگان
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
