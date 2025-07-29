import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Award, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  Target,
  Headphones
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: 'تجربه ۵+ ساله',
      description: 'با بیش از ۵ سال تجربه در حوزه دیجیتال مارکتینگ، تیم ما آماده ارائه بهترین خدمات است.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'تحویل به موقع',
      description: 'تمام پروژه‌ها در زمان تعیین شده و با کیفیت بالا تحویل داده می‌شوند.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'تیم متخصص',
      description: 'تیم ما شامل بهترین متخصصان سئو، طراحی وب و دیجیتال مارکتینگ کشور است.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'نتایج اثبات شده',
      description: 'بیش از ۵۰۰ پروژه موفق و رشد متوسط ۳۰۰٪ در فروش مشتریان ما.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'ضمانت کیفیت',
      description: 'تمام خدمات ما با ضمانت کیفیت و پشتیبانی مادام‌العمر ارائه می‌شود.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Lightbulb,
      title: 'راه‌حل‌های نوآورانه',
      description: 'استفاده از جدیدترین تکنولوژی‌ها و روش‌های نوین بازاریابی.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'استراتژی هدفمند',
      description: 'تمام استراتژی‌ها بر اساس اهداف کسب‌وکار شما طراحی می‌شوند.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴/۷',
      description: 'تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شما است.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            چرا <span className="gradient-text">عصر سئو</span>؟
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            دلایل انتخاب ما به عنوان شریک دیجیتال مارکتینگ شما
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover-lift h-full border-0 shadow-lg relative overflow-hidden animate-slide-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${reason.color} mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              روند <span className="gradient-text">همکاری</span> ما
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              از ابتدای همکاری تا دستیابی به نتایج، این مسیر را با هم می‌پیماییم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -z-10"></div>
            
            {[
              { step: '۱', title: 'مشاوره رایگان', desc: 'بررسی نیازها و اهداف' },
              { step: '۲', title: 'طراحی استراتژی', desc: 'تدوین نقشه راه مناسب' },
              { step: '۳', title: 'اجرای پروژه', desc: 'پیاده‌سازی حرفه‌ای' },
              { step: '۴', title: 'گزارش و بهینه‌سازی', desc: 'تحلیل نتایج و بهبود' }
            ].map((item, index) => (
              <div key={index} className="text-center animate-zoom-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;