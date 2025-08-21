const StatisticsSection = () => {
  const statsRow1 = [
    { number: "30+", label: "Countries" },
    { number: "50+", label: "Loyalty Programs" },
    { number: "150+", label: "Global Brands" },
  ];

  const statsRow2 = [
    { number: "500M+", label: "Loyalty Members" },
    { number: "3B+", label: "Transactions" },
  ];

  return (
    <section className="bg-gradient-section py-20 fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
          Pioneers of Managed SaaS
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-16">
          Best-in-class loyalty program software with expert services
        </h2>

        <div className="space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {statsRow1.map((stat, index) => (
              <div
                key={index}
                className="slide-in-mask p-6 bg-white border-2 border-navy rounded-xl shadow-md hover:bg-navy hover:border-white hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform cursor-pointer group delay-1"
              >
                <div className="text-3xl lg:text-4xl font-bold text-navy group-hover:text-white mb-2 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 group-hover:text-gray-200 font-medium transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {statsRow2.map((stat, index) => (
              <div
                key={index}
                className="slide-in-mask p-6 bg-white border-2 border-navy rounded-xl shadow-md hover:bg-navy hover:border-white hover:text-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 transform cursor-pointer group delay-4"
              >
                <div className="text-3xl lg:text-4xl font-bold text-navy group-hover:text-white mb-2 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 group-hover:text-gray-200 font-medium transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;