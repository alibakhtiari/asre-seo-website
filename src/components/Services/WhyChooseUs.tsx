
import { Shield, Clock, Users, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'تیم متخصص و با تجربه',
      description: 'متخصصان ما با سال‌ها تجربه در زمینه دیجیتال مارکتینگ آماده خدمت‌رسانی هستند'
    },
    {
      icon: TrendingUp,
      title: 'نتایج قابل اندازه‌گیری',
      description: 'تمام فعالیت‌های ما بر اساس داده و آمار بوده و نتایج قابل اندازه‌گیری ارائه می‌دهیم'
    },
    {
      icon: Shield,
      title: 'روش‌های ایمن و مطمئن',
      description: 'تمام تکنیک‌های ما مطابق با استانداردهای گوگل و کاملاً ایمن هستند'
    },
    {
      icon: Clock,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم پشتیبانی ما همیشه در دسترس شما قرار دارد تا بهترین خدمات را دریافت کنید'
    },
    {
      icon: Users,
      title: 'مشتری‌محوری',
      description: 'نیازها و اهداف شما در اولویت قرار دارد و تمام تلاش‌مان برای رضایت شماست'
    },
    {
      icon: HeadphonesIcon,
      title: 'مشاوره رایگان',
      description: 'قبل از شروع هر پروژه، مشاوره کاملی در اختیار شما قرار می‌دهیم'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            چرا <span className="gradient-text">عصر سئو</span> را انتخاب کنید؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مزایای همکاری با تیم حرفه‌ای و متخصص عصر سئو
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow group animate-fade-in">
              <div className="w-14 h-14 bg-gradient-to-r from-asre-blue-500 to-asre-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
