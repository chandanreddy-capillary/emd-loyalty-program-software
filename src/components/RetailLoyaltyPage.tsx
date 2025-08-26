import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ShoppingBag, Utensils, Heart, Gem, Store, Monitor, Zap, BarChart3, Users, Sparkles, Layers, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const RetailLoyaltyPage = () => {
  useScrollAnimation();

  // Counter animation
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const targetValues = [3, 20, 30, 25]; // Example metrics: 3X Revenue, 20% CLV lift, etc.

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev =>
        prev.map((val, i) => (val < targetValues[i] ? val + 1 : val))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const workflowSteps = [
    { title: "Enroll & Onboard", description: "Customers sign up via app, POS, or e-commerce touchpoints.", icon: <Users className="w-6 h-6 text-white" /> },
    { title: "Engage & Gamify", description: "Reward everyday interactions with points, badges, and challenges.", icon: <Sparkles className="w-6 h-6 text-white" /> },
    { title: "Personalize & Predict", description: "AI-powered recommendations and personalized offers delivered instantly.", icon: <Zap className="w-6 h-6 text-white" /> },
    { title: "Reward & Retain", description: "Dynamic vouchers, upsell/cross-sell, and tier-based benefits keep customers loyal.", icon: <CheckCircle className="w-6 h-6 text-white" /> },
  ];

  const solutionFeatures = [
    { title: "AI-Powered Personalization", description: "Predict buying behavior and serve relevant offers across channels.", icon: <BarChart3 className="w-8 h-8 text-teal" /> },
    { title: "Omnichannel Loyalty", description: "Seamless earn-and-burn across online, offline, mobile, and partner channels.", icon: <Globe className="w-8 h-8 text-teal" /> },
    { title: "Gamification & Engagement", description: "Create fun experiences with challenges, streaks, and milestone rewards.", icon: <Sparkles className="w-8 h-8 text-teal" /> },
    { title: "Analytics & Insights", description: "Measure performance in real time and optimize campaigns continuously.", icon: <Layers className="w-8 h-8 text-teal" /> },
  ];

  const sectorSolutions = [
    {
      id: "apparel",
      title: "Apparel & Fashion",
      icon: <ShoppingBag className="w-6 h-6" />,
      features: [
        "Zero & first-party data collection for deep profiling",
        "AI/ML-powered predictions for evolving fashion preferences",
        "Complex tiered loyalty & referral incentives",
        "Mobile-first, AR-enabled personalized recommendations"
      ]
    },
    {
      id: "fnb",
      title: "Food & Beverage / QSR",
      icon: <Utensils className="w-6 h-6" />,
      features: [
        "Unified data across online & offline orders",
        "Frictionless earn & redeem via auto-applied offers",
        "Multiple redemption catalogs & options",
        "Personalized offers on responsive channels"
      ]
    },
    {
      id: "health",
      title: "Health & Beauty",
      icon: <Heart className="w-6 h-6" />,
      features: [
        "Progressive profiling to capture evolving preferences",
        "Automated reminders for repeat seasonal purchases",
        "Omnichannel engagement across apps & social",
        "Real-time dashboards & AI-driven recommendations"
      ]
    },
    {
      id: "luxury",
      title: "Luxury & Jewellery",
      icon: <Gem className="w-6 h-6" />,
      features: [
        "Invite-only data collection & personalized concierge",
        "Early access catalogs & exclusive event invites",
        "VIP inner circle paid loyalty programs",
        "Partnerships with complementing luxury brands"
      ]
    },
    {
      id: "hypermarkets",
      title: "Hypermarkets",
      icon: <Store className="w-6 h-6" />,
      features: [
        "POS-integrated loyalty with SKU-level earn rates",
        "Omni-channel earn & burn across commerce platforms",
        "Gamified experiences with badges & streaks",
        "Real-time targeted promotions with analytics-driven campaigns"
      ]
    },
    {
      id: "cd-it",
      title: "Consumer Durables & IT",
      icon: <Monitor className="w-6 h-6" />,
      features: [
        "Omnichannel loyalty across e-commerce & POS",
        "Category-based point earning structures",
        "Dynamic vouchering & timeline campaigns",
        "Comprehensive KPI dashboards & data export frameworks"
      ]
    }
  ];

  const implementationSteps = [
    { step: "01", title: "Strategy & Design", description: "Analyze retail categories, customer profiles, and objectives to define loyalty structure." },
    { step: "02", title: "Integration", description: "Seamlessly connect POS, e-commerce, and CRM systems for unified customer view." },
    { step: "03", title: "Program Launch", description: "Deploy loyalty engine with gamification, tiers, and omni-channel campaigns." },
    { step: "04", title: "Continuous Optimization", description: "Leverage insights to refine campaigns, offers, and customer journeys." },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 text-center text-white fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <Badge className="mb-6 bg-teal text-white border-teal-light">Retail Loyalty Expertise</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
            Reinvent Retail Loyalty
            <span className="block text-teal-light">Drive Engagement & Growth</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 animate-fade-in-up">
            Transform every transaction into a relationship. Our AI-powered retail loyalty platform delivers 
            personalized, gamified, and omnichannel experiences that maximize customer lifetime value.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg animate-bounce">
            Explore Retail Solutions
          </Button>
        </div>
      </section>

      {/* Why Retail Loyalty Matters */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Why Retail Loyalty Matters</h2>
          <p className="text-xl text-gray-600 mb-12">Retail is fiercely competitive. Our solutions ensure customers keep choosing you.</p>
          <div className="grid lg:grid-cols-4 gap-8">
            {["Customer Retention", "Hyper Personalization", "Omnichannel Journeys", "Revenue Growth"].map((benefit, i) => (
              <Card key={i} className="border-2 hover:border-teal transition hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader><CardTitle>{benefit}</CardTitle></CardHeader>
                <CardContent><CardDescription>Maximize loyalty with data-driven engagement strategies tailored to retail.</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">AI-Powered Retail Workflow</h2>
          <p className="text-xl text-gray-600 mb-12">How customers move from first purchase to lifelong loyalty.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, i) => (
              <div key={i} className="bg-gradient-to-r from-navy-light to-teal p-6 rounded-xl text-white shadow-md transform hover:scale-105 transition duration-300 slide-in-mask">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm opacity-90">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">Retail Loyalty Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A powerful mix of data, AI, and engagement tools built for retail success.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionFeatures.map((f, i) => (
              <Card key={i} className="border-2 hover:border-teal transition hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>{f.icon}<CardTitle className="mt-4">{f.title}</CardTitle></CardHeader>
                <CardContent><CardDescription>{f.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8 text-center">Sector-Specific Retail Solutions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {sectorSolutions.map((sector) => (
              <AccordionItem key={sector.id} value={sector.id} className="border rounded-lg shadow-sm slide-in-mask">
                <AccordionTrigger className="flex items-center gap-3 px-4 py-3 text-navy font-semibold hover:text-teal">
                  {sector.icon} {sector.title}
                </AccordionTrigger>
                <AccordionContent className="p-6 space-y-3 bg-gray-50">
                  {sector.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal mt-1" />
                      <p className="text-gray-700">{f}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Retail Loyalty Impact</h2>
          <p className="text-xl text-gray-200 mb-12">Proven outcomes from retail brands leveraging our solutions.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Revenue from Retained Customers", suffix: "X" },
              { label: "Increase in CLV", suffix: "%" },
              { label: "Higher Repeat Purchases", suffix: "%" },
              { label: "Lift in Engagement Rates", suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="slide-in-mask">
                <div className="text-4xl lg:text-5xl font-bold text-teal-light mb-2">{counters[i]}{stat.suffix}</div>
                <div className="text-sm lg:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Journey */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Retail Loyalty Journey</h2>
          <p className="text-xl text-gray-600 mb-12">From strategy to continuous optimization, we guide you through every step.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transform hover:-translate-y-2 transition slide-in-mask">
                <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">{step.step}</div>
                <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Ready to Elevate Your Retail Loyalty Program?</h2>
          <p className="text-xl text-gray-600 mb-8">Partner with us to transform customer experiences across every retail sector.</p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg animate-pulse">Contact Our Experts</Button>
        </div>
      </section>

    </div>
  );
};

export default RetailLoyaltyPage;
