
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Main Pages
const Index = React.lazy(() => import('@/pages/Index'));
const Services = React.lazy(() => import('@/pages/Services'));
const SEOService = React.lazy(() => import('@/pages/SEOService'));
const GoogleAdsService = React.lazy(() => import('@/pages/GoogleAdsService'));
const Blog = React.lazy(() => import('@/pages/Blog'));
const BlogPost = React.lazy(() => import('@/pages/BlogPost'));
const About = React.lazy(() => import('@/pages/About'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
import FloatingActions from '@/components/FloatingActions';

// SEO Services
const WebsiteSEO = React.lazy(() => import('@/pages/services/seo/WebsiteSEO'));
const TechnicalSEO = React.lazy(() => import('@/pages/services/seo/TechnicalSEO'));
const ContentSEO = React.lazy(() => import('@/pages/services/seo/ContentSEO'));
const LinkBuilding = React.lazy(() => import('@/pages/services/seo/LinkBuilding'));
const SEOAnalysis = React.lazy(() => import('@/pages/services/seo/SEOAnalysis'));
const SEOTraining = React.lazy(() => import('@/pages/services/seo/SEOTraining'));

// Website Design & Optimization
const SEOWebDesign = React.lazy(() => import('@/pages/services/web/SEOWebDesign'));
const WebsiteSpeed = React.lazy(() => import('@/pages/services/web/WebsiteSpeed'));
const LandingPages = React.lazy(() => import('@/pages/services/web/LandingPages'));
const UXArchitecture = React.lazy(() => import('@/pages/services/web/UXArchitecture'));

// Advertising & Digital Marketing
const GoogleAds = React.lazy(() => import('@/pages/services/marketing/GoogleAds'));
const EmailMarketing = React.lazy(() => import('@/pages/services/marketing/EmailMarketing'));
const SocialMediaManagement = React.lazy(() => import('@/pages/services/marketing/SocialMediaManagement'));
const IntegratedCampaigns = React.lazy(() => import('@/pages/services/marketing/IntegratedCampaigns'));
const SalesFunnelManagement = React.lazy(() => import('@/pages/services/marketing/SalesFunnelManagement'));

// Content & Media
const TextContent = React.lazy(() => import('@/pages/services/content/TextContent'));
const SocialMediaContent = React.lazy(() => import('@/pages/services/content/SocialMediaContent'));
const VisualContent = React.lazy(() => import('@/pages/services/content/VisualContent'));
const ContentCalendar = React.lazy(() => import('@/pages/services/content/ContentCalendar'));
const Translation = React.lazy(() => import('@/pages/services/content/Translation'));

// AI Services
const MarketingAutomation = React.lazy(() => import('@/pages/services/ai/MarketingAutomation'));
const AutoContentGeneration = React.lazy(() => import('@/pages/services/ai/AutoContentGeneration'));
const UserBehaviorAnalysis = React.lazy(() => import('@/pages/services/ai/UserBehaviorAnalysis'));
const SmartSEO = React.lazy(() => import('@/pages/services/ai/SmartSEO'));
const PersianChatbot = React.lazy(() => import('@/pages/services/ai/PersianChatbot'));
const ConversionOptimization = React.lazy(() => import('@/pages/services/ai/ConversionOptimization'));
const ContentPersonalization = React.lazy(() => import('@/pages/services/ai/ContentPersonalization'));
const BrandMonitoring = React.lazy(() => import('@/pages/services/ai/BrandMonitoring'));
const AIVideoGeneration = React.lazy(() => import('@/pages/services/ai/AIVideoGeneration'));
const AIConsulting = React.lazy(() => import('@/pages/services/ai/AIConsulting'));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="w-full animate-fade-in">
        <Routes location={location}>
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
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
        <FloatingActions />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
