import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import OptimizedImage from '../../components/ui/OptimizedImage'
import imagesMap from '../../../src/generated/images-map.json'
import { Search, TrendingUp, Target, BarChart, Globe, Zap, FileText, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات سئو حرفه‌ای | بهینه‌سازی وب‌سایت برای موتورهای جستجو',
  description: 'خدمات جامع سئو از تیم متخصص عصر سئو. سئو تکنیکال، سئو محتوا، لینک‌سازی و آنالیز کامل برای رسیدن به رتبه‌های اول گوگل.',
  keywords: 'خدمات سئو, سئو حرفه‌ای, بهینه‌سازی وب‌سایت, سئو تکنیکال, سئو محتوا, لینک‌سازی',
  alternates: {
    canonical: 'https://asreseo.com/services/seo',
  },
  openGraph: {
    title: 'خدمات سئو حرفه‌ای | عصر سئو',
    description: 'خدمات جامع سئو از تیم متخصص عصر سئو برای رسیدن به رتبه‌های اول گوگل.',
    type: 'website',
    url: 'https://asreseo.com/services/seo',
  },
}

export default function SEOPage() {
  const seoServices = [
    {
      title: 'سئو تکنیکال و داخلی',
      description: 'بهینه‌سازی فنی و محتوایی سایت برای رتبه اول گوگل',
      icon: Zap,
      features: ['افزایش سرعت سایت', 'بهینه‌سازی Core Web Vitals', 'تحقیق کلمات کلیدی', 'ساختاردهی محتوا']
    },
    {
      title: 'سئو محتوا و اعتبار',
      description: 'استراتژی محتوا و لینک‌سازی برای افزایش اعتبار دامنه',
      icon: FileText,
      features: ['تولید محتوای یونیک', 'استراتژی Topical Authority', 'لینک‌سازی خارجی', 'رپورتاژ آگهی']
    },
    {
      title: 'سئو محلی',
      description: 'ثبت در گوگل مپ و جذب مشتریان محلی',
      icon: Globe,
      features: ['ثبت در گوگل مپ', 'مدیریت نظرات', 'افزایش تماس‌های ورودی', 'لوکال سئو']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="section-padding bg-linear-to-br from-slate-50 to-blue-50 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-100/50 blur-3xl -z-10 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-right animate-fade-in order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 ml-2" />
                  رتبه اول گوگل را تسخیر کنید
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  خدمات <span className="gradient-text">سئو</span> حرفه‌ای
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  با خدمات جامع سئو عصر سئو، وب‌سایت خود را به رتبه‌های اول گوگل برسانید و ترافیک ارگانیک خود را چندین برابر افزایش دهید. استراتژی دقیق، اجرای فنی و محتوای باکیفیت.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <Button size="lg" className="gradient-bg text-white px-8 hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
                    دریافت مشاوره رایگان
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50 text-blue-700">
                    آنالیز رایگان سایت
                  </Button>
                </div>
              </div>

              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in order-1 lg:order-2 ring-1 ring-gray-200/50">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/10 to-transparent z-10" />
                <OptimizedImage
                  src="/images/seo-service-hero.webp"
                  alt="خدمات سئو حرفه‌ای"
                  fill
                  imageData={imagesMap['/images/seo-service-hero.webp']}
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-linear-to-br from-blue-50 to-purple-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">آماده شروع هستید؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              همین امروز با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white">
                شروع پروژه سئو
              </Button>
              <Button variant="outline" size="lg">
                مشاهده نمونه کارها
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
