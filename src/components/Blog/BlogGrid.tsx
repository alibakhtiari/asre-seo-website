
'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import useBlogPosts from '@/hooks/useBlogPosts';

const BlogGrid = () => {
  const { posts, loading } = useBlogPosts();

  if (loading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gray-200 h-48 md:h-full" />
              <div className="md:w-2/3 p-6">
                <div className="h-4 bg-gray-200 rounded mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

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
        {posts.map((post, index) => (
          <Card key={post.slug} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in ${post.featured ? 'border-2 border-primary/20' : ''}`}>
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
                    <Badge className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-green-100 text-green-700">
                        ویژه
                      </Badge>
                    )}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
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
                      <span>{new Date(post.date).toLocaleDateString('fa-IR')}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="text-primary hover:text-primary/80">
                        ادامه مطلب
                        <ArrowLeft className="h-4 w-4 mr-2" />
                      </Button>
                    </Link>
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
