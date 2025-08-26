import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, Globe, Award, CheckCircle, ArrowRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClientsPage = () => {
  useScrollAnimation();

  const clientStats = [
    { number: "390+", label: "Global Brands" },
    { number: "1.2B+", label: "Loyalty Members" },
    { number: "50+", label: "Countries" },
    { number: "15+", label: "Industries" }
  ];

  const industries = [
    {
      name: "Airlines & Travel",
      icon: "✈️",
      clientCount: "45+ clients",
      description: "Leading airlines transforming frequent flyer experiences"
    },
    {
      name: "Retail & E-commerce",
      icon: "🛍️",
      clientCount: "120+ clients",
      description: "Global retailers driving customer retention and growth"
    },
    {
      name: "Hospitality",
      icon: "🏨",
      clientCount: "65+ clients",
      description: "Hotel chains and resorts enhancing guest loyalty"
    },
    {
      name: "Banking & Finance",
      icon: "🏦",
      clientCount: "35+ clients",
      description: "Financial institutions building stronger customer relationships"
    },
    {
      name: "Telecommunications",
      icon: "📱",
      clientCount: "28+ clients",
      description: "Telecom providers reducing churn and increasing ARPU"
    },
    {
      name: "Consumer Goods",
      icon: "📦",
      clientCount: "52+ clients",
      description: "CPG brands connecting directly with end consumers"
    }
  ];

  const featuredClients = [
    {
      name: "GlobalAir",
      industry: "Airlines",
      logo: "/placeholder-logo-globalair.png",
      description: "Leading international airline with 50M+ frequent flyers",
      results: ["45% increase in member engagement", "30% boost in ancillary revenue", "25% improvement in customer satisfaction"]
    },
    {
      name: "MegaRetail",
      industry: "Retail",
      logo: "/placeholder-logo-megaretail.png",
      description: "Fortune 500 retail chain with 2,000+ locations globally",
      results: ["60% growth in repeat purchases", "35% increase in average order value", "50% improvement in customer retention"]
    },
    {
      name: "PremiumHotels",
      industry: "Hospitality",
      logo: "/placeholder-logo-premiumhotels.png",
      description: "Luxury hotel group operating across 40+ countries",
      results: ["40% increase in direct bookings", "55% improvement in guest satisfaction", "30% growth in lifetime value"]
    }
  ];

  const testimonials = [
    {
      quote: "The platform transformed our customer engagement strategy. We've seen unprecedented growth in loyalty program participation and customer lifetime value.",
      author: "Sarah Johnson",
      role: "VP of Customer Experience",
      company: "TechCorp International",
      image: "/placeholder-testimonial-1.jpg",
      companyLogo: "/placeholder-logo-techcorp.png"
    },
    {
      quote: "Implementation was seamless, and the results speak for themselves. Our customer retention rates have never been higher.",
      author: "Michael Chen",
      role: "Director of Marketing",
      company: "Global Retail Solutions",
      image: "/placeholder-testimonial-2.jpg",
      companyLogo: "/placeholder-logo-grs.png"
    },
    {
      quote: "The AI-powered insights have revolutionized how we understand and engage with our customers. It's been a game-changer for our business.",
      author: "Emily Rodriguez",
      role: "Chief Marketing Officer",
      company: "Innovation Brands",
      image: "/placeholder-testimonial-3.jpg",
      companyLogo: "/placeholder-logo-innovation.png"
    },
    {
      quote: "Outstanding support team and powerful platform features. Our loyalty program has become a key competitive advantage.",
      author: "David Kumar",
      role: "Customer Success Director",
      company: "Market Leaders Inc",
      image: "/placeholder-testimonial-4.jpg",
      companyLogo: "/placeholder-logo-leaders.png"
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer Increases Customer Retention by 65%",
      industry: "Retail",
      challenge: "High customer acquisition costs and low repeat purchase rates",
      solution: "Implemented tiered loyalty program with personalized rewards",
      results: "65% increase in customer retention, 40% boost in CLV",
      image: "/placeholder-case-study-1.jpg",
      clientLogo: "/placeholder-client-fashion.png"
    },
    {
      title: "Regional Airline Transforms Frequent Flyer Experience",
      industry: "Airlines",
      challenge: "Outdated loyalty program with limited engagement",
      solution: "Modern omnichannel program with dynamic rewards",
      results: "50% increase in program enrollment, 35% growth in ancillary revenue",
      image: "/placeholder-case-study-2.jpg",
      clientLogo: "/placeholder-client-airline.png"
    },
    {
      title: "Hotel Chain Drives 45% Increase in Direct Bookings",
      industry: "Hospitality",
      challenge: "Heavy reliance on OTAs and low direct booking rates",
      solution: "Experience-based loyalty program with exclusive perks",
      results: "45% increase in direct bookings, 30% improvement in guest satisfaction",
      image: "/placeholder-case-study-3.jpg",
      clientLogo: "/placeholder-client-hotel.png"
    }
  ];

  const clientLogos = [
    { name: "AirlineOne", logo: "/placeholder-logo-1.png" },
    { name: "RetailGiant", logo: "/placeholder-logo-2.png" },
    { name: "HotelChain", logo: "/placeholder-logo-3.png" },
    { name: "BankPlus", logo: "/placeholder-logo-4.png" },
    { name: "TelecomMax", logo: "/placeholder-logo-5.png" },
    { name: "FashionBrand", logo: "/placeholder-logo-6.png" },
    { name: "FoodService", logo: "/placeholder-logo-7.png" },
    { name: "TechCorp", logo: "/placeholder-logo-8.png" },
    { name: "HealthCare", logo: "/placeholder-logo-9.png" },
    { name: "AutoGroup", logo: "/placeholder-logo-10.png" },
    { name: "InsuranceCo", logo: "/placeholder-logo-11.png" },
    { name: "EnergyPlus", logo: "/placeholder-logo-12.png" }
  ];

  const successMetrics = [
    { metric: "Average 45%", description: "Increase in Customer Retention" },
    { metric: "Average 35%", description: "Growth in Customer Lifetime Value" },
    { metric: "Average 50%", description: "Improvement in Engagement Rates" },
    { metric: "Average 25%", description: "Boost in Revenue per Customer" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              Our Clients
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted by Leading Brands
              <span className="text-teal-light block">Around the World</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              From Fortune 500 companies to fast-growing enterprises, we partner with 
              industry leaders across the globe to transform their customer loyalty strategies 
              and drive measurable business growth.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {clientStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-teal-light mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Wall */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Powering Success for Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the ranks of successful companies leveraging our platform to build stronger customer relationships
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform adapts to the unique needs of various industries, delivering tailored loyalty solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl text-navy">{industry.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {industry.clientCount}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Success Stories */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Featured Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients across different industries and company sizes
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredClients.map((client, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader className="text-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 w-auto mx-auto mb-4"
                  />
                  <CardTitle className="text-xl text-navy">{client.name}</CardTitle>
                  <Badge className="bg-teal text-white">{client.industry}</Badge>
                  <CardDescription className="text-gray-600 leading-relaxed mt-4">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-navy">Key Results:</h4>
                    {client.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-teal mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from the leaders who have transformed their businesses with our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <Quote className="w-8 h-8 text-teal flex-shrink-0 mr-3" />
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-navy">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-teal text-sm font-medium">{testimonial.company}</div>
                    </div>
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="h-8 w-auto opacity-70"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              In-Depth Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed success stories showcasing challenges, solutions, and measurable outcomes
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-teal transition-all duration-300 hover:shadow-lg slide-in-mask group">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-navy text-white">{study.industry}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-navy group-hover:text-teal transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Results:</h4>
                    <p className="text-teal text-sm font-medium">{study.results}</p>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Proven Results Across All Clients
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Consistent performance improvements delivered across industries and company sizes
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center slide-in-mask">
                <div className="text-3xl lg:text-4xl font-bold text-teal-light mb-2">
                  {metric.metric}
                </div>
                <div className="text-sm lg:text-base text-gray-200 font-medium">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Clients CTA */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our platform can help your business achieve similar results and 
            transform your customer relationships for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
              Schedule Your Demo
            </Button>
            <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientsPage;