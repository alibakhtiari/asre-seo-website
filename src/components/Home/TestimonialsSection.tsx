import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'علی محمدی',
      company: 'شرکت تجارت آنلاین پارس',
      text: 'با خدمات عصر سئو، رتبه سایت ما در گوگل بطور چشمگیری بهبود یافت. فروش آنلاین ما ۳۰۰٪ افزایش پیدا کرد.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'مریم احمدی',
      company: 'فروشگاه مد زنانه شیک',
      text: 'طراحی سایت جدید ما فوق‌العاده شد. سرعت سایت بالا رفت و تجربه کاربری بهتر شد. مشتریان راضی‌تر هستند.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'رضا کریمی',
      company: 'شرکت ساختمانی کوثر',
      text: 'کمپین تبلیغات گوگل آنها عالی بود. سرنخ‌های کیفی زیادی دریافت کردیم و پروژه‌های جدید زیادی گرفتیم.',
      rating: 5,
      avatar: '👨‍🏗️'
    },
    {
      name: 'فاطمه رضایی',
      company: 'کلینیک زیبایی نور',
      text: 'چت‌بات فارسی که برایمان طراحی کردند، خیلی کمکمان کرده. الان ۲۴ ساعته پاسخگوی مشتریان هستیم.',
      rating: 5,
      avatar: '👩‍⚕️'
    },
    {
      name: 'محمد حسینی',
      company: 'رستوران‌های زنجیره‌ای طعم',
      text: 'مدیریت شبکه‌های اجتماعی‌مان رو کاملاً دگرگون کردن. فالوور و مشتری‌هامون خیلی زیاد شدن.',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'زهرا موسوی',
      company: 'آموزشگاه زبان برایت',
      text: 'محتواهای تولیدی با هوش مصنوعی کیفیت بالایی داشت. وقت زیادی برامون صرفه‌جویی شد.',
      rating: 5,
      avatar: '👩‍🏫'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            نظر <span className="gradient-text">مشتریان</span> ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            رضایت مشتریان، بزرگترین افتخار ماست. ببینید آنها چه می‌گویند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="floating-card hover-lift p-6 animate-slide-in-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-8 w-8 text-gray-400" />
              </div>

              <CardContent className="p-0">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-right">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="text-right">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-zoom-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">۵۰۰+</div>
            <div className="text-gray-600">مشتری راضی</div>
          </div>
          <div className="text-center animate-zoom-in" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">۹۸%</div>
            <div className="text-gray-600">میزان رضایت</div>
          </div>
          <div className="text-center animate-zoom-in" style={{animationDelay: '0.6s'}}>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">۵۰۰%</div>
            <div className="text-gray-600">متوسط رشد فروش</div>
          </div>
          <div className="text-center animate-zoom-in" style={{animationDelay: '0.8s'}}>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">۲۴/۷</div>
            <div className="text-gray-600">پشتیبانی</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;