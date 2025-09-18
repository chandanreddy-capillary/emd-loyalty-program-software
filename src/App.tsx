import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LPSPage from "./pages/LPSPage";
import AirlinePage from "./pages/AirlinePage";
import CPGPage from "./pages/CPGPage";
import HospitalityPage from "./pages/HospitalityPage";
import ConglomeratePage from "./pages/ConglomeratePage";
import RetailPage from "./pages/RetailPage";
import FuelRetailPage from "./pages/FuelRetailPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ClientsPage from "./pages/ClientsPage";
import BankingPage from "./pages/BankingPage";
import BeautyPage from "./pages/BeautyPage";
import EcommercePage from "./pages/EcommercePage";
import FashionPage from "./pages/FashionPage";
import FoodBeveragePage from "./pages/FoodBeveragePage";
import HealthWellnessPage from "./pages/HealthWellnessPage";
import TelecomPage from "./pages/TelecomPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Solutions */}
          <Route path="/solutions" element={<LPSPage />} />

          {/* Clients (no page yet) */}
          <Route path="/clients" element={<ClientsPage />} />

          {/* About Us (no page yet) */}
          <Route path="/about" element={<AboutUsPage />} />

          {/* Industries (dropdown items) */}
          <Route path="/industries" element={<NotFound />} />
          <Route path="/industries/airline" element={<AirlinePage />} />
          <Route path="/industries/cpg" element={<CPGPage />} />
          <Route path="/industries/conglomerates" element={<ConglomeratePage />} />
          <Route path="/industries/fuel-retail" element={<FuelRetailPage />} />
          <Route path="/industries/hospitality" element={<HospitalityPage />} />
          <Route path="/industries/retail" element={<RetailPage />} />
          <Route path="/industries/banking" element={<BankingPage />} />
          <Route path="/industries/beauty" element={<BeautyPage />} />
          <Route path="/industries/ecommerce" element={<EcommercePage />} />
          <Route path="/industries/fashion" element={<FashionPage />} />
          <Route path="/industries/food-beverage" element={<FoodBeveragePage />} />
          <Route path="/industries/health-wellness" element={<HealthWellnessPage />} />
          <Route path="/industries/telecom" element={<TelecomPage />} />

          {/* Contact Us (no page yet) */}
          <Route path="/contact" element={<ContactUsPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
