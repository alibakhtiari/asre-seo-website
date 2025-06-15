import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Services from '@/pages/Services';
import SEOService from '@/pages/SEOService';
const queryClient = new QueryClient();
import GoogleAdsService from '@/pages/GoogleAdsService';

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/google-ads" element={<GoogleAdsService />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
