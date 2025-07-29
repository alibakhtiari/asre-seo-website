
import { Button } from '@/components/ui/button';
import { ArrowDown, Play, Star, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50"></div>
      
      {/* Advanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-40 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>۴.۹ از ۵ امتیاز</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 text-green-500" />
              <span>ضمانت کیفیت</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4 text-blue-500" />
              <span>برترین در ایران</span>
            </div>
          </div>

          {/* Main Heading with enhanced animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-in-up">
            به{' '}
            <span className="relative">
              <span className="gradient-text animate-gradient">عصر سئو</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-slide-in-left" style={{animationDelay: '0.5s'}}></div>
            </span>
            {' '}خوش آمدید
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            با خدمات حرفه‌ای دیجیتال مارکتینگ، سئو، هوش مصنوعی و طراحی وب‌سایت، 
            کسب‌وکار خود را به <span className="text-blue-600 font-semibold">قله موفقیت</span> برسانید
          </p>

          {/* Enhanced Statistics with icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="text-center animate-zoom-in hover-lift p-4 rounded-lg bg-white/50 backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۵۰۰+</div>
              <div className="text-gray-600 font-medium">پروژه موفق</div>
            </div>
            <div className="text-center animate-zoom-in hover-lift p-4 rounded-lg bg-white/50 backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۹۸%</div>
              <div className="text-gray-600 font-medium">رضایت مشتریان</div>
            </div>
            <div className="text-center animate-zoom-in hover-lift p-4 rounded-lg bg-white/50 backdrop-blur-sm" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۵+</div>
              <div className="text-gray-600 font-medium">سال تجربه</div>
            </div>
            <div className="text-center animate-zoom-in hover-lift p-4 rounded-lg bg-white/50 backdrop-blur-sm" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">۲۴/۷</div>
              <div className="text-gray-600 font-medium">پشتیبانی</div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse mb-8 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
            <Button 
              size="lg" 
              className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-pulse-glow shadow-xl"
            >
              مشاوره رایگان دریافت کنید
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-600 px-8 py-4 text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              مشاهده نمونه کارها
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-8 mb-12 text-sm text-gray-600 animate-fade-in" style={{animationDelay: '0.7s'}}>
            <span>✓ بدون پیش پرداخت</span>
            <span>✓ مشاوره رایگان</span>
            <span>✓ ضمانت نتیجه</span>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ArrowDown className="h-4 w-4 text-gray-400 mx-auto mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
