import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Network, Layers, Gift, TrendingUp, Globe, Star, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConglomerateLoyaltyPage = () => {
  useScrollAnimation();

  const engagementBlocks = [
    {
      title: "Single Program View",
      desc: "Run a unified loyalty program across multiple conglomerate brands for seamless customer recognition.",
    },
    {
      title: "Unified Loyalty Engagement",
      desc: "Consolidate customer interactions across categories and brands to deliver consistent experiences.",
    },
    {
      title: "Multi-Channel Integration",
      desc: "Enable loyalty earning and redemption across retail, e-commerce, F&B, lifestyle, and partner networks.",
    },
  ];

  const whyConglomerate = [
    "Deliver seamless experiences across brands within the conglomerate.",
    "Gain a consolidated consumer view across multiple categories.",
    "Boost engagement by incentivizing cross-brand spending.",
    "Leverage synergies across industries to maximize lifetime value.",
  ];

  const workflowPoints = [
    "Consumers earn and redeem seamlessly across all brands.",
    "Unified view of consumer data across multiple industries and categories.",
    "Analytics-driven insights fuel targeted promotions across brands.",
    "Brands benefit from higher retention and customer lifetime value.",
  ];

  const solutionFeatures = [
    {
      title: "Unified Consumer View",
      desc: "Aggregate customer data across all brands to uncover actionable insights.",
    },
    {
      title: "Incentivize Retention & Growth",
      desc: "Reward customers for staying engaged across multiple brands, boosting stickiness.",
    },
    {
      title: "Build & Nurture Networks",
      desc: "Expand your consortium with new brand partnerships, creating a broader ecosystem.",
    },
    {
      title: "AI-Powered Personalization",
      desc: "Deliver personalized offers across brands using AI-driven segmentation and recommendations.",
    },
  ];

  const successMetrics = [
    { number: "40%", label: "Increase in Cross-Brand Engagement" },
    { number: "30%", label: "Boost in Customer Retention" },
    { number: "25%", label: "Higher Average Revenue Per User" },
    { number: "50%", label: "Growth in Loyalty Program Participation" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-teal text-white border-teal-light">
            Conglomerate Industry Expertise
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Conglomerate Loyalty Program Software
            <span className="text-teal-light block">Unify & Amplify Customer Engagement</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            A holistic loyalty solution for conglomerates to unify consumer experiences, 
            maximize cross-brand engagement, and increase customer lifetime value across industries.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Conglomerate Loyalty Solutions
          </Button>
        </div>
      </section>

      {/* Engagement Blocks */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Bring Consumers Under a Unified Loyalty Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplify loyalty across multiple brands and industries to create seamless, engaging customer journeys.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagementBlocks.map((block, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{block.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Conglomerate Solutions */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Why Conglomerate Loyalty Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Create an integrated ecosystem that drives consumer stickiness and repeat spending across brands.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyConglomerate.map((item, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm slide-in-mask">
                <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            How Conglomerate Loyalty Works
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A unified ecosystem that delivers seamless experiences across brands while driving profitability.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {workflowPoints.map((point, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border slide-in-mask">
                <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Capillary Conglomerate Solution Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your group with AI-driven, unified loyalty features designed for scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>
                  <CardTitle className="text-lg text-navy">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.desc}</CardDescription>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Proven Results for Conglomerates</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tangible business outcomes from leading conglomerates powered by our loyalty solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((stat, index) => (
              <div key={index} className="text-center slide-in-mask">
                <div className="text-4xl lg:text-5xl font-bold text-teal-light mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ready to Build a Multi-Brand Loyalty Program?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Unite your brands under one loyalty ecosystem and unlock exponential customer value.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Conglomerate Loyalty Solutions
          </Button>
        </div>
      </section>

    </div>
  );
};

export default ConglomerateLoyaltyPage;
