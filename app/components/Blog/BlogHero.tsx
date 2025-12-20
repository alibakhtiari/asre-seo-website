
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BlogHero = () => {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/blog-hero.png"
          alt="وبلاگ عصر سئو"
          fill
          className="object-cover opacity-30 blur-xs"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/40 via-gray-900/80 to-background-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            وبلاگ <span className="bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent animate-pulse">عصر سئو</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
            آخرین مقالات و راهنماهای دیجیتال مارکتینگ، سئو و بازاریابی آنلاین
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="جستجو در مقالات..."
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-gray-400 focus:border-primary-400 focus:bg-white/20 transition-all duration-300"
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
