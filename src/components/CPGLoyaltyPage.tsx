import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle, ShoppingBag, Users, Target, BarChart3, Shield, Globe, Star, Award, TrendingUp, Gift, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CPGLoyaltyPage = () => {
  useScrollAnimation();

  const cpgSolutions = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Direct-to-Consumer Engagement",
      description: "Strengthen brand-consumer connections by reducing retailer dependency and building direct engagement channels."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Omnichannel Loyalty",
      description: "Seamlessly unify in-store, e-commerce, mobile, and social platforms for a consistent loyalty experience."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Gamified Consumer Interaction",
      description: "Increase repeat purchases with gamification, challenges, seasonal campaigns, and rewards."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Personalization",
      description: "Leverage predictive analytics to create personalized promotions and reduce churn risk."
    }
  ];

  const industryChallenges = [
    {
      challenge: "High Brand Switching",
      solution: "Use loyalty programs and gamification to discourage switching and build emotional brand connections.",
      icon: <Users className="w-6 h-6" />
    },
    {
      challenge: "Retailer Dependency",
      solution: "Establish direct consumer relationships to minimize reliance on third-party retail data.",
      icon: <Target className="w-6 h-6" />
    },
    {
      challenge: "Fragmented Customer Data",
      solution: "Unify digital, retail, and social touchpoints into a single Customer Data Platform (CDP).",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      challenge: "Price Sensitivity",
      solution: "Go beyond discounts with tiered rewards, exclusive benefits, and experiential loyalty.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    "Unified Customer Data Platform (CDP)",
    "AI-Powered Personalization Engine",
    "Gamification & Tier-based Rewards",
    "Trade Promotion & Retail Execution Integration",
    "Real-Time Campaign Orchestration",
    "Multi-Brand Coalition Program Support",
    "Omnichannel Earn & Burn Capabilities",
    "Mobile Wallet & Social Commerce",
    "Behavioral Segmentation & Insights",
    "ROI Measurement & Analytics Dashboards"
  ];

  const loyaltyModels = [
    {
      title: "Points-Based Loyalty",
      description: "Reward customers with points for repeat purchases, referrals, and advocacy, redeemable for discounts or experiences."
    },
    {
      title: "Tiered Loyalty",
      description: "Motivate long-term engagement with tier-based benefits that increase as customers move up the loyalty ladder."
    },
    {
      title: "Gamified Loyalty",
      description: "Engage high-frequency buyers with gamification — challenges, milestones, badges, and social competitions."
    },
    {
      title: "Coalition Loyalty",
      description: "Build partnerships with retailers, distributors, and complementary CPG brands for ecosystem-based loyalty."
    }
  ];

  const successMetrics = [
    { number: "50%", label: "Improvement in Customer Retention" },
    { number: "40%", label: "Increase in Repeat Purchases" },
    { number: "35%", label: "Boost in Customer Lifetime Value" },
    { number: "60%", label: "Higher Consumer Engagement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              Consumer Packaged Goods Expertise
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              CPG Loyalty Program Software
              <span className="text-teal-light block">Direct-to-Consumer Engagement at Scale</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock consumer loyalty with AI-powered personalization, omnichannel engagement, and rewards designed 
              to transform everyday purchases into brand relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
                Explore CPG Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Building Blocks of Engagement */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Building Blocks of CPG Engagement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars driving consumer connections and sustainable growth for CPG brands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Data Capture", desc: "Leverage retail, digital, and social touchpoints for rich consumer profiles." },
              { title: "AI Insights", desc: "Segment consumers, predict behavior, and personalize promotions." },
              { title: "Omnichannel", desc: "Deliver seamless earn-and-redeem across in-store, e-commerce, and mobile." },
              { title: "Incentivization", desc: "Motivate repeat purchases with rewards, gamification, and exclusive offers." }
            ].map((block, index) => (
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

      {/* Industry Challenges - Cards */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              CPG Industry Challenges & Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Addressing the unique pain points faced by CPG brands with actionable solutions.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {industryChallenges.map((item, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-navy text-white p-2 rounded-lg">{item.icon}</div>
                    <CardTitle className="text-lg text-navy">Challenge</CardTitle>
                  </div>
                  <CardDescription className="font-semibold text-gray-700 mb-4">{item.challenge}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-teal mb-2">Our Approach</div>
                  <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Our CPG Loyalty Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Future-ready solutions to win trust, increase frequency, and strengthen consumer relationships.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {cpgSolutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-teal text-white p-3 rounded-lg">{solution.icon}</div>
                    <CardTitle className="text-xl text-navy">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Platform Capabilities for CPG
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade features to manage, measure, and optimize loyalty programs at scale.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm slide-in-mask">
                  <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Models - Accordions */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              CPG Loyalty Program Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible structures designed to match diverse CPG business needs and consumer behaviors.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {loyaltyModels.map((model, index) => (
              <AccordionItem key={index} value={`model-${index}`} className="bg-gray-50 rounded-xl px-6 border-none data-[state=open]:bg-gray-100 data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-lg font-semibold text-navy pr-4 group-data-[state=open]:text-teal transition-colors duration-300">
                    {model.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed text-base animate-fade-in">
                    {model.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Proven Results in CPG Loyalty
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Measurable business outcomes that leading CPG brands have achieved.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((stat, index) => (
              <div key={index} className="text-center slide-in-mask">
                <div className="text-4xl lg:text-5xl font-bold text-teal-light mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Your CPG Loyalty Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From program strategy to continuous optimization, we partner with you every step of the way.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Discovery", description: "Analyze segments, purchase cycles, and loyalty drivers." },
              { step: "02", title: "Platform Integration", description: "Connect retail, digital, and POS systems seamlessly." },
              { step: "03", title: "Program Launch", description: "Roll out multi-channel campaigns with onboarding incentives." },
              { step: "04", title: "Optimization & Scale", description: "Refine campaigns with insights, scale to coalition programs." }
            ].map((step, index) => (
              <div key={index} className="text-center slide-in-mask">
                <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ready to Build Loyalty in CPG?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let’s design a loyalty program that turns everyday purchases into lifelong brand advocacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CPGLoyaltyPage;
