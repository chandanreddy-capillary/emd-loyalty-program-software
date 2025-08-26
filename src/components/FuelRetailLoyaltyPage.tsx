import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, BarChart3, Fuel, Smartphone, Globe, TrendingUp, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FuelRetailLoyaltyPage = () => {
  useScrollAnimation();

  const industryChallenges = [
    {
      title: "Fragmented Customer Journeys",
      description: "Disparate experiences across fuel stations, digital apps, and partner networks limit brand loyalty.",
    },
    {
      title: "Low Engagement Beyond Fuel",
      description: "Most customers engage only at the pump, missing opportunities for lifestyle, retail, and dining tie-ins.",
    },
    {
      title: "Limited Personalization",
      description: "Traditional fuel programs focus on discounts, lacking the personalization today’s customers expect.",
    },
  ];

  const capabilities = [
    {
      title: "Data Points and Fuel Analytics",
      description: "Leverage predictive analytics for insights into consumer behavior, fuel purchasing patterns, and engagement metrics.",
      icon: <BarChart3 className="w-8 h-8 text-teal" />,
    },
    {
      title: "Speed & ROI Performance",
      description: "Measure loyalty ROI in real-time and optimize customer engagement strategies for measurable growth.",
      icon: <TrendingUp className="w-8 h-8 text-teal" />,
    },
    {
      title: "Insights Accurate to Fuel Needs",
      description: "Tailored analytics that directly reflect customer fueling behaviors, purchase frequency, and station preferences.",
      icon: <Fuel className="w-8 h-8 text-teal" />,
    },
    {
      title: "Omnichannel Experiential Engagement",
      description: "Seamless engagement across mobile apps, loyalty cards, POS systems, and connected vehicle ecosystems.",
      icon: <Globe className="w-8 h-8 text-teal" />,
    },
  ];

  const ecosystemSteps = [
    "Customers engage via apps, loyalty cards, or at-pump experiences.",
    "Unified platform integrates B2C fuel partners and B2B fleet accounts.",
    "Earn & redeem points seamlessly across fuel and non-fuel categories.",
    "Data-driven insights help optimize promotions, discounts, and bundles.",
    "Future-ready with mobile-first and pay-at-pump integrations.",
  ];

  const highlights = [
    {
      title: "Fully-Integrated Mobile App",
      description: "Mobile-first experience offering fuel payments, rewards, and engagement in one unified platform.",
    },
    {
      title: "Omnichannel Customer Engagement",
      description: "Engage across pumps, convenience stores, mobile, and partner channels with real-time sync.",
    },
    {
      title: "Automated Promotions",
      description: "Intelligent cross-sell and upsell campaigns triggered by fueling behaviors and purchase history.",
    },
  ];

  const successMetrics = [
    { number: "35%", label: "Increase in Non-Fuel Sales" },
    { number: "40%", label: "Boost in Repeat Fueling Visits" },
    { number: "25%", label: "Improved ROI on Promotions" },
    { number: "50%", label: "Faster Digital Payment Adoption" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-teal text-white border-teal-light">
            Fuel Retail Expertise
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Fuel Retail Loyalty Solutions
            <span className="text-teal-light block">Drive Growth Beyond the Pump</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform every fueling stop into a rewarding journey. 
            Our integrated loyalty solutions unify fuel and non-fuel businesses, 
            enabling personalized engagement across apps, cards, and at-pump experiences.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Fuel Retail Loyalty Solutions
          </Button>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Meeting Fuel Retail Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Address evolving consumer expectations with future-ready solutions for fueling businesses.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryChallenges.map((challenge, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{challenge.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            The Fuel Loyalty Ecosystem
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A complete future-ready framework to unify fuel and non-fuel engagement.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {ecosystemSteps.map((step, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border slide-in-mask">
                <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Fuel Retail Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for the fueling industry to maximize engagement and ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>
                  {capability.icon}
                  <CardTitle className="text-lg text-navy mt-4">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Carousel (Static version) */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Highlights: Future-Ready Features
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Deliver modern, mobile-first, and contactless fuel retail experiences.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Proven Results for Fuel Retailers</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real outcomes from fueling businesses adopting our loyalty solutions worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((stat, index) => (
              <div key={index} className="text-center slide-in-mask">
                <div className="text-4xl lg:text-5xl font-bold text-teal-light mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ready to Transform Your Fuel Loyalty Program?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to build a future-ready solution that engages customers beyond the pump.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Fuel Retail Loyalty Solutions
          </Button>
        </div>
      </section>

    </div>
  );
};

export default FuelRetailLoyaltyPage;
