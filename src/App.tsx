import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LPSPage from "./pages/LPSPage";
import ScrollToTop from "./components/ScrollToTop";

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

          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Solutions */}
          <Route path="/solutions" element={<LPSPage />} />

          {/* Clients (no page yet) */}
          <Route path="/clients" element={<NotFound />} />

          {/* About Us (no page yet) */}
          <Route path="/about" element={<NotFound />} />

          {/* Industries (dropdown items) */}
          <Route path="/industries" element={<NotFound />} />
          <Route path="/industries/airline" element={<NotFound />} />
          <Route path="/industries/cpg" element={<NotFound />} />
          <Route path="/industries/conglomerates" element={<NotFound />} />
          <Route path="/industries/fuel-retail" element={<NotFound />} />
          <Route path="/industries/hospitality" element={<NotFound />} />
          <Route path="/industries/retail" element={<NotFound />} />

          {/* Contact Us (no page yet) */}
          <Route path="/contact" element={<NotFound />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
