import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Main pages chunk
          'main-pages': [
            'src/pages/Index.tsx',
            'src/pages/Services.tsx',
            'src/pages/SEOService.tsx',
            'src/pages/GoogleAdsService.tsx',
            'src/pages/Blog.tsx',
            'src/pages/BlogPost.tsx',
            'src/pages/About.tsx',
            'src/pages/Contact.tsx',
            'src/pages/NotFound.tsx',
          ],
          // SEO services chunk
          'seo-services': [
            'src/pages/services/seo/WebsiteSEO.tsx',
            'src/pages/services/seo/TechnicalSEO.tsx',
            'src/pages/services/seo/ContentSEO.tsx',
            'src/pages/services/seo/LinkBuilding.tsx',
            'src/pages/services/seo/SEOAnalysis.tsx',
            'src/pages/services/seo/SEOTraining.tsx',
          ],
          // Web services chunk
          'web-services': [
            'src/pages/services/web/SEOWebDesign.tsx',
            'src/pages/services/web/WebsiteSpeed.tsx',
            'src/pages/services/web/LandingPages.tsx',
            'src/pages/services/web/UXArchitecture.tsx',
          ],
          // Marketing services chunk
          'marketing-services': [
            'src/pages/services/marketing/GoogleAds.tsx',
            'src/pages/services/marketing/EmailMarketing.tsx',
            'src/pages/services/marketing/SocialMediaManagement.tsx',
            'src/pages/services/marketing/IntegratedCampaigns.tsx',
            'src/pages/services/marketing/SalesFunnelManagement.tsx',
          ],
          // Content services chunk
          'content-services': [
            'src/pages/services/content/TextContent.tsx',
            'src/pages/services/content/SocialMediaContent.tsx',
            'src/pages/services/content/VisualContent.tsx',
            'src/pages/services/content/ContentCalendar.tsx',
            'src/pages/services/content/Translation.tsx',
          ],
          // AI services chunk
          'ai-services': [
            'src/pages/services/ai/MarketingAutomation.tsx',
            'src/pages/services/ai/AutoContentGeneration.tsx',
            'src/pages/services/ai/UserBehaviorAnalysis.tsx',
            'src/pages/services/ai/SmartSEO.tsx',
            'src/pages/services/ai/PersianChatbot.tsx',
            'src/pages/services/ai/ConversionOptimization.tsx',
            'src/pages/services/ai/ContentPersonalization.tsx',
            'src/pages/services/ai/BrandMonitoring.tsx',
            'src/pages/services/ai/AIVideoGeneration.tsx',
            'src/pages/services/ai/AIConsulting.tsx',
          ],
          // Vendor chunk for third-party libraries
          vendor: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'react-helmet-async'],
        },
      },
    },
  },
}));
