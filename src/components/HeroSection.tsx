import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Loyalty Program Software That Grows{" "}
              <span className="text-teal">Repeat Customers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build powerful, personalized loyalty programs that increase
              customer retention, boost repeat purchases, and turn first-time
              shoppers into lifelong brand advocates.
            </p>
            <div className="flex justify-center">
              <Button className="btn-hero text-lg px-8 py-4">
                Talk to Our Experts
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl w-full">
              <img
                src={heroDashboard}
                alt="Loyalty Program Software Dashboard"
                className="w-full h-auto rounded-2xl shadow-hero hover-lift"
              />
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 bg-teal text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
                390+ Brands
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy text-white px-4 py-2 rounded-lg shadow-lg animate-bounce delay-300">
                1.2 Bn+ Loyalty Members
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;