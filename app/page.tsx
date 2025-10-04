import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import HeroSection from '@/components/Home/HeroSection'
import ServicesSection from '@/components/Home/ServicesSection'
import AllServicesSection from '@/components/Home/AllServicesSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import TestimonialsSection from '@/components/Home/TestimonialsSection'
import CTASection from '@/components/Home/CTASection'

export const metadata: Metadata = {
  title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ، سئو و هوش مصنوعی در ایران',
  description: 'عصر سئو - شرکت پیشرو در ارائه خدمات دیجیتال مارکتینگ، سئو، هوش مصنوعی، تبلیغات گوگل و طراحی وب‌سایت. با تیم متخصص ما رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید. ⭐ رتبه ۴.۹ از ۵',
  keywords: 'سئو, دیجیتال مارکتینگ, تبلیغات گوگل, طراحی وب‌سایت, بهینه‌سازی سایت, AsreSEO, چت‌بات فارسی, هوش مصنوعی, AI, اتوماسیون بازاریابی, تولید محتوا با AI',
  openGraph: {
    title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران',
    description: 'با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید',
    type: 'website',
    images: ['https://asreseo.com/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عصر سئو | بهترین خدمات دیجیتال مارکتینگ در ایران',
    description: 'با خدمات حرفه‌ای سئو، طراحی وب‌سایت و هوش مصنوعی، رشد ۳۰۰٪ کسب‌وکار خود را تضمین کنید',
    images: ['https://asreseo.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://asreseo.com/',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AllServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
