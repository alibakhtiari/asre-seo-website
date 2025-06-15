
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>درباره ما | عصر سئو</title>
        <meta name="description" content="آشنایی با تیم متخصص عصر سئو و تجربه چندین ساله ما در زمینه دیجیتال مارکتینگ، سئو و طراحی وب‌سایت." />
        <meta name="keywords" content="درباره عصر سئو, تیم متخصص سئو, تجربه دیجیتال مارکتینگ" />
        <link rel="canonical" href="https://asreseo.com/about" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                درباره <span className="gradient-text">عصر سئو</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                در حال توسعه صفحه درباره ما با جزئیات کامل...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
