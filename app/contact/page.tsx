import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تماس با ما | عصر سئو',
  description: 'با تیم متخصص عصر سئو در تماس باشید. مشاوره رایگان، پشتیبانی ۲۴ ساعته و پاسخگویی سریع به سوالات شما.',
  keywords: 'تماس با عصر سئو, مشاوره رایگان سئو, پشتیبانی دیجیتال مارکتینگ',
  alternates: {
    canonical: 'https://asreseo.com/contact',
  },
  openGraph: {
    title: 'تماس با ما | عصر سئو',
    description: 'با تیم متخصص عصر سئو در تماس باشید. مشاوره رایگان، پشتیبانی ۲۴ ساعته و پاسخگویی سریع به سوالات شما.',
    type: 'website',
    url: 'https://asreseo.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                تماس با <span className="gradient-text">ما</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                آماده‌اید تا کسب‌وکار خود را به سطح بعدی ببرید؟ با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">ارسال پیام</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                        <Input placeholder="نام خود را وارد کنید" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">ایمیل</label>
                        <Input type="email" placeholder="ایمیل خود را وارد کنید" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">شماره تماس</label>
                      <Input placeholder="شماره تماس خود را وارد کنید" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">موضوع</label>
                      <Input placeholder="موضوع پیام خود را بنویسید" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">پیام</label>
                      <Textarea
                        placeholder="پیام خود را بنویسید..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full gradient-bg text-white">
                      ارسال پیام
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">اطلاعات تماس</h2>
                    <p className="text-gray-600 mb-8">
                      تیم ما آماده پاسخگویی به سوالات شما و ارائه مشاوره رایگان است.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ایمیل</h3>
                        <p className="text-gray-600">info@asreseo.com</p>
                        <p className="text-gray-600">support@asreseo.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">تلفن</h3>
                        <p className="text-gray-600">+98 21 1234 5678</p>
                        <p className="text-gray-600">+98 912 345 6789</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">آدرس</h3>
                        <p className="text-gray-600">
                          تهران، خیابان ولیعصر، پلاک ۱۲۳<br />
                          طبقه ۵، واحد ۵۰۱
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ساعات کاری</h3>
                        <p className="text-gray-600">شنبه تا پنج‌شنبه: ۹:۰۰ - ۱۸:۰۰</p>
                        <p className="text-gray-600">پشتیبانی ۲۴ ساعته</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
