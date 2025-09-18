import Header from "@/components/Header";
import BankingLoyaltyPage from "@/components/BankingLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BankingPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BankingLoyaltyPage />
      <Footer />
    </div>
  );
};

export default BankingPage;
