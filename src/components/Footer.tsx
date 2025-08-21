import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    "Solutions": [
      { name: "Loyalty Management", path: "/solutions" },
      { name: "Nudge Framework", path: "/solutions" },
      { name: "LDS Framework", path: "/solutions" },
      { name: "CDP & LPM", path: "/solutions" },
      { name: "Actionable AI", path: "/solutions" },
    ],
    "Industries": [
      { name: "Airline", path: "/industries/airline" },
      { name: "CPG", path: "/industries/cpg" },
      { name: "Conglomerates", path: "/industries/conglomerates" },
      { name: "Fuel Retail", path: "/industries/fuel-retail" },
      { name: "Hospitality", path: "/industries/hospitality" },
      { name: "Retail", path: "/industries/retail" },
    ],
    "Clients": [
      { name: "Case Studies", path: "/notfound" },
      { name: "Success Stories", path: "/notfound" },
      { name: "Testimonials", path: "/notfound" },
    ],
    "About Us": [
      { name: "Our Story", path: "/about" },
      { name: "Partners", path: "/notfound" },
    ],
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/">Loyalty Program Software</Link>
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
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
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
              <Link to="/notfound" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/notfound" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/notfound" className="text-gray-300 hover:text-teal transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
