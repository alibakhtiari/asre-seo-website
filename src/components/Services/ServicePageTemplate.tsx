
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
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
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-100">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="section-padding bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container-custom relative z-10">
              <div className="text-center animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {heroTitle}
                </h1>
                <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-white/90">
                  {heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-8">
                    <Phone className="ml-2 h-5 w-5" />
                    مشاوره رایگان
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    <Mail className="ml-2 h-5 w-5" />
                    درخواست قیمت
                  </Button>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-text-900 mb-6">
                    محتوای این صفحه در حال تکمیل است
                  </h2>
                  <p className="text-xl text-text-600 mb-8 max-w-2xl mx-auto">
                    به زودی محتوای کاملی از این خدمات در اختیار شما قرار خواهد گرفت. 
                    برای اطلاعات بیشتر با ما تماس بگیرید.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      تماس با ما
                      <ArrowLeft className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <div className="container-custom">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  آماده شروع هستید؟
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                  همین الان با تیم متخصص عصر سئو تماس بگیرید و پروژه خود را شروع کنید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-8">
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                    info@asreseo.com
                  </Button>
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
