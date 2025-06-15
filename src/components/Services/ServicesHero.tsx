
import { Search, Target, TrendingUp, Users } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            خدمات <span className="gradient-text">حرفه‌ای</span> ما
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            با خدمات جامع دیجیتال مارکتینگ عصر سئو، کسب‌وکار خود را به قله موفقیت برسانید. 
            تیم متخصص ما با سال‌ها تجربه آماده همراهی شماست.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-asre-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-asre-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">۲۰۰+</div>
            <div className="text-gray-600">مشتری راضی</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-asre-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-asre-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">۳۵۰%</div>
            <div className="text-gray-600">افزایش ترافیک</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-asre-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-asre-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">۹۵%</div>
            <div className="text-gray-600">نرخ موفقیت</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-asre-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-asre-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">۵۰۰+</div>
            <div className="text-gray-600">کلمه کلیدی رتبه یک</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
