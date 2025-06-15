
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BlogHero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            وبلاگ <span className="gradient-text">عصر سئو</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            آخرین مقالات و راهنماهای دیجیتال مارکتینگ، سئو و بازاریابی آنلاین
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="جستجو در مقالات..." 
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-asre-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
