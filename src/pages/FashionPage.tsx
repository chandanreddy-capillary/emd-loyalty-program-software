import Header from "@/components/Header";
import FashionLoyaltyPage from "@/components/FashionLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FashionPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FashionLoyaltyPage />
      <Footer />
    </div>
  );
};

export default FashionPage;
