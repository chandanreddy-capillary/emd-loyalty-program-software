import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: testimonial1,
      text: "The loyalty program software has transformed our customer retention strategy. We've seen a 45% increase in repeat purchases and our customers are more engaged than ever.",
      name: "Sarah Johnson",
      company: "VP of Marketing, TechCorp"
    },
    {
      id: 2,
      image: testimonial2,
      text: "Implementation was seamless and the results were immediate. The platform's flexibility allows us to create personalized experiences that our customers love.",
      name: "Michael Chen",
      company: "Director of Customer Experience, RetailPlus"
    },
    {
      id: 3,
      image: testimonial3,
      text: "Outstanding customer support and powerful analytics. The insights we get help us make data-driven decisions that improve our customer relationships continuously.",
      name: "Emily Rodriguez",
      company: "Customer Success Manager, GlobalBrand"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-section py-20 fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by enterprise brands worldwide
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center hover-lift">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-navy text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-teal scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;