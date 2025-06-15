
import { Shield, Clock, Users, Award, HeadphonesIcon, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'تیم متخصص و با تجربه',
      description: 'متخصصان ما با سال‌ها تجربه در زمینه دیجیتال مارکتینگ آماده خدمت‌رسانی هستند',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: TrendingUp,
      title: 'نتایج قابل اندازه‌گیری',
      description: 'تمام فعالیت‌های ما بر اساس داده و آمار بوده و نتایج قابل اندازه‌گیری ارائه می‌دهیم',
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      icon: Shield,
      title: 'روش‌های ایمن و مطمئن',
      description: 'تمام تکنیک‌های ما مطابق با استانداردهای گوگل و کاملاً ایمن هستند',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Clock,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم پشتیبانی ما همیشه در دسترس شما قرار دارد تا بهترین خدمات را دریافت کنید',
      color: 'from-secondary-300 to-primary-500'
    },
    {
      icon: Users,
      title: 'مشتری‌محوری',
      description: 'نیازها و اهداف شما در اولویت قرار دارد و تمام تلاش‌مان برای رضایت شماست',
      color: 'from-accent-500 to-primary-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'مشاوره رایگان',
      description: 'قبل از شروع هر پروژه، مشاوره کاملی در اختیار شما قرار می‌دهیم',
      color: 'from-primary-400 to-secondary-500'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background-50 to-background-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--primary-500)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-text-900 mb-8">
            چرا <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">عصر سئو</span> را انتخاب کنید؟
          </h2>
          <p className="text-xl md:text-2xl text-text-600 max-w-4xl mx-auto leading-relaxed">
            مزایای همکاری با تیم حرفه‌ای و متخصص عصر سئو
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-primary-100 hover:border-primary-200 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 group-hover:animate-glow transition-all duration-500 shadow-lg`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-text-900 mb-6 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-text-600 leading-relaxed text-lg">
                {feature.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
