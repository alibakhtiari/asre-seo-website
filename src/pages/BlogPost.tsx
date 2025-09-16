import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import BlogPostComponent from '@/components/Blog/BlogPost';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import useBlogPosts, { BlogPost } from '@/hooks/useBlogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug } = useBlogPosts();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const postData = await getPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };

    loadPost();
  }, [slug, getPostBySlug]);

  if (loading) {
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
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">مقاله یافت نشد</h1>
            <p className="text-gray-600 mb-8">متأسفانه مقاله مورد نظر شما یافت نشد.</p>
            <Link to="/blog">
              <Button>
                <ArrowRight className="h-4 w-4 ml-2" />
                بازگشت به وبلاگ
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="section-padding">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-primary">صفحه اصلی</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">وبلاگ</Link>
              <span>/</span>
              <span className="text-gray-900">{post.title}</span>
            </div>
          </nav>

        <div className="max-w-4xl mx-auto">
          <BlogPostComponent post={post} />
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;