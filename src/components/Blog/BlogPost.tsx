import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/hooks/useBlogPosts';

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostComponent = ({ post }: BlogPostProps) => {
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) || []
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "عصر سئو",
      "logo": {
        "@type": "ImageObject",
        "url": "https://asreseo.com/logo.png"
      }
    },
    "image": post.image,
    "keywords": post.tags.join(", ")
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | وبلاگ عصر سئو</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={`https://asreseo.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://asreseo.com/blog/${post.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdArticle)}
        </script>
        {post.faqs && post.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(jsonLdFAQ)}
          </script>
        )}
      </Helmet>

      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-primary/10 text-primary">
              {post.category}
            </Badge>
            {post.featured && (
              <Badge className="bg-green-100 text-green-700">
                ویژه
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-4">
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
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 ml-2" />
                اشتراک‌گذاری
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 ml-2" />
                ذخیره
              </Button>
            </div>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </header>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            {/* Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <Card className="mb-6 sticky top-24">
                <CardHeader>
                  <h3 className="font-bold text-lg">نکات کلیدی</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{takeaway}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <Card className="mb-6">
                <CardHeader>
                  <h3 className="font-bold text-lg">فهرست مطالب</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {post.tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-primary transition-colors ${
                        item.level === 2 ? 'font-medium' : 'mr-4 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-3 w-3" />
                        {item.title}
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>
            )}
          </aside>

          {/* Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content && (
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.replace(/^---[\s\S]*?---/, '') 
                  }} 
                />
              )}
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">سوالات متداول</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="leading-relaxed text-gray-700">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="text-center py-8">
                <h3 className="text-xl font-bold mb-4">نیاز به مشاوره تخصصی دارید؟</h3>
                <p className="text-gray-600 mb-6">
                  تیم متخصص عصر سئو آماده ارائه مشاوره رایگان و راهنمایی شما است
                </p>
                <div className="flex gap-4 justify-center">
                  <Button>
                    مشاوره رایگان
                  </Button>
                  <Button variant="outline">
                    مشاهده خدمات
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPostComponent;