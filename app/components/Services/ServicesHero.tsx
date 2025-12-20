
import { Search, Target, TrendingUp, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage'
import imagesMap from '../../../src/generated/images-map.json';

const ServicesHero = () => {
  return (
    <section className="section-padding bg-linear-to-br from-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500/20 blur-3xl -z-10 rounded-full mix-blend-screen opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary-500/20 blur-3xl -z-10 rounded-full mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-right animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              خدمات دیجیتال مارکتینگ ۳۶۰ درجه
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              خدمات <span className="bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent animate-pulse">حرفه‌ای</span> ما
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
              با خدمات جامع دیجیتال مارکتینگ عصر سئو، کسب‌وکار خود را به قله موفقیت برسانید.
              تیم متخصص ما با سال‌ها تجربه آماده همراهی شماست.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button size="lg" className="gradient-bg border-0 text-white px-8 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
                دریافت مشاوره رایگان
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm">
                نمونه کارها
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full animate-fade-in order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-linear-to-tr from-primary-500/10 to-transparent z-0 rounded-3xl" />
            <OptimizedImage
              src="/images/services-hero.webp"
              alt="خدمات عصر سئو"
              fill
              imageData={imagesMap['/images/services-hero.webp']}
              className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="group text-center p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-400/50 hover:bg-white/10 hover:translate-y-[-5px] transition-all duration-500">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500 shadow-lg shadow-primary-500/30">
              <Users className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary-400 to-primary-200 bg-clip-text text-transparent mb-3">۲۰۰+</div>
            <div className="text-sm md:text-base text-gray-300 font-medium">مشتری راضی</div>
          </div>

          <div className="group text-center p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-secondary-400/50 hover:bg-white/10 hover:translate-y-[-5px] transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500 shadow-lg shadow-secondary-500/30">
              <TrendingUp className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-secondary-400 to-secondary-200 bg-clip-text text-transparent mb-3">۳۵۰%</div>
            <div className="text-sm md:text-base text-gray-300 font-medium">افزایش ترافیک</div>
          </div>

          <div className="group text-center p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent-400/50 hover:bg-white/10 hover:translate-y-[-5px] transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500 shadow-lg shadow-accent-500/30">
              <Target className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent mb-3">۹۵%</div>
            <div className="text-sm md:text-base text-gray-300 font-medium">نرخ موفقیت</div>
          </div>

          <div className="group text-center p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary-400/50 hover:bg-white/10 hover:translate-y-[-5px] transition-all duration-500" style={{ animationDelay: '0.6s' }}>
            <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500 shadow-lg shadow-primary-500/30">
              <Search className="h-7 w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div className="text-3xl md:text-5xl font-bold bg-linear-to-r from-primary-400 to-secondary-300 bg-clip-text text-transparent mb-3">۵۰۰+</div>
            <div className="text-sm md:text-base text-gray-300 font-medium">کلمه کلیدی رتبه یک</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
