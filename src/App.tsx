
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Main Pages
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import SEOService from '@/pages/SEOService';
import GoogleAdsService from '@/pages/GoogleAdsService';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import FloatingActions from '@/components/FloatingActions';

// SEO Services
import WebsiteSEO from '@/pages/services/seo/WebsiteSEO';
import TechnicalSEO from '@/pages/services/seo/TechnicalSEO';
import ContentSEO from '@/pages/services/seo/ContentSEO';
import LinkBuilding from '@/pages/services/seo/LinkBuilding';
import SEOAnalysis from '@/pages/services/seo/SEOAnalysis';
import SEOTraining from '@/pages/services/seo/SEOTraining';

// Website Design & Optimization
import SEOWebDesign from '@/pages/services/web/SEOWebDesign';
import WebsiteSpeed from '@/pages/services/web/WebsiteSpeed';
import LandingPages from '@/pages/services/web/LandingPages';
import UXArchitecture from '@/pages/services/web/UXArchitecture';

// Advertising & Digital Marketing
import GoogleAds from '@/pages/services/marketing/GoogleAds';
import EmailMarketing from '@/pages/services/marketing/EmailMarketing';
import SocialMediaManagement from '@/pages/services/marketing/SocialMediaManagement';
import IntegratedCampaigns from '@/pages/services/marketing/IntegratedCampaigns';
import SalesFunnelManagement from '@/pages/services/marketing/SalesFunnelManagement';

// Content & Media
import TextContent from '@/pages/services/content/TextContent';
import SocialMediaContent from '@/pages/services/content/SocialMediaContent';
import VisualContent from '@/pages/services/content/VisualContent';
import ContentCalendar from '@/pages/services/content/ContentCalendar';
import Translation from '@/pages/services/content/Translation';

// AI Services
import MarketingAutomation from '@/pages/services/ai/MarketingAutomation';
import AutoContentGeneration from '@/pages/services/ai/AutoContentGeneration';
import UserBehaviorAnalysis from '@/pages/services/ai/UserBehaviorAnalysis';
import SmartSEO from '@/pages/services/ai/SmartSEO';
import PersianChatbot from '@/pages/services/ai/PersianChatbot';
import ConversionOptimization from '@/pages/services/ai/ConversionOptimization';
import ContentPersonalization from '@/pages/services/ai/ContentPersonalization';
import BrandMonitoring from '@/pages/services/ai/BrandMonitoring';
import AIVideoGeneration from '@/pages/services/ai/AIVideoGeneration';
import AIConsulting from '@/pages/services/ai/AIConsulting';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/google-ads" element={<GoogleAdsService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* SEO Services */}
            <Route path="/services/seo/website-seo" element={<WebsiteSEO />} />
            <Route path="/services/seo/technical-seo" element={<TechnicalSEO />} />
            <Route path="/services/seo/content-seo" element={<ContentSEO />} />
            <Route path="/services/seo/link-building" element={<LinkBuilding />} />
            <Route path="/services/seo/analysis" element={<SEOAnalysis />} />
            <Route path="/services/seo/training" element={<SEOTraining />} />

            {/* Website Design & Optimization */}
            <Route path="/services/web/seo-web-design" element={<SEOWebDesign />} />
            <Route path="/services/web/website-speed" element={<WebsiteSpeed />} />
            <Route path="/services/web/landing-pages" element={<LandingPages />} />
            <Route path="/services/web/ux-architecture" element={<UXArchitecture />} />

            {/* Marketing Services */}
            <Route path="/services/marketing/google-ads" element={<GoogleAds />} />
            <Route path="/services/marketing/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/marketing/social-media" element={<SocialMediaManagement />} />
            <Route path="/services/marketing/integrated-campaigns" element={<IntegratedCampaigns />} />
            <Route path="/services/marketing/sales-funnel" element={<SalesFunnelManagement />} />

            {/* Content Services */}
            <Route path="/services/content/text-content" element={<TextContent />} />
            <Route path="/services/content/social-media-content" element={<SocialMediaContent />} />
            <Route path="/services/content/visual-content" element={<VisualContent />} />
            <Route path="/services/content/content-calendar" element={<ContentCalendar />} />
            <Route path="/services/content/translation" element={<Translation />} />

            {/* AI Services */}
            <Route path="/services/ai/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/services/ai/auto-content-generation" element={<AutoContentGeneration />} />
            <Route path="/services/ai/user-behavior-analysis" element={<UserBehaviorAnalysis />} />
            <Route path="/services/ai/smart-seo" element={<SmartSEO />} />
            <Route path="/services/ai/persian-chatbot" element={<PersianChatbot />} />
            <Route path="/services/ai/conversion-optimization" element={<ConversionOptimization />} />
            <Route path="/services/ai/content-personalization" element={<ContentPersonalization />} />
            <Route path="/services/ai/brand-monitoring" element={<BrandMonitoring />} />
            <Route path="/services/ai/ai-video-generation" element={<AIVideoGeneration />} />
            <Route path="/services/ai/ai-consulting" element={<AIConsulting />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingActions />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
