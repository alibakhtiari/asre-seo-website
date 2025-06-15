
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
      <Helmet>
        <title>خدمات دیجیتال مارکتینگ و سئو | عصر سئو - AsreSEO</title>
        <meta 
          name="description" 
          content="خدمات حرفه‌ای سئو، تبلیغات گوگل ادز، دیجیتال مارکتینگ، طراحی وب‌سایت و هوش مصنوعی. با تیم متخصص عصر سئو کسب‌وکار خود را به قله موفقیت برسانید. مشاوره رایگان ☎️ ۰۲۱-۱۲۳۴۵۶۷۸" 
        />
        <meta 
          name="keywords" 
          content="خدمات سئو, تبلیغات گوگل, دیجیتال مارکتینگ, طراحی وب‌سایت, سئو تکنیکال, بهینه‌سازی سایت, Google Ads, هوش مصنوعی, محتوا سازی, لینک سازی" 
        />
        <link rel="canonical" href="https://asreseo.com/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="خدمات دیجیتال مارکتینگ و سئو | عصر سئو" />
        <meta property="og:description" content="خدمات حرفه‌ای سئو، تبلیغات گوگل، دیجیتال مارکتینگ و طراحی وب‌سایت با تیم متخصص عصر سئو" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asreseo.com/services" />
        <meta property="og:image" content="https://asreseo.com/og-services.jpg" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="عصر سئو" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="خدمات دیجیتال مارکتینگ و سئو | عصر سئو" />
        <meta name="twitter:description" content="خدمات حرفه‌ای سئو، تبلیغات گوگل، دیجیتال مارکتینگ و طراحی وب‌سایت" />
        <meta name="twitter:image" content="https://asreseo.com/twitter-services.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="عصر سئو" />
        <meta name="language" content="Persian" />
        <meta name="geo.region" content="IR" />
        <meta name="geo.placename" content="Tehran" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
