import Header from "@/components/Header";
import HospitalityLoyaltyPage from "@/components/HospitalityLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HospitalityPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HospitalityLoyaltyPage />
      <Footer />
    </div>
  );
};

export default HospitalityPage;
