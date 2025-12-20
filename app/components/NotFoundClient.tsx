'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search } from 'lucide-react';

export default function NotFoundClient() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float animate-delay-4s"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">صفحه یافت نشد</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
            متاسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد. شاید آدرس را اشتباه وارد کرده‌اید یا صفحه مورد نظر حذف شده است.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button
                size="lg"
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                بازگشت به صفحه اصلی
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-all duration-200"
              onClick={() => window.history.back()}
            >
              <Search className="h-5 w-5 mr-2" />
              بازگشت
            </Button>
          </div>

          {/* Popular links */}
          <div className="bg-white/50 backdrop-blur-xs rounded-xl p-6 shadow-lg">
            <p className="text-gray-700 mb-4 font-semibold">شاید به دنبال این‌ها بوده‌اید:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/" className="text-primary hover:text-primary-700 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50">
                صفحه اصلی
              </Link>
              <Link href="/services" className="text-primary hover:text-primary-700 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50">
                خدمات ما
              </Link>
              <Link href="/about" className="text-primary hover:text-primary-700 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50">
                درباره ما
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary-700 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50">
                تماس با ما
              </Link>
              <Link href="/blog" className="text-primary hover:text-primary-700 transition-colors py-2 px-3 rounded-lg hover:bg-primary-50">
                وبلاگ خبری
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
