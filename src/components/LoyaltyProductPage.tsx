import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, BarChart3, Zap, Shield, Globe, Cpu, Heart, TrendingUp, Star, Award, Gift, Gamepad2 } from "lucide-react";

const LoyaltyProductPage = () => {
  const [activeTab, setActiveTab] = useState("features");

  const keyBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Customer Retention",
      description: "Drive up to 60% improvement in customer retention with intelligent loyalty strategies and personalized engagement."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Boost Revenue Growth",
      description: "Increase average order value by 35% and drive repeat purchases through strategic reward mechanisms."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enhance Customer Lifetime Value",
      description: "Maximize CLV with data-driven insights and predictive analytics that identify high-value customer segments."
    }
  ];

  const coreFeatures = [
    {
      category: "Program Management",
      icon: <Target className="w-6 h-6" />,
      features: [
        "Flexible Points & Tier Systems",
        "Multi-brand Program Support",
        "Coalition Loyalty Programs",
        "Channel Partner Programs",
        "Advanced Rule Engine"
      ]
    },
    {
      category: "Customer Engagement",
      icon: <Heart className="w-6 h-6" />,
      features: [
        "Gamification & Challenges",
        "Personalized Rewards",
        "Social Media Integration",
        "Event-based Triggers",
        "Referral Management"
      ]
    },
    {
      category: "Analytics & AI",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        "Predictive Customer Analytics",
        "AI-powered Recommendations",
        "Real-time Dashboards",
        "Customer Segmentation",
        "ROI Measurement Tools"
      ]
    },
    {
      category: "Integration & Security",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Omnichannel Integration",
        "API-first Architecture",
        "Enterprise Security",
        "GDPR Compliance",
        "Cloud-native Platform"
      ]
    }
  ];

  const loyaltyTypes = [
    {
      title: "Points-based Loyalty",
      description: "Traditional earn-and-burn programs with flexible point systems and redemption options.",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Tiered Loyalty",
      description: "Status-based programs that reward customers with increasing benefits as they advance through tiers.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Experiential Loyalty",
      description: "Create exclusive experience-based programs that go beyond traditional rewards.",
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Gamified Loyalty",
      description: "Engage customers through challenges, leaderboards, and interactive gaming elements.",
      icon: <Gamepad2 className="w-8 h-8" />
    }
  ];

  const capabilities = [
    {
      title: "Intelligent Loyalty Management",
      description: "AI-powered platform that delivers comprehensive loyalty solutions across all customer touchpoints.",
      features: ["Predictive Analytics", "Dynamic Personalization", "Real-time Decision Making"]
    },
    {
      title: "Omnichannel Engagement",
      description: "Seamless loyalty experiences across online, in-store, mobile, and social media channels.",
      features: ["Cross-channel Consistency", "Unified Customer Profiles", "Real-time Synchronization"]
    },
    {
      title: "Advanced Customer Data Platform",
      description: "360-degree customer view enabling focused targeting and relevant personalization.",
      features: ["Unified Customer Data", "Behavioral Insights", "Predictive Modeling"]
    }
  ];

  const stats = [
    { number: "40%+", label: "Average Increase in Customer Retention" },
    { number: "35%+", label: "Boost in Average Order Value" },
    { number: "60%+", label: "Improvement in Customer Engagement" },
    { number: "25%+", label: "Increase in Customer Lifetime Value" }
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              Enterprise-Grade Loyalty Platform
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-teal-light">Loyalty Program Software</span><br />
              <span className="text-3xl lg:text-4xl font-bold text-white-800">That Drives Business Growth</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform customer relationships with AI-powered loyalty solutions. 
              Design industry-shaping programs, integrate seamlessly, and deliver 
              hyper-personalized experiences at enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Why Choose Our Loyalty Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smarter predictions. Better decisions. Actionable insights that drive measurable business outcomes.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full mb-4 mx-auto">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl text-navy">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Comprehensive Loyalty Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, launch, and optimize world-class loyalty programs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-teal text-white p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-navy">{feature.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Loyalty Program Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from multiple program structures designed to meet your specific business goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loyaltyTypes.map((type, index) => (
              <Card key={index} className="text-center border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-white">
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

      {/* Platform Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise scale with cutting-edge technology and proven methodologies
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-navy mb-2">{capability.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto">
            Our loyalty platform delivers measurable business impact for enterprise clients
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, our platform simplifies loyalty program management
            </p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Design", description: "Define program objectives and design customer journey maps" },
              { step: "02", title: "Configuration", description: "Set up rules, rewards, tiers, and integration parameters" },
              { step: "03", title: "Launch & Engage", description: "Go live with personalized campaigns and customer communications" },
              { step: "04", title: "Optimize & Scale", description: "Monitor performance and optimize based on data insights" }
            ].map((step, index) => (
              <div key={index} className="text-center">
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

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Ready to Transform Your Customer Loyalty?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our experts to discuss your loyalty program requirements
            </p>
          </div>
          
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center bg-gray-50">
              <CardTitle className="text-2xl text-navy">Get In Touch</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and our team will get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                  />
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your loyalty program requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors resize-none"
                  />
                </div>
                
                <div className="text-center">
                  <Button onClick={handleSubmit} size="lg" className="bg-teal hover:bg-teal-light text-white px-12 py-4 text-lg">
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LoyaltyProductPage;