
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import AllServicesSection from '@/components/Home/AllServicesSection';
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CTASection from '@/components/Home/CTASection';

const Index = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "عصر سئو",
    "url": "https://asreseo.com",
    "logo": "https://asreseo.com/logo.png",
    "description": "شرکت پیشرو در ارائه خدمات دیجیتال مارکتینگ، سئو، هوش مصنوعی و طراحی وب‌سایت در ایران",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+98-912-345-6789",
      "contactType": "Customer Service",
      "availableLanguage": ["Persian", "English"]
    },
    "areaServed": "IR",
    "sameAs": [
      "https://instagram.com/asreseo",
      "https://linkedin.com/company/asreseo",
      "https://twitter.com/asreseo"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات دیجیتال مارکتینگ",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "سئو و بهینه‌سازی وب‌سایت",
            "description": "بهینه‌سازی کامل وب‌سایت برای موتورهای جستجو"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "طراحی وب‌سایت",
            "description": "طراحی وب‌سایت‌های مدرن و سئو محور"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "خدمات هوش مصنوعی",
            "description": "پیاده‌سازی راه‌حل‌های هوش مصنوعی برای کسب‌وکار"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>عصر سئو | بهترین خدمات دیجیتال مارکتینگ، سئو و هوش مصنوعی در ایران</title>
        <meta 
          name="description" 
          content="عصر سئو - شرکت پیشرو در ارائه خدمات دیجیتال مارکتینگ، سئو، هوش مصنوعی، تبلیغات گوگل و طراحی وب‌سایت. با تیم متخصص ما رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید. ⭐ رتبه ۴.۹ از ۵" 
        />
        <meta 
          name="keywords" 
          content="سئو, دیجیتال مارکتینگ, تبلیغات گوگل, طراحی وب‌سایت, بهینه‌سازی سایت, AsreSEO, چت‌بات فارسی, هوش مصنوعی, AI, اتوماسیون بازاریابی, تولید محتوا با AI" 
        />
        <link rel="canonical" href="https://asreseo.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران" />
        <meta property="og:description" content="با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asreseo.com/" />
        <meta property="og:image" content="https://asreseo.com/og-image.jpg" />
        <meta property="og:site_name" content="عصر سئو" />
        <meta property="og:locale" content="fa_IR" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران" />
        <meta name="twitter:description" content="با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید" />
        <meta name="twitter:image" content="https://asreseo.com/twitter-image.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="عصر سئو" />
        <meta name="language" content="Persian" />
        <meta name="geo.region" content="IR" />
        <meta name="geo.country" content="Iran" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Alternative languages */}
        <link rel="alternate" hrefLang="fa" href="https://asreseo.com/" />
        <link rel="alternate" hrefLang="en" href="https://asreseo.com/en" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <AllServicesSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
