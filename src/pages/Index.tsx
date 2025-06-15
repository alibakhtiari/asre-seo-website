
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>عصر سئو | خدمات دیجیتال مارکتینگ حرفه‌ای</title>
        <meta name="description" content="عصر سئو - ارائه‌دهنده خدمات دیجیتال مارکتینگ، سئو، تبلیغات گوگل و طراحی وب‌سایت. با تیم متخصص ما رشد آنلاین کسب‌وکار خود را تضمین کنید." />
        <meta name="keywords" content="سئو, دیجیتال مارکتینگ, تبلیغات گوگل, طراحی وب‌سایت, بهینه‌سازی سایت, AsreSEO" />
        <link rel="canonical" href="https://asreseo.com/" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
