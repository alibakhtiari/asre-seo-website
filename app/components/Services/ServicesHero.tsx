
import { Search, Target, TrendingUp, Users } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background-50 via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-text-900 mb-8 leading-tight">
            خدمات <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse">حرفه‌ای</span> ما
          </h1>
          <p className="text-xl md:text-2xl text-text-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            با خدمات جامع دیجیتال مارکتینگ عصر سئو، کسب‌وکار خود را به قله موفقیت برسانید. 
            تیم متخصص ما با سال‌ها تجربه آماده همراهی شماست.
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 hover:border-primary-300 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-3">۲۰۰+</div>
            <div className="text-text-600 font-medium">مشتری راضی</div>
          </div>

          <div className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-secondary-100 hover:border-secondary-300 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary-600 to-secondary-800 bg-clip-text text-transparent mb-3">۳۵۰%</div>
            <div className="text-text-600 font-medium">افزایش ترافیک</div>
          </div>

          <div className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-accent-100 hover:border-accent-300 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-600 to-accent-800 bg-clip-text text-transparent mb-3">۹۵%</div>
            <div className="text-text-600 font-medium">نرخ موفقیت</div>
          </div>

          <div className="group text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-primary-100 hover:border-primary-300 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:animate-glow transition-transform duration-500">
              <Search className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-700 bg-clip-text text-transparent mb-3">۵۰۰+</div>
            <div className="text-text-600 font-medium">کلمه کلیدی رتبه یک</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
