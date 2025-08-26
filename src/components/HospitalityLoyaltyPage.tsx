import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Hotel, Gift, Star, TrendingUp, Globe, Shield, ConciergeBell, Smile } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HospitalityLoyaltyPage = () => {
  useScrollAnimation();

  const engagementBlocks = [
    {
      title: "Detailed Guest View",
      desc: "Aggregate guest data across stays, dining, and activities to build 360° guest profiles.",
    },
    {
      title: "Differentiated Loyalty",
      desc: "Stand out with flexible loyalty structures — from points and tiers to experiential rewards.",
    },
    {
      title: "Personalized Experiences",
      desc: "Deliver curated offers like suite upgrades, spa vouchers, and late check-outs tailored to each guest.",
    },
  ];

  const industryChallenges = [
    {
      challenge: "Low Repeat Frequency",
      solution: "Encourage repeat bookings through tiered benefits, experiential rewards, and corporate tie-ins.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      challenge: "Fragmented Guest Data",
      solution: "Unify booking, dining, spa, and partner interactions into one loyalty platform.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      challenge: "Operational Silos",
      solution: "Integrate loyalty with PMS, POS, and CRM systems to streamline staff and guest experiences.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      challenge: "Aggregator Dependence",
      solution: "Reduce reliance on OTAs with direct booking incentives, exclusive loyalty rewards, and membership benefits.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const digitalOps = [
    "Room inventory & reservations management",
    "Property management to avoid overbookings",
    "Voice control & biometric authentication",
    "Internal communications & performance management",
    "Seamless integration with hotel aggregator systems",
  ];

  const guestPillars = [
    {
      title: "Engage Me",
      desc: "Drive ongoing interactions with offers like car rental coupons, dining vouchers, and exclusive invites.",
      icon: <Gift className="w-8 h-8 text-teal" />,
    },
    {
      title: "Know Me",
      desc: "Leverage guest insights to provide personalized rewards and anticipate preferences across stays.",
      icon: <Users className="w-8 h-8 text-teal" />,
    },
    {
      title: "Hear Me",
      desc: "Incorporate real-time feedback loops, ensuring guest needs and suggestions are acted on promptly.",
      icon: <ConciergeBell className="w-8 h-8 text-teal" />,
    },
    {
      title: "Delight Me",
      desc: "Surprise guests with suite upgrades, breakfast in bed, and lifestyle rewards that exceed expectations.",
      icon: <Smile className="w-8 h-8 text-teal" />,
    },
    {
      title: "Empower Me",
      desc: "Provide autonomy with concierge on call, airport lounge access, and multi-channel service touchpoints.",
      icon: <Star className="w-8 h-8 text-teal" />,
    },
  ];

  const solutionFeatures = [
    {
      title: "Comprehensive Guest Profiles",
      desc: "Connect stay, spend, and lifestyle data for actionable insights.",
    },
    {
      title: "Enhanced Loyalty Engagement",
      desc: "Gamification, experiential benefits, and emotional loyalty drivers.",
    },
    {
      title: "Multi-Property Integration",
      desc: "Manage loyalty seamlessly across hotel groups, resorts, and restaurants.",
    },
    {
      title: "Resource Efficiency",
      desc: "Optimize staff, promotions, and occupancy for higher yield per guest.",
    },
  ];

  const successMetrics = [
    { number: "35%", label: "Increase in Repeat Bookings" },
    { number: "50%", label: "Higher Guest Engagement" },
    { number: "25%", label: "Boost in Lifetime Value" },
    { number: "40%", label: "Improvement in Occupancy" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-teal text-white border-teal-light">
            Hospitality Industry Expertise
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Hospitality Loyalty Program Software
            <span className="text-teal-light block">Transform Guest Relationships</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Drive repeat stays, personalized guest engagement, and higher revenue 
            with our end-to-end hospitality loyalty solutions.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Hospitality Loyalty Solutions
          </Button>
        </div>
      </section>

      {/* Engagement Blocks */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Building Blocks of Guest Engagement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering meaningful guest experiences across the entire customer lifecycle.
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

      {/* Digital Operations */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Digital Transformation in Hospitality Operations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Streamline operations, eliminate inefficiencies, and create connected experiences with digital-first systems.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {digitalOps.map((item, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm slide-in-mask">
                <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Experience Pillars */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Guest Experience Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From transactional to emotional loyalty — elevate every guest interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {guestPillars.map((pillar, index) => (
              <Card key={index} className="text-center border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white slide-in-mask">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-4 mx-auto">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-lg text-navy">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Hospitality Industry Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tackling industry-specific challenges with tailored loyalty strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="text-sm font-medium text-teal mb-2">Our Solution</div>
                  <p className="text-gray-600 leading-relaxed">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Solution Features */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Capillary Hospitality Solution Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build scalable, future-ready programs that drive long-term guest value.
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Proven Results in Hospitality</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Measurable business outcomes from our hospitality loyalty programs.
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

      {/* Implementation Journey */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">Your Hospitality Loyalty Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear roadmap to building a profitable, guest-first loyalty program.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Discovery", description: "Analyze guest preferences, booking trends, and competitive benchmarks." },
              { step: "02", title: "System Integration", description: "Integrate with PMS, POS, and partner systems for unified operations." },
              { step: "03", title: "Program Launch", description: "Deploy tiered programs, benefits, and cross-property campaigns." },
              { step: "04", title: "Optimization & Scale", description: "Continuously improve ROI with insights, engagement, and expansion." },
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
            Ready to Elevate Guest Loyalty?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with us to create memorable guest journeys that drive loyalty and revenue.
          </p>
          <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
            Explore Hospitality Loyalty Solutions
          </Button>
        </div>
      </section>

    </div>
  );
};

export default HospitalityLoyaltyPage;
