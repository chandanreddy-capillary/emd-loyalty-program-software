

const Footer = () => {
  const footerLinks = {
    "Solutions": [
      "Loyalty Management",
      "Nudge Framework", 
      "LDS Framework",
      "CDP & LPM",
      "Actionable AI"
    ],
    "Industries": [
      "Airline",
      "CPG", 
      "Conglomerates",
      "Fuel Retail",
      "Hospitality",
      "Retail"
    ],
    "Clients": [
      "Case Studies",
      "Success Stories",
      "Testimonials"
    ],
    "About Us": [
      "Our Story",
      "Partners"
    ]
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Loyalty Program Software
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enterprise-grade loyalty platform trusted by leading brands worldwide.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-teal transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 lg:mb-0">
              © 2025 Loyalty Program Software. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;