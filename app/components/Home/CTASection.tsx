import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            آماده شروع <span className="text-primary-600">همکاری</span> هستید؟
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            امروز اولین قدم را برای رشد دیجیتال کسب‌وکارتان بردارید. مشاوره رایگان دریافت کنید
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white border-slate-200 shadow-xl animate-pulse-glow">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                مشاوره رایگان ۳۰ دقیقه‌ای
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                با متخصصان ما صحبت کنید و بهترین استراتژی برای کسب‌وکارتان را کشف کنید. بدون هیچ تعهدی!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    رزرو جلسه مشاوره
                  </Button>
                </Link>
                <a href="tel:+989125811880" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg transition-all duration-200 font-semibold w-full"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    تماس فوری: ۰۹۱۲۵۸۱۱۸۸۰
                  </Button>
                </a>
              </div>

              {/* Quick contact options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center border-t border-slate-100 pt-8 mt-8">
                <div className="flex items-center justify-center gap-2 text-slate-600 hover:text-primary-600 transition-colors cursor-pointer group">
                  <div className="p-2 bg-slate-100 rounded-full group-hover:bg-primary-50 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">تماس تلفنی</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600 hover:text-primary-600 transition-colors cursor-pointer group">
                  <div className="p-2 bg-slate-100 rounded-full group-hover:bg-primary-50 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="font-medium">چت آنلاین</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600 hover:text-primary-600 transition-colors cursor-pointer group">
                  <div className="p-2 bg-slate-100 rounded-full group-hover:bg-primary-50 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">ایمیل</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee section */}
        <div className="text-center animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold mb-4 border border-green-200">
            <span>✓</span>
            ضمانت رضایت ۱۰۰٪
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            اگر از کیفیت خدمات ما راضی نباشید، هزینه پرداختی شما برگردانده می‌شود.
            بیش از ۹۸٪ مشتریان ما کاملاً راضی هستند.
          </p>
        </div>

        {/* Emergency contact */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-red-100 shadow-sm px-6 py-3 rounded-lg animate-bounce">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-bold text-red-600">پشتیبانی اورژانسی ۲۴/۷: ۰۹۱۲۵۸۱۱۸۸۰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
