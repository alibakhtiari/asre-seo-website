import { ReactNode } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, Star, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  heroTitle: string;
  heroDescription: string;
  children?: ReactNode;
}

const ServicePageTemplate = ({
  title,
  description,
  keywords,
  canonicalUrl,
  heroTitle,
  heroDescription,
  children
}: ServicePageTemplateProps) => {
  // Enhanced structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": heroTitle,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "عصر سئو",
      "url": "https://asreseo.com",
      "logo": "https://asreseo.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+98-21-12345678",
        "contactType": "customer service"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Iran"
    },
    "availableLanguage": "Persian",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "IRR",
      "description": "مشاوره رایگان"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "خانه",
        "item": "https://asreseo.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "خدمات",
        "item": "https://asreseo.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": heroTitle,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Minimal Hero Section */}
              <nav className="m-4 pt-2" aria-label="مسیر">
                <ol className="flex items-center space-x-2 space-x-reverse text-sm text-slate-600">
                  <li>
                    <Link href="/" className="hover:text-slate-900 transition-colors">
                      خانه
                    </Link>
                  </li>
                  <li className="text-slate-400">/</li>
                  <li>
                    <Link href="/services" className="hover:text-slate-900 transition-colors">
                      خدمات
                    </Link>
                  </li>
                  <li className="text-slate-400">/</li>
                  <li className="text-slate-900 font-medium">{heroTitle}</li>
                </ol>
              </nav>
          <section className="flex justify-center relative bg-linear-to-br from-slate-50 to-blue-50/30 border-b border-slate-100">
            <div className="container-custom py-8 md:py-12">
              {/* Breadcrumb */}

              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  {heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl">
                  {heroDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-xs">
                    <Phone className="ml-2 h-5 w-5" />
                    مشاوره رایگان
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8">
                    <Mail className="ml-2 h-5 w-5" />
                    درخواست قیمت
                  </Button>
                </div>

                {/* Trust Indicators - Minimal */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-right bg-slate-100 rounded-3xl p-4">
                  <div className="flex items-center justify-center text-slate-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="font-medium">+۵۰۰ پروژه موفق</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-600">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">ضمانت کیفیت</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-600">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="font-medium">پشتیبانی ۲۴/۷</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          {children ? (
            <div className="bg-white">
              {children}
            </div>
          ) : (
            <section className="py-20 bg-white">
              <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    محتوای این صفحه در حال تکمیل است
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    به زودی محتوای کاملی از این خدمات در اختیار شما قرار خواهد گرفت.
                    برای اطلاعات بیشتر و مشاوره رایگان با ما تماس بگیرید.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                        تماس با ما
                        <ArrowLeft className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8">
                        مشاهده سایر خدمات
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Minimal CTA Section */}
          <section className="py-16 bg-slate-900 text-white">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  آماده شروع هستید؟
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  همین الان با تیم متخصص عصر سئو تماس بگیرید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                    <Phone className="ml-2 h-5 w-5" />
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8">
                    <Mail className="ml-2 h-5 w-5" />
                    info@asreseo.com
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
};

export default ServicePageTemplate;
