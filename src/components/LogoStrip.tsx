const LogoStrip = () => {
  const logos = [
    { name: "Domino's", color: "#0078D4" },
    { name: "Dell", color: "#007DB8" },
    { name: "ASICS", color: "#0066CC" },
    { name: "Shell", color: "#FFD520" },
    { name: "Indigo", color: "#5C2D91" },
    { name: "Hertz", color: "#FFCC00" },
    { name: "Royal Caribbean", color: "#0066B2" },
    { name: "PUMA", color: "#000000" },
    { name: "Jotun", color: "#E30613" },
    { name: "Santander", color: "#EC0000" },
    { name: "Frontier", color: "#009639" },
    { name: "TD Bank", color: "#00B04F" },
    { name: "Tata Digital", color: "#1F497D" }
  ];

  return (
    <section className="bg-white py-12 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-medium mb-8">
          Trusted by leading brands worldwide
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-pulse">
            {/* First set of logos */}
            <div className="flex space-x-16 min-w-full justify-around items-center logo-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    className="font-bold text-xl px-4 py-2 rounded"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless scrolling */}
            <div className="flex space-x-16 min-w-full justify-around items-center logo-scroll">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    className="font-bold text-xl px-4 py-2 rounded"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;