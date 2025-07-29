import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            آماده شروع <span className="text-yellow-400">همکاری</span> هستید؟
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            امروز اولین قدم را برای رشد دیجیتال کسب‌وکارتان بردارید. مشاوره رایگان دریافت کنید
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glass-effect border-0 animate-pulse-glow">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                مشاوره رایگان ۳۰ دقیقه‌ای
              </h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                با متخصصان ما صحبت کنید و بهترین استراتژی برای کسب‌وکارتان را کشف کنید. بدون هیچ تعهدی!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  رزرو جلسه مشاوره
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-all duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  تماس فوری: ۰۹۱۲۳۴۵۶۷۸۹
                </Button>
              </div>

              {/* Quick contact options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5" />
                  <span>تماس تلفنی</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors cursor-pointer">
                  <MessageCircle className="h-5 w-5" />
                  <span>چت آنلاین</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-200 hover:text-yellow-400 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5" />
                  <span>ایمیل</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee section */}
        <div className="text-center animate-slide-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 rounded-full text-white font-bold mb-4">
            <span>✓</span>
            ضمانت رضایت ۱۰۰٪
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            اگر از کیفیت خدمات ما راضی نباشید، هزینه پرداختی شما برگردانده می‌شود.
            بیش از ۹۸٪ مشتریان ما کاملاً راضی هستند.
          </p>
        </div>

        {/* Emergency contact */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg animate-bounce">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-bold">پشتیبانی اورژانسی ۲۴/۷: ۰۹۰۰۰۰۰۰۰۰۰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;