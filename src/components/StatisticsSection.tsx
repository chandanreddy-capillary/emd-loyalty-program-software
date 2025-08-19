const StatisticsSection = () => {
  const stats = [
    { number: "1 Bn+", label: "Loyalty Members" },
    { number: "400+", label: "Brands" },
    { number: "500+", label: "Loyalty Programs" },
    { number: "600Bn+", label: "Points Transacted" },
    { number: "99.99%", label: "System Uptime" },
    { number: "60%", label: "Improved Customer Retention" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="hover-lift p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-bold text-navy mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;