import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";   // use react-router-dom for SPA routing

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", to: "/solutions" },
    { name: "Clients", to: "/clients" },
    { name: "About Us", to: "/about" },
  ];

  const industries = [
    { name: "Airline", to: "/industries/airline" },
    { name: "CPG", to: "/industries/cpg" },
    { name: "Conglomerates", to: "/industries/conglomerates" },
    { name: "Fuel Retail", to: "/industries/fuel-retail" },
    { name: "Hospitality", to: "/industries/hospitality" },
    { name: "Retail", to: "/industries/retail" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* ✅ Logo links to homepage */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-navy">
              Loyalty Program Software
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                className="text-gray-700 hover:text-navy"
              >
                {item.name}
              </Link>
            ))}

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-navy">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 py-2 w-48">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-2 px-4 pt-2 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block text-gray-700 py-2 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Industries as collapsible list in mobile */}
            <div>
              <p className="font-medium text-gray-700 mt-2">Industries</p>
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  to={industry.to}
                  className="block text-gray-600 pl-4 py-1 hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="block mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
