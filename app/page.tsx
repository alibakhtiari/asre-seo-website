import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import HeroSection from '@/components/Home/HeroSection'
import ServicesSection from '@/components/Home/ServicesSection'
import AllServicesSection from '@/components/Home/AllServicesSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import TestimonialsSection from '@/components/Home/TestimonialsSection'
import CTASection from '@/components/Home/CTASection'
import { HomepageStructuredData, OrganizationStructuredData } from '@/components/StructuredData'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <OrganizationStructuredData />
      <HomepageStructuredData />
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
