import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Button } from '@/components/ui/button'
import { Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'صفحه پیدا نشد | عصر سئو',
  description: 'صفحه مورد نظر شما پیدا نشد. به صفحه اصلی برگردید یا با ما تماس بگیرید.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center animate-fade-in max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl font-bold text-red-600">۴</span>
              <span className="text-6xl font-bold text-red-400">۰</span>
              <span className="text-6xl font-bold text-red-600">۴</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              صفحه پیدا نشد
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرسی دیگر منتقل شده است.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/">
              <Button size="lg" className="gradient-bg text-white w-full">
                <Home className="h-5 w-5 ml-2" />
                بازگشت به صفحه اصلی
              </Button>
            </Link>

            <div className="flex gap-4">
              <Link href="/contact" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  تماس با ما
                </Button>
              </Link>
              <Link href="/services" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  خدمات ما
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              اگر فکر می‌کنید این یک خطای فنی است، لطفاً با تیم پشتیبانی تماس بگیرید.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
