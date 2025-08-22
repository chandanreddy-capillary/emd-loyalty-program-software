import Header from "@/components/Header";
import AirlineLoyaltyPage from "@/components/AirlineLoyaltyPage";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AirlinePage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AirlineLoyaltyPage />
      <Footer />
    </div>
  );
};

export default AirlinePage;
