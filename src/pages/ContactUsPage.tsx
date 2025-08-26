import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, Shield, CheckCircle, Star, Users, Globe, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LogoStrip from "@/components/LogoStrip";

const ContactUsPage = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    industry: "",
    country: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    "Retail & E-commerce",
    "Airlines & Travel",
    "Hospitality",
    "Banking & Financial Services",
    "Telecommunications",
    "Healthcare",
    "Automotive",
    "Consumer Goods (CPG)",
    "Insurance",
    "Other"
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", 
    "Australia", "India", "Singapore", "Japan", "Brazil", "Mexico", "Other"
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@loyaltysoftware.com",
      description: "Get a response within 24 hours",
      action: "mailto:hello@loyaltysoftware.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Business District, Suite 456",
      description: "New York, NY 10001",
      action: "#"
    }
  ];

  const regionalOffices = [
    {
      region: "North America",
      location: "New York, USA",
      email: "americas@loyaltysoftware.com",
      phone: "+1 (555) 123-4567"
    },
    {
      region: "Europe",
      location: "London, UK",
      email: "europe@loyaltysoftware.com",
      phone: "+44 20 7123 4567"
    },
    {
      region: "Asia Pacific",
      location: "Singapore",
      email: "apac@loyaltysoftware.com",
      phone: "+65 6123 4567"
    }
  ];


  const testimonials = [
    {
      quote: "The implementation was seamless and the results exceeded our expectations. Customer engagement increased by 45% within the first quarter.",
      author: "Sarah Mitchell",
      role: "VP of Customer Experience",
      company: "Global Retail Corp"
    },
    {
      quote: "Outstanding platform with exceptional support. The team was with us every step of the way, ensuring our loyalty program launched successfully.",
      author: "David Chen",
      role: "Director of Marketing",
      company: "Premium Airlines"
    }
  ];

  const faqs = [
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on complexity, but most enterprise deployments are completed within 8-16 weeks. We provide a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive managed services including 24/7 technical support, program optimization, analytics reporting, and regular platform updates. Our customer success team ensures your program continues to deliver results."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our platform is designed with API-first architecture and can integrate with most CRM, ERP, POS, and marketing automation systems. We conduct a technical assessment to ensure seamless integration."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Our clients typically see 25-60% improvement in customer retention, 20-35% increase in average order value, and significant growth in customer lifetime value. We provide detailed ROI projections during our consultation."
    },
    {
      question: "Is the platform secure and compliant?",
      answer: "Security is our top priority. We maintain enterprise-grade security standards, including SOC 2 compliance, GDPR compliance, and regular security audits. All data is encrypted in transit and at rest."
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (!formData.country) newErrors.country = "Please select a country";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thank you for your interest! We'll get back to you within 24 hours.");
      setFormData({
        firstName: "", lastName: "", email: "", company: "", 
        jobTitle: "", industry: "", country: "", phone: "", message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-teal py-20 lg:py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-6 bg-teal text-white border-teal-light">
              Let's Connect
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="text-teal-light block">Customer Loyalty?</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect with our loyalty experts to discover how our platform can drive 
              measurable growth for your business. Get a personalized consultation and 
              see why 390+ brands trust us with their customer relationships.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-12">
              <div className="flex items-center text-gray-200">
                <Clock className="w-5 h-5 mr-2" />
                <span>24-hour response time</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Shield className="w-5 h-5 mr-2" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center text-gray-200">
                <Users className="w-5 h-5 mr-2" />
                <span>Dedicated success team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardHeader className="bg-gray-50">
                  <CardTitle className="text-2xl text-navy">Get Your Free Consultation</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and our loyalty experts will contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                          placeholder="Smith"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                          placeholder="john.smith@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Company & Job Title */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                          placeholder="Acme Corporation"
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.jobTitle ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                          placeholder="VP of Marketing"
                        />
                        {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                      </div>
                    </div>

                    {/* Industry & Country */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.industry ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                        {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country *
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                            errors.country ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal focus:border-teal'
                          }`}
                        >
                          <option value="">Select your country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your loyalty program needs
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current loyalty challenges, goals, or specific requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting}
                        size="lg" 
                        className="bg-teal hover:bg-teal-light text-white px-12 py-4 text-lg w-full md:w-auto"
                      >
                        {isSubmitting ? "Submitting..." : "Get My Free Consultation"}
                      </Button>
                      <p className="text-xs text-gray-500 mt-3">
                        We respect your privacy. Your information will only be used to contact you about our services 
                        and will not be shared with third parties or used for other marketing purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our team of loyalty experts is here to help you transform your customer relationships. 
                  Choose the best way to connect with us.
                </p>
              </div>

              {/* Direct Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border hover:border-teal transition-all duration-300 hover:shadow-md">
                    <CardContent className="flex items-center p-6">
                      <div className="bg-teal text-white p-3 rounded-lg mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy text-lg">{method.title}</h3>
                        <p className="text-gray-800 font-medium">{method.details}</p>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Regional Offices */}
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">Regional Offices</h3>
                <div className="space-y-3">
                  {regionalOffices.map((office, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-navy">{office.region}</h4>
                          <p className="text-gray-600 text-sm">{office.location}</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          <p>{office.email}</p>
                          <p>{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos & Trust */}
      <section className="py-20 bg-gray-50 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Trusted by Leading Brands Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join 390+ global brands who trust us with their customer loyalty
            </p>
          </div>
          
          {/* Client Logos */}
          <div>
            <LogoStrip />
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-teal transition-all duration-300 hover:shadow-md">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-navy">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-teal text-sm font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our loyalty platform and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-xl px-6 border-none data-[state=open]:bg-gray-100 data-[state=open]:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="text-lg font-semibold text-navy pr-4 group-data-[state=open]:text-teal transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Loyalty Transformation Today
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Don't let another day pass without optimizing your customer relationships. 
            Our experts are ready to show you how our platform can drive measurable results for your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-teal w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-200 text-sm">No commitment required</p>
            </div>
            <div className="text-center">
              <div className="bg-teal w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Custom Demo</h3>
              <p className="text-gray-200 text-sm">Tailored to your industry</p>
            </div>
            <div className="text-center">
              <div className="bg-teal w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">ROI Assessment</h3>
              <p className="text-gray-200 text-sm">Projected business impact</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal hover:bg-teal-light text-white px-8 py-4 text-lg">
              Schedule My Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg">
              Download Platform Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;