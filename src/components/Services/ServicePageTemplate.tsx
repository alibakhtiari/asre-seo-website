
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": heroTitle,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "عصر سئو",
      "url": "https://asreseo.com"
    },
    "areaServed": "IR",
    "availableLanguage": "Persian"
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="fa_IR" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="عصر سئو" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-100">
        <Header />
        <main>
          {/* Enhanced Hero Section */}
          <section className="section-padding bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="container-custom relative z-10">
              <div className="text-center animate-fade-in">
                {/* Breadcrumb */}
                <nav className="mb-6" aria-label="Breadcrumb">
                  <ol className="flex justify-center items-center space-x-2 space-x-reverse text-white/80">
                    <li><Link to="/" className="hover:text-white transition-colors">خانه</Link></li>
                    <li className="text-white/60">›</li>
                    <li><Link to="/services" className="hover:text-white transition-colors">خدمات</Link></li>
                    <li className="text-white/60">›</li>
                    <li className="text-white">{heroTitle}</li>
                  </ol>
                </nav>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {heroTitle}
                </h1>
                <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-white/90 leading-relaxed">
                  {heroDescription}
                </p>
                
                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
                    <Phone className="ml-2 h-5 w-5" />
                    مشاوره رایگان
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 backdrop-blur-sm">
                    <Mail className="ml-2 h-5 w-5" />
                    درخواست قیمت
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">+۵۰۰ پروژه موفق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">ضمانت کیفیت</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">پشتیبانی ۲۴/۷</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          {children ? (
            children
          ) : (
            <section className="section-padding">
              <div className="container-custom">
                <div className="text-center py-20">
                  <div className="max-w-3xl mx-auto">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-3xl text-white">🚀</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-900 mb-6">
                      محتوای این صفحه در حال تکمیل است
                    </h2>
                    <p className="text-xl text-text-600 mb-8 leading-relaxed">
                      به زودی محتوای کاملی از این خدمات در اختیار شما قرار خواهد گرفت. 
                      برای اطلاعات بیشتر و مشاوره رایگان با ما تماس بگیرید.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-200">
                          تماس با ما
                          <ArrowLeft className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="px-8">
                        مشاهده سایر خدمات
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Enhanced CTA Section */}
          <section className="section-padding bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container-custom relative z-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  آماده شروع هستید؟
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                  همین الان با تیم متخصص عصر سئو تماس بگیرید و پروژه خود را شروع کنید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-8 shadow-lg hover:shadow-xl transition-all duration-200">
                    <Phone className="ml-2 h-5 w-5" />
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    <Mail className="ml-2 h-5 w-5" />
                    info@asreseo.com
                  </Button>
                </div>
                
                {/* Additional Contact Options */}
                <div className="pt-6 border-t border-white/20">
                  <p className="text-white/80 mb-4">یا از طریق کانال‌های دیگر با ما در ارتباط باشید:</p>
                  <div className="flex justify-center space-x-6 space-x-reverse">
                    <a href="#" className="text-white/80 hover:text-white transition-colors">تلگرام</a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">واتساپ</a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">اینستاگرام</a>
                  </div>
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

export default ServicePageTemplate;
