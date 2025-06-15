
import { Search, Target, TrendingUp, Users } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-asre-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-asre-green-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            خدمات <span className="gradient-text animate-pulse">حرفه‌ای</span> ما
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            با خدمات جامع دیجیتال مارکتینگ عصر سئو، کسب‌وکار خود را به قله موفقیت برسانید. 
            تیم متخصص ما با سال‌ها تجربه آماده همراهی شماست.
          </p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-asre-blue-500 to-asre-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-asre-blue-600 to-asre-blue-800 bg-clip-text text-transparent mb-3">۲۰۰+</div>
            <div className="text-gray-600 font-medium">مشتری راضی</div>
          </div>

          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-asre-green-500 to-asre-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-asre-green-600 to-asre-green-800 bg-clip-text text-transparent mb-3">۳۵۰%</div>
            <div className="text-gray-600 font-medium">افزایش ترافیک</div>
          </div>

          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-asre-blue-500 to-asre-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-asre-blue-600 to-purple-800 bg-clip-text text-transparent mb-3">۹۵%</div>
            <div className="text-gray-600 font-medium">نرخ موفقیت</div>
          </div>

          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-asre-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
              <Search className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-asre-green-600 to-emerald-800 bg-clip-text text-transparent mb-3">۵۰۰+</div>
            <div className="text-gray-600 font-medium">کلمه کلیدی رتبه یک</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
