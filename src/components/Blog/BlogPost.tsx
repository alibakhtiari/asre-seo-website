import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Share2, Bookmark, ChevronRight, List } from 'lucide-react';
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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm text-gray-500 gap-4">
            <div className="flex flex-wrap items-center gap-4">
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
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    // You could add a toast notification here
                  }
                }}
              >
                <Share2 className="h-4 w-4 ml-2" />
                اشتراک‌گذاری
              </Button>
            </div>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </header>

        {/* Table of Contents Accordion */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="mb-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="toc">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <List className="h-5 w-5" />
                    فهرست مطالب
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-2 pt-4">
                    {post.tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-primary transition-colors p-2 rounded hover:bg-primary/5 ${
                          item.level === 2 ? 'font-medium' : 'mr-4 text-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-3 w-3" />
                          {item.title}
                        </div>
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        {/* Key Takeaways */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <Card className="mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <h3 className="font-bold text-xl text-primary flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">!</span>
                </div>
                نکات کلیدی
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {post.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed font-medium">{takeaway}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-8">

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
            {post.content && (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({children, ...props}) => <h2 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold mt-8 mb-4 text-gray-900" {...props}>{children}</h2>,
                  h3: ({children, ...props}) => <h3 id={children?.toString().toLowerCase().replace(/\s+/g, '-')} className="text-xl font-semibold mt-6 mb-3 text-gray-900" {...props}>{children}</h3>,
                  p: ({children, ...props}) => <p className="mb-4 leading-relaxed text-gray-700" {...props}>{children}</p>,
                  ul: ({children, ...props}) => <ul className="mb-4 mr-6 space-y-2" {...props}>{children}</ul>,
                  ol: ({children, ...props}) => <ol className="mb-4 mr-6 space-y-2" {...props}>{children}</ol>,
                  li: ({children, ...props}) => <li className="text-gray-700" {...props}>{children}</li>,
                  strong: ({children, ...props}) => <strong className="font-semibold text-gray-900" {...props}>{children}</strong>,
                  code: ({children, ...props}) => <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props}>{children}</code>,
                  blockquote: ({children, ...props}) => <blockquote className="border-r-4 border-primary pr-4 my-6 italic text-gray-600" {...props}>{children}</blockquote>
                }}
              >
                {post.content.replace(/^---[\s\S]*?---/, '')}
              </ReactMarkdown>
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
      </article>
    </>
  );
};

export default BlogPostComponent;