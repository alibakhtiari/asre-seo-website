
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>خدمات دیجیتال مارکتینگ | عصر سئو</title>
        <meta name="description" content="خدمات حرفه‌ای سئو، تبلیغات گوگل، دیجیتال مارکتینگ و طراحی وب‌سایت. با تیم متخصص عصر سئو کسب‌وکار خود را به قله موفقیت برسانید." />
        <meta name="keywords" content="خدمات سئو, تبلیغات گوگل, دیجیتال مارکتینگ, طراحی وب‌سایت" />
        <link rel="canonical" href="https://asreseo.com/services" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">حرفه‌ای</span> ما
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                در حال توسعه صفحه خدمات با جزئیات کامل...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
