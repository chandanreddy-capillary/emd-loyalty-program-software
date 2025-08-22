import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Plane, Users, Target, BarChart3, Shield, Globe, Star, Award, TrendingUp, Zap, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AirlineLoyaltyPage = () => {
  useScrollAnimation();

  const airlineSolutions = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Customer Intelligence",
      description: "Advanced data segmentation and AI predictions to understand traveler behavior, from casual travelers to frequent business flyers, enabling hyper-personalized experiences."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Omnichannel Miles Management",
      description: "Seamless earn and redeem experiences across all touchpoints - flights, partners, mobile apps, and airport services - with real-time mile tracking and redemption."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Revenue Optimization Engine",
      description: "Dynamic loyalty program that maximizes incremental value for both travelers and airlines through strategic partnership bundling and ancillary service integration."
    }
  ];

  const industryInsights = [
    {
      challenge: "Loyalty Program Fatigue",
      solution: "Combat frequent flyer disillusionment with dynamic, personalized rewards that adapt to individual travel patterns and preferences",
      icon: <Users className="w-6 h-6" />
    },
    {
      challenge: "Limited Customer Visibility",
      solution: "Comprehensive consumer data platform provides 360-degree view of customer journeys across all airline touchpoints",
      icon: <Target className="w-6 h-6" />
    },
    {
      challenge: "Ancillary Revenue Growth",
      solution: "Intelligent cross-selling of services like priority boarding, lounge access, and upgrades through loyalty program integration",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const keyFeatures = [
    "Dynamic Mile Earning Structures",
    "Tier-Based Status Management",
    "Partner Network Integration",
    "Mobile-First Experience",
    "Real-Time Inventory Management",
    "Personalized Offer Engine",
    "Advanced Customer Segmentation",
    "Predictive Analytics",
    "Cross-Platform Synchronization",
    "Revenue Management Integration",
    "Fraud Detection & Prevention",
    "Multi-Currency Support"
  ];

  const successMetrics = [
    { number: "45%", label: "Increase in Customer Retention" },
    { number: "30%", label: "Higher Lifetime Value" },
    { number: "60%", label: "Boost in Ancillary Revenue" },
    { number: "25%", label: "Improvement in Load Factors" }
  ];

  const loyaltyTypes = [
    {
      title: "Frequent Flyer Programs",
      description: "Traditional mileage-based programs with tier benefits, upgrade privileges, and partnership rewards designed for regular travelers.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Coalition Programs",
      description: "Multi-brand loyalty ecosystems connecting airlines with hotels, car rentals, and retail partners for expanded earning opportunities.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Corporate Travel Programs",
      description: "B2B loyalty solutions for corporate accounts with volume-based rewards, consolidated reporting, and expense management integration.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Experience-Based Loyalty",
      description: "Premium programs focused on exclusive experiences, lounge access, personalized services, and lifestyle rewards beyond traditional miles.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
            
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              Aviation Industry Expertise
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Airline Loyalty
              <span className="text-teal-light block">Drive Profitability & Growth</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Power intelligent frequent flyer programs with our comprehensive airline loyalty platform. 
              Combine advanced customer data insights, AI-powered personalization, and dynamic reward 
              structures to maximize traveler engagement and airline profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
                Explore Airline Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Comprehensive Airline Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines powerful Consumer Data Platform (CDP), advanced segmentation, 
              and AI predictions to deliver incremental value for travelers and airlines alike
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {airlineSolutions.map((solution, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full mb-4 mx-auto">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-navy">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {solution.description}
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
              Solving Aviation Industry Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Address the unique complexities of airline loyalty with purpose-built solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {industryInsights.map((insight, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-navy text-white p-2 rounded-lg">
                      {insight.icon}
                    </div>
                    <CardTitle className="text-lg text-navy">Challenge</CardTitle>
                  </div>
                  <CardDescription className="font-semibold text-gray-700 mb-4">
                    {insight.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-teal mb-2">Our Approach</div>
                  <p className="text-gray-600 leading-relaxed">
                    {insight.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program Types */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Airline Loyalty Program Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible program structures designed to meet diverse airline business models and customer segments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loyaltyTypes.map((type, index) => (
              <Card key={index} className="text-center border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white slide-in-mask">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full mb-4 mx-auto">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg text-navy">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Aviation-Specific Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive feature set tailored for the unique requirements of airline loyalty programs
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm slide-in-mask">
                  <CheckCircle className="w-5 h-5 text-teal mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Proven Aviation Results
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Measurable outcomes delivered for leading airlines worldwide, including India's largest carrier
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
              Your Airline Loyalty Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy design to program optimization, we guide airlines through every step
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Discovery", description: "Analyze customer segments, travel patterns, and competitive landscape to design optimal program structure" },
              { step: "02", title: "Platform Integration", description: "Seamlessly integrate with existing airline systems, PSS, and partner networks for unified operations" },
              { step: "03", title: "Program Launch", description: "Deploy comprehensive loyalty program with member migration, staff training, and multi-channel activation" },
              { step: "04", title: "Continuous Optimization", description: "Monitor performance metrics, optimize rewards, and enhance customer experiences through data insights" }
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
            Ready to Elevate Your Airline Loyalty Program?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the ranks of successful airlines leveraging our platform to drive customer engagement and business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
              Explore Airline Solutions
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AirlineLoyaltyPage;