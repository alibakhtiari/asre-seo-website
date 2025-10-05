'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BlogPostComponent from '@/components/Blog/BlogPost'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import useBlogPosts, { BlogPost } from '@/hooks/useBlogPosts'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    params.then(p => setSlug(p.slug))
  }, [params])

  const { getPostBySlug, loading: postsLoading } = useBlogPosts()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      if (!slug || postsLoading) return

      setLoading(true)
      const postData = await getPostBySlug(slug)
      setPost(postData)
      setLoading(false)
    }

    loadPost()
  }, [slug, getPostBySlug, postsLoading])

  if (loading || postsLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4 w-1/3" />
              <div className="h-12 bg-gray-200 rounded mb-6" />
              <div className="h-64 bg-gray-200 rounded mb-8" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">مقاله یافت نشد</h1>
            <p className="text-gray-600 mb-8">متأسفانه مقاله مورد نظر شما یافت نشد.</p>
            <Link href="/blog">
              <Button>
                <ArrowRight className="h-4 w-4 ml-2" />
                بازگشت به وبلاگ
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
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
