import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "#solutions" },
    { name: "Clients", href: "#clients" },
    { name: "About Us", href: "#about" },
  ];

  const industries = [
    "Airline",
    "CPG", 
    "Conglomerates",
    "Fuel Retail",
    "Hospitality",
    "Retail"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-navy">
              Loyalty Program Software
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#solutions"
              className="nav-link font-medium"
            >
              Solutions
            </a>
            <div className="flex items-center space-x-12">
              <a
                href="#clients"
                className="nav-link font-medium"
              >
                Clients
              </a>
              <a
                href="#about"
                className="nav-link font-medium"
              >
                About Us
              </a>
              <div className="relative group">
                <span className="nav-link font-medium flex items-center gap-1 cursor-pointer">
                  Industries
                  <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {industries.map((industry) => (
                    <a
                      key={industry}
                      href="#industries"
                      className="block px-4 py-3 text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {industry}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-navy transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-navy transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <h4 className="font-semibold text-gray-800 mb-2">Industries</h4>
                {industries.map((industry) => (
                  <a
                    key={industry}
                    href="#industries"
                    className="block px-3 py-2 text-gray-600 hover:text-navy transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry}
                  </a>
                ))}
              </div>
              <div className="px-3 py-2">
                <Button className="btn-hero w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;