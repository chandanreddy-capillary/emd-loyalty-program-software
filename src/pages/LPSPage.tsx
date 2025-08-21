import Header from "@/components/Header";
import LoyaltyProductPage from "@/components/LoyaltyProductPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LPSPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LoyaltyProductPage />
      <Footer />
    </div>
  );
};

export default LPSPage;
