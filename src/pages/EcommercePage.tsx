import Header from "@/components/Header";
import EcommerceLoyaltyPage from "@/components/EcommerceLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EcommercePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <EcommerceLoyaltyPage />
      <Footer />
    </div>
  );
};

export default EcommercePage;
