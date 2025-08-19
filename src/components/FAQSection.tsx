import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is loyalty program software?",
      answer: "Loyalty program software is a comprehensive platform that helps businesses create, manage, and optimize customer loyalty programs. It includes features like points management, tier systems, rewards tracking, customer segmentation, and analytics to increase customer retention and drive repeat purchases."
    },
    {
      question: "How can loyalty program software improve customer retention?",
      answer: "Our loyalty program software improves customer retention by creating personalized experiences that reward customers for their engagement. Through points, tiers, and targeted campaigns, customers feel valued and are incentivized to continue purchasing. Our clients typically see 40-60% improvement in customer retention rates."
    },
    {
      question: "Is this loyalty platform suitable for my industry?",
      answer: "Yes, our loyalty platform is designed to be flexible and adaptable across various industries including retail, e-commerce, hospitality, financial services, healthcare, and more. We provide industry-specific templates and configurations to ensure the program aligns with your business model and customer expectations."
    },
    {
      question: "What's the difference between a loyalty program and a rewards platform?",
      answer: "While often used interchangeably, a loyalty program is a broader strategy that includes emotional engagement and relationship building, while a rewards platform typically focuses on transactional benefits. Our solution combines both - providing robust rewards functionality within a comprehensive loyalty strategy that builds lasting customer relationships."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our loyalty program software
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-navy pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to help.
          </p>
          <div className="flex justify-center">
            <button className="btn-hero">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;