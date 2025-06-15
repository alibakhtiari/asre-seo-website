
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>تماس با ما | عصر سئو</title>
        <meta name="description" content="با تیم متخصص عصر سئو در تماس باشید. مشاوره رایگان دریافت کنید و پروژه دیجیتال مارکتینگ خود را شروع کنید." />
        <meta name="keywords" content="تماس با عصر سئو, مشاوره رایگان سئو, ارتباط با متخصص دیجیتال مارکتینگ" />
        <link rel="canonical" href="https://asreseo.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="section-padding">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                تماس با <span className="gradient-text">ما</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                در حال توسعه صفحه تماس با ما با فرم ارتباط و اطلاعات تماس...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
