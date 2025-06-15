
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';
import BlogSidebar from '@/components/Blog/BlogSidebar';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>وبلاگ دیجیتال مارکتینگ | عصر سئو</title>
        <meta name="description" content="آخرین مقالات و راهنماهای دیجیتال مارکتینگ، سئو، تبلیغات گوگل و بازاریابی آنلاین" />
        <meta name="keywords" content="وبلاگ سئو, مقالات دیجیتال مارکتینگ, آموزش گوگل ادز, راهنمای بازاریابی" />
        <link rel="canonical" href="https://asreseo.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <BlogHero />
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <BlogGrid />
                </div>
                <div className="lg:col-span-1">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
