import { notFound } from 'next/navigation'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BlogPostComponent from '@/components/Blog/BlogPost'
import Link from 'next/link'
import { Metadata } from 'next'

// Generate static params for all blog posts
export function generateStaticParams() {
  // Sample blog post slugs - in a real app, this would come from your data source
  const blogPosts = [
    {
      slug: 'seo-guide-2024'
    },
    {
      slug: 'google-ads-guide-2024'
    },
    {
      slug: 'digital-marketing-trends-2024'
    }
  ]

  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  // Sample blog posts data - in a real app, fetch from your data source
  const blogPosts = {
    'seo-guide-2024': {
      title: 'راهنمای کامل سئو تکنیکال 2024',
      description: 'آموزش جامع سئو تکنیکال برای بهبود رتبه‌بندی وب‌سایت در گوگل'
    },
    'google-ads-guide-2024': {
      title: 'راهنمای گوگل ادز 2024',
      description: 'نحوه راه‌اندازی و بهینه‌سازی کمپین‌های تبلیغاتی گوگل ادز'
    },
    'digital-marketing-trends-2024': {
      title: 'ترندهای دیجیتال مارکتینگ 2024',
      description: 'جدیدترین روندها و تکنیک‌های دیجیتال مارکتینگ در سال 2024'
    }
  }

  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'مقاله یافت نشد',
    }
  }

  return {
    title: `${post.title} | عصر سئو`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Sample blog posts data - in a real app, fetch from your data source
  const blogPosts = {
    'seo-guide-2024': {
      id: 1,
      title: "راهنمای کامل سئو تکنیکال 2024",
      excerpt: "آموزش جامع سئو تکنیکال برای بهبود رتبه‌بندی وب‌سایت در گوگل",
      author: "تیم عصر سئو",
      date: "2024-01-15",
      readTime: "15 دقیقه خواندن",
      tags: ["سئو تکنیکال", "بهینه‌سازی", "گوگل"],
      category: "آموزش سئو",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      slug: "seo-guide-2024",
      featured: true,
      content: "محتوای کامل مقاله سئو تکنیکال..."
    },
    'google-ads-guide-2024': {
      id: 2,
      title: "راهنمای گوگل ادز 2024",
      excerpt: "نحوه راه‌اندازی و بهینه‌سازی کمپین‌های تبلیغاتی گوگل ادز",
      author: "علی احمدی",
      date: "2024-01-10",
      readTime: "12 دقیقه خواندن",
      tags: ["گوگل ادز", "تبلیغات", "بازاریابی"],
      category: "تبلیغات",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80",
      slug: "google-ads-guide-2024",
      content: "محتوای کامل مقاله گوگل ادز..."
    },
    'digital-marketing-trends-2024': {
      id: 3,
      title: "ترندهای دیجیتال مارکتینگ 2024",
      excerpt: "جدیدترین روندها و تکنیک‌های دیجیتال مارکتینگ در سال 2024",
      author: "سارا کریمی",
      date: "2024-01-05",
      readTime: "10 دقیقه خواندن",
      tags: ["دیجیتال مارکتینگ", "ترندها", "استراتژی"],
      category: "بازاریابی",
      image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      slug: "digital-marketing-trends-2024",
      content: "محتوای کامل مقاله ترندهای دیجیتال مارکتینگ..."
    }
  }

  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-primary">صفحه اصلی</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-primary">وبلاگ</Link>
              </li>
              <li>/</li>
              <li className="text-gray-900">{post.title}</li>
            </ol>
          </nav>

          <div className="max-w-4xl mx-auto">
            <BlogPostComponent post={post} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
