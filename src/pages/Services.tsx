
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "عصر سئو",
    "alternateName": "AsreSEO",
    "url": "https://asreseo.com",
    "logo": "https://asreseo.com/logo.png",
    "description": "ارائه‌دهنده خدمات حرفه‌ای سئو، تبلیغات گوگل، دیجیتال مارکتینگ و طراحی وب‌سایت در ایران",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-21-12345678",
      "contactType": "customer service",
      "availableLanguage": ["Persian", "English"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات دیجیتال مارکتینگ عصر سئو",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "خدمات سئو",
            "description": "بهینه‌سازی وب‌سایت برای موتورهای جستجو"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تبلیغات گوگل ادز",
            "description": "مدیریت کمپین‌های تبلیغاتی در گوگل"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "طراحی وب‌سایت",
            "description": "طراحی وب‌سایت‌های سئو محور و واکنش‌گرا"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "خدمات هوش مصنوعی",
            "description": "پیاده‌سازی راهکارهای هوش مصنوعی برای بازاریابی"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/asreseo",
      "https://linkedin.com/company/asreseo",
      "https://twitter.com/asreseo"
    ]
  };

  return (
    <>

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
