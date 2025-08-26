import Header from "@/components/Header";
import FuelRetailLoyaltyPage from "@/components/FuelRetailLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FuelRetailPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FuelRetailLoyaltyPage />
      <Footer />
    </div>
  );
};

export default FuelRetailPage;
