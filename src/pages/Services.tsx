
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ServicesHero from '@/components/Services/ServicesHero';
import ServicesList from '@/components/Services/ServicesList';
import WhyChooseUs from '@/components/Services/WhyChooseUs';
import PricingSection from '@/components/Services/PricingSection';
import ProcessSection from '@/components/Services/ProcessSection';
import TestimonialsSection from '@/components/Services/TestimonialsSection';
import ContactCTA from '@/components/Services/ContactCTA';

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
        <main>
          <ServicesHero />
          <ServicesList />
          <WhyChooseUs />
          <ProcessSection />
          <PricingSection />
          <TestimonialsSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
