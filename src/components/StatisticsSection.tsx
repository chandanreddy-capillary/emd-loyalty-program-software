const StatisticsSection = () => {
  const statsRow1 = [
    { number: "1.2 Bn+", label: "Loyalty Members" },
    { number: "390+", label: "Brands" },
    { number: "100+", label: "Loyalty Programs" },
  ];

  const statsRow2 = [
    { number: "99.99%", label: "System Uptime" },
    { number: "60%", label: "Improved Customer Retention" },
    { number: "50%", label: "Increased Customer Satisfaction" },
  ];

  return (
    <section className="bg-gradient-section py-20">
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
                className="hover-lift p-6 bg-navy rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {statsRow2.map((stat, index) => (
              <div
                key={index}
                className="hover-lift p-6 bg-navy rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-300 font-medium">
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