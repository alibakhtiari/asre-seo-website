
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-asre-blue-50 via-white to-asre-green-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-asre-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-asre-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            به{' '}
            <span className="gradient-text">عصر سئو</span>
            {' '}خوش آمدید
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            با خدمات حرفه‌ای دیجیتال مارکتینگ، سئو و طراحی وب‌سایت، کسب‌وکار خود را به قله موفقیت برسانید
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۵۰۰+</div>
              <div className="text-gray-600">پروژه موفق</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۹۸%</div>
              <div className="text-gray-600">رضایت مشتریان</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۵+</div>
              <div className="text-gray-600">سال تجربه</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۲۴/۷</div>
              <div className="text-gray-600">پشتیبانی</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse mb-12">
            <Button size="lg" className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105">
              مشاوره رایگان دریافت کنید
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-asre-blue-500 text-asre-blue-600 px-8 py-4 text-lg hover:bg-asre-blue-50 transition-all duration-200">
              مشاهده نمونه کارها
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
