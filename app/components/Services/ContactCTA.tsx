
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-asre-blue-600 to-asre-green-600">
      <div className="container-custom">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
          <CardContent className="text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              آماده شروع همکاری هستید؟
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
              همین الان با ما تماس بگیرید و مشاوره رایگان دریافت کنید. 
              تیم متخصص ما آماده پاسخگویی به سوالات شماست.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Phone className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">تماس تلفنی</h3>
                <p className="text-white/80">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <Mail className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">ایمیل</h3>
                <p className="text-white/80">info@asreseo.com</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <MessageCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">پشتیبانی آنلاین</h3>
                <p className="text-white/80">۲۴ ساعته</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-asre-blue-600 hover:bg-white/90 px-8">
                مشاوره رایگان
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                مشاهده نمونه کارها
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactCTA;
