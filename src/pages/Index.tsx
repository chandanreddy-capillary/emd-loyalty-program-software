import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import StatisticsSection from "@/components/StatisticsSection";
import LoyaltySolutionSection from "@/components/LoyaltySolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LogoStrip />
      <StatisticsSection />
      <LoyaltySolutionSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
