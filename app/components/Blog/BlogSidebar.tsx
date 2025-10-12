
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Tag, Calendar } from 'lucide-react';

const BlogSidebar = () => {
  const popularPosts = [
    'راهنمای کامل سئو تکنیکال',
    'بهترین ابزارهای تحلیل کلمات کلیدی',
    'نحوه بهینه‌سازی سرعت وب‌سایت'
  ];

  const categories = [
    { name: 'آموزش سئو', count: 12 },
    { name: 'گوگل ادز', count: 8 },
    { name: 'دیجیتال مارکتینگ', count: 15 },
    { name: 'شبکه‌های اجتماعی', count: 6 }
  ];

  const tags = [
    'سئو', 'گوگل', 'بازاریابی', 'تبلیغات', 'محتوا', 'آنالیتیکس'
  ];

  return (
    <div className="space-y-6">
      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-asre-blue-600" />
            محبوب‌ترین مقالات
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {popularPosts.map((post, index) => (
              <li key={index}>
                <a href="#" className="text-gray-700 hover:text-asre-blue-600 transition-colors text-sm leading-relaxed">
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-asre-green-600" />
            دسته‌بندی‌ها
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center justify-between">
                <a href="#" className="text-gray-700 hover:text-asre-blue-600 transition-colors">
                  {category.name}
                </a>
                <Badge variant="outline">{category.count}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-asre-green-600" />
            برچسب‌ها
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-asre-blue-50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-gradient-to-br from-asre-blue-50 to-asre-green-50">
        <CardHeader>
          <CardTitle>خبرنامه عصر سئو</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            برای دریافت آخرین مقالات و راهنماها در خبرنامه ما عضو شوید
          </p>
          <Button className="w-full gradient-bg text-white">
            عضویت در خبرنامه
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
