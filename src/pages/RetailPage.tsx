import Header from "@/components/Header";
import RetailLoyaltyPage from "@/components/RetailLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RetailPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RetailLoyaltyPage />
      <Footer />
    </div>
  );
};

export default RetailPage;
