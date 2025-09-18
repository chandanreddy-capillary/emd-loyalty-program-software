import Header from "@/components/Header";
import TelecomLoyaltyPage from "@/components/TelecomLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TelecomPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TelecomLoyaltyPage />
      <Footer />
    </div>
  );
};

export default TelecomPage;
