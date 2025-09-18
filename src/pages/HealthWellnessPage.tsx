import Header from "@/components/Header";
import HealthWellnessLoyaltyPage from "@/components/HealthWellnessLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HealthWellnessPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HealthWellnessLoyaltyPage />
      <Footer />
    </div>
  );
};

export default HealthWellnessPage;
