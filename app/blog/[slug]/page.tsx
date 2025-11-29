import { notFound } from 'next/navigation'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import BlogPostComponent from '@/components/Blog/BlogPost'
import Link from 'next/link'
import { Metadata } from 'next'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'

// Generate static params for all blog posts
export function generateStaticParams() {
  const blogPosts = getAllBlogPosts()
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'مقاله یافت نشد',
    }
  }

  return {
    title: `${post.title} | عصر سئو`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

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
