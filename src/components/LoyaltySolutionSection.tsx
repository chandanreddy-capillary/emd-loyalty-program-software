import loyaltyGraphic from "@/assets/loyalty-graphic.png";

const LoyaltySolutionSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Loyalty Program Software
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Design and manage flexible loyalty programs with points, tiers,
              and gamification to drive retention and repeat purchases at scale.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal text-white rounded-lg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Points & Tiers
                </h3>
                <p className="text-gray-600">
                  Flexible point systems and tier structures that adapt to your business model
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal text-white rounded-lg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Analytics
                </h3>
                <p className="text-gray-600">
                  Deep insights into customer behavior and program performance
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal text-white rounded-lg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Personalization
                </h3>
                <p className="text-gray-600">
                  AI-powered recommendations and personalized experiences
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal text-white rounded-lg mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Integration
                </h3>
                <p className="text-gray-600">
                  Seamless integration with your existing systems and platforms
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={loyaltyGraphic}
              alt="Loyalty Program Management System"
              className="w-full max-w-lg h-auto hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySolutionSection;