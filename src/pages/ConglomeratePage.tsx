import Header from "@/components/Header";
import ConglomerateLoyaltyPage from "@/components/ConglomerateLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConglomeratePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ConglomerateLoyaltyPage />
      <Footer />
    </div>
  );
};

export default ConglomeratePage;
