import Header from "@/components/Header";
import FoodBeverageLoyaltyPage from "@/components/FoodBeverageLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FoodBeveragePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FoodBeverageLoyaltyPage />
      <Footer />
    </div>
  );
};

export default FoodBeveragePage;
