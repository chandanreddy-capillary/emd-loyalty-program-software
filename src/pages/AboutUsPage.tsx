import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Globe, Award, TrendingUp, Heart, Shield, Zap, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutUsPage = () => {
  useScrollAnimation();

  const companyValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centric Innovation",
      description: "We believe in putting customers at the heart of everything we do, creating solutions that drive meaningful engagement and lasting relationships."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Reliability",
      description: "Built on enterprise-grade security and super high uptime, our AI-powered platform ensures your loyalty programs run smoothly at any scale."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Continuous Excellence",
      description: "We're committed to continuous innovation, always pushing boundaries to deliver cutting-edge loyalty solutions that exceed expectations."
    }
  ];

  const teamStats = [
    { number: "500+", label: "Global Team Members" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "390+", label: "Brands Powered" }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Started our journey with a vision to transform customer engagement through intelligent loyalty solutions."
    },
    {
      year: "2019",
      title: "First Major Enterprise Client",
      description: "Successfully deployed loyalty platform for Fortune 500 company, establishing our enterprise credentials."
    },
    {
      year: "2020",
      title: "AI Integration Launch",
      description: "Introduced AI-powered personalization and predictive analytics to enhance customer experiences."
    },
    {
      year: "2023",
      title: "1 Billion Members Milestone",
      description: "Reached the significant milestone of managing over 1 billion loyalty program members globally."
    },
    {
      year: "2025",
      title: "Next-Gen Platform",
      description: "Launched our latest platform with advanced CDP, omnichannel capabilities, and real-time analytics."
    }
  ];

  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/placeholder-ceo.jpg",
      bio: "15+ years leading technology companies with focus on customer experience and enterprise software solutions."
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder-cto.jpg",
      bio: "Former VP of Engineering at leading SaaS companies, expert in scalable cloud architectures and AI systems."
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Customer Officer",
      image: "/placeholder-cco.jpg",
      bio: "20+ years in customer success and loyalty strategy, helping Fortune 500 brands maximize customer lifetime value."
    },
    {
      name: "David Kumar",
      role: "Chief Product Officer",
      image: "/placeholder-cpo.jpg",
      bio: "Product visionary with expertise in enterprise software, user experience design, and loyalty program innovation."
    }
  ];

  const recognitions = [
    {
      title: "Best Loyalty Platform 2023",
      organization: "Customer Experience Awards",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Enterprise Software Leader",
      organization: "Tech Innovation Awards",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Top Workplace Culture",
      organization: "Industry Excellence Awards",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              About Our Company
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Pioneering the Future of
              <span className="text-teal-light block">Customer Loyalty</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              For over 15 years, we've been at the forefront of loyalty innovation, 
              helping global brands build meaningful relationships with their customers 
              through intelligent, data-driven loyalty solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To empower businesses worldwide with intelligent loyalty solutions that create 
                lasting customer relationships, drive sustainable growth, and deliver measurable 
                business value through innovation, data, and exceptional experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal mr-3" />
                  <span className="text-gray-700">Democratize enterprise-grade loyalty technology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal mr-3" />
                  <span className="text-gray-700">Enable data-driven customer engagement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal mr-3" />
                  <span className="text-gray-700">Foster innovation in customer experience</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder-mission.jpg"
                alt="Our Mission"
                className="w-full max-w-lg h-auto rounded-2xl shadow-lg hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-navy">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional loyalty solutions worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
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

      {/* Company Timeline */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our evolution as a leading loyalty platform provider
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} slide-in-mask`}>
                  <div className="flex-1 lg:pr-8">
                    <Card className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} border-2 hover:border-teal transition-all duration-300`}>
                      <CardHeader>
                        <div className="inline-block bg-teal text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
                          {milestone.year}
                        </div>
                        <CardTitle className="text-xl text-navy">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-teal rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 lg:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving our mission to revolutionize customer loyalty
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <Card key={index} className="text-center border hover:border-teal transition-all duration-300 hover:shadow-md slide-in-mask">
                <CardHeader>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg text-navy">{leader.name}</CardTitle>
                  <div className="text-teal font-medium text-sm">{leader.role}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {leader.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((award, index) => (
              <Card key={index} className="text-center border-2 hover:border-teal transition-all duration-300 hover:-translate-y-2 hover:shadow-lg slide-in-mask">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal text-white rounded-full mb-4 mx-auto">
                    {award.icon}
                  </div>
                  <CardTitle className="text-lg text-navy">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {award.organization}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our platform can transform your customer loyalty strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
              Explore Our Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;