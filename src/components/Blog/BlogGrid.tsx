
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowLeft } from 'lucide-react';

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'راهنمای کامل سئو برای مبتدیان ۲۰۲۴',
      excerpt: 'یادگیری اصول اولیه سئو و بهینه‌سازی وب‌سایت برای موتورهای جستجو',
      category: 'آموزش سئو',
      author: 'تیم عصر سئو',
      date: '۱۵ دی ۱۴۰۲',
      readTime: '۱۰ دقیقه',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'نحوه افزایش ترافیک وب‌سایت با تبلیغات گوگل',
      excerpt: 'استراتژی‌های موثر برای راه‌اندازی کمپین‌های تبلیغاتی موفق در گوگل ادز',
      category: 'گوگل ادز',
      author: 'احمد محمدی',
      date: '۱۲ دی ۱۴۰۲',
      readTime: '۸ دقیقه',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      title: 'ترندهای دیجیتال مارکتینگ در سال ۲۰۲۴',
      excerpt: 'بررسی آخرین ترندها و روش‌های نوین بازاریابی دیجیتال',
      category: 'دیجیتال مارکتینگ',
      author: 'سارا احمدی',
      date: '۱۰ دی ۱۴۰۲',
      readTime: '۱۲ دقیقه',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">آخرین مقالات</h2>
        <div className="flex gap-2">
          <Badge variant="outline">همه</Badge>
          <Badge variant="outline">سئو</Badge>
          <Badge variant="outline">گوگل ادز</Badge>
          <Badge variant="outline">دیجیتال مارکتینگ</Badge>
        </div>
      </div>

      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <Card key={post.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in ${post.featured ? 'border-2 border-asre-blue-200' : ''}`}>
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <Badge className="bg-asre-blue-100 text-asre-blue-700">
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-asre-green-100 text-asre-green-700">
                        ویژه
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-asre-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" className="text-asre-blue-600 hover:text-asre-blue-700">
                      ادامه مطلب
                      <ArrowLeft className="h-4 w-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
