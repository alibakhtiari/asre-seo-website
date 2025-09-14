
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
    
    alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
  };

  return (
    <>
      <Helmet>
        <title>تماس با ما | عصر سئو</title>
        <meta name="description" content="با تیم متخصص عصر سئو در تماس باشید. مشاوره رایگان دریافت کنید و پروژه دیجیتال مارکتینگ خود را شروع کنید." />
        <meta name="keywords" content="تماس با عصر سئو, مشاوره رایگان سئو, ارتباط با متخصص دیجیتال مارکتینگ" />
        <link rel="canonical" href="https://asreseo.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-100">
        <Header />
        <main className="section-padding">
          {/* Hero Section */}
          <div className="container-custom">
            <div className="text-center animate-fade-in mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                تماس با <span className="gradient-text">ما</span>
              </h1>
              <p className="text-xl text-primary-800 max-w-3xl mx-auto leading-relaxed">
                آماده همکاری با شما هستیم. مشاوره رایگان دریافت کنید و پروژه دیجیتال مارکتینگ خود را همین امروز شروع کنید.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-background-50 border-primary/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-6">فرم تماس</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">نام و نام خانوادگی *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="نام خود را وارد کنید"
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">ایمیل *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="ایمیل خود را وارد کنید"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">شماره تماس</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="09xxxxxxxxx"
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">سرویس مورد نظر</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">انتخاب کنید</option>
                            <option value="seo">سئو و بهینه‌سازی</option>
                            <option value="web-design">طراحی وب‌سایت</option>
                            <option value="content">تولید محتوا</option>
                            <option value="social-media">مدیریت شبکه‌های اجتماعی</option>
                            <option value="google-ads">تبلیغات گوگل</option>
                            <option value="ai-services">خدمات هوش مصنوعی</option>
                            <option value="consultation">مشاوره</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">پیام شما *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="توضیح مختصری از نیاز خود ارائه دهید..."
                          rows={5}
                          className="w-full"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto"
                        size="lg"
                      >
                        {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-background-50 border-secondary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-6">اطلاعات تماس</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-800">تلفن تماس</div>
                          <div className="text-primary-700">021-12345678</div>
                          <div className="text-primary-700">0912-345-6789</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-800">ایمیل</div>
                          <div className="text-primary-700">info@asreseo.com</div>
                          <div className="text-primary-700">support@asreseo.com</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-800">آدرس</div>
                          <div className="text-primary-700">تهران، خیابان ولیعصر، پلاک ۱۲۳</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-primary-800">ساعات کاری</div>
                          <div className="text-primary-700">شنبه تا پنج‌شنبه: ۹ تا ۱۸</div>
                          <div className="text-primary-700">پشتیبانی آنلاین: ۲۴/۷</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-background-50 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">دسترسی سریع</h3>
                    
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all duration-300" size="sm">
                        <svg className="w-4 h-4 ml-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.747-1.746-4.066-2.711-6.533-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.099-.634z"/>
                          <path d="M11.893 5.5c2.998 0 5.434 2.437 5.434 5.434s-2.437 5.434-5.434 5.434-5.434-2.437-5.434-5.434 2.437-5.434 5.434-5.434z"/>
                        </svg>
                        چت واتساپ
                      </Button>

                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300" size="sm">
                        <svg className="w-4 h-4 ml-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.377-.293 1.199-.334 1.363-.053.225-.172.271-.402.163-1.510-.7-2.448-2.902-2.448-4.673 0-3.765 2.737-7.229 7.888-7.229 4.135 0 7.357 2.947 7.357 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.357-.63-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                        </svg>
                        تلگرام
                      </Button>

                      <Button variant="outline" className="w-full justify-start hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-300" size="sm">
                        <svg className="w-4 h-4 ml-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        کانال یوتیوب
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-accent-50 to-accent-100 border-accent-300 hover:border-accent-400">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-accent-900 mb-2">تماس اضطراری</h3>
                    <p className="text-accent-700 text-sm mb-4">برای موارد فوری و خارج از ساعت کاری</p>
                    <Button className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white border-0">
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      0901-234-5678
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
