
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import BlogHero from '@/components/Blog/BlogHero';
import BlogGrid from '@/components/Blog/BlogGrid';
import BlogSidebar from '@/components/Blog/BlogSidebar';

const Blog = () => {
  return (
    <>

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
