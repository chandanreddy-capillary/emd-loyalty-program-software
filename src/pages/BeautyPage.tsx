import Header from "@/components/Header";
import BeautyLoyaltyPage from "@/components/BeautyLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BeautyPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BeautyLoyaltyPage />
      <Footer />
    </div>
  );
};

export default BeautyPage;
