import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, TrendingUp, Target, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'خدمات سئو و بهینه‌سازی وب‌سایت | عصر سئو',
  description: 'خدمات حرفه‌ای سئو و بهینه‌سازی وب‌سایت برای رسیدن به رتبه‌های اول گوگل. تیم متخصص عصر سئو آماده همراهی شماست.',
  keywords: 'خدمات سئو, بهینه‌سازی وب‌سایت, سئو تکنیکال, سئو محتوا',
  alternates: {
    canonical: 'https://asreseo.com/services/seo',
  },
  openGraph: {
    title: 'خدمات سئو و بهینه‌سازی وب‌سایت | عصر سئو',
    description: 'خدمات حرفه‌ای سئو و بهینه‌سازی وب‌سایت برای رسیدن به رتبه‌های اول گوگل.',
    type: 'website',
    url: 'https://asreseo.com/services/seo',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                خدمات <span className="gradient-text">سئو</span> حرفه‌ای
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                با خدمات جامع سئو عصر سئو، وب‌سایت خود را به رتبه‌های اول گوگل برسانید و ترافیک ارگانیک خود را چندین برابر افزایش دهید.
              </p>
              <Button size="lg" className="gradient-bg text-white px-8">
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Search className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle>سئو تکنیکال</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    بهینه‌سازی تکنیکال کامل وب‌سایت شما برای موتورهای جستجو
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• بهبود سرعت وب‌سایت</li>
                    <li>• بهینه‌سازی ساختار URL</li>
                    <li>• تنظیم Schema Markup</li>
                    <li>• رفع خطاهای کرال</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-green-600" />
                  </div>
                  <CardTitle>سئو محتوا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    تولید و بهینه‌سازی محتوای با کیفیت برای جذب مخاطبان هدف
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• تحقیق و انتخاب کلمات کلیدی</li>
                    <li>• تولید محتوای متنوع</li>
                    <li>• بهینه‌سازی متا تگ‌ها</li>
                    <li>• استراتژی لینک‌سازی داخلی</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
