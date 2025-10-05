'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActions = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCall = () => {
    window.open('tel:+989123456789', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/989123456789?text=سلام، برای مشاوره رایگان تماس گرفتم', '_blank');
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="بازگشت به بالا"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Contact Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsApp}
          size="icon"
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          aria-label="تماس با واتساپ"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        {/* Call Button */}
        <Button
          onClick={handleCall}
          size="icon"
          className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          style={{ animationDelay: '0.2s' }}
          aria-label="تماس تلفنی"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
};

export default FloatingActions;
