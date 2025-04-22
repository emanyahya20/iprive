"use client";

import { Check } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* Hero Video Section - Mobile Optimized */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced overlay for better mobile contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                {/* Mobile-optimized typography */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Secure Transactions, Simplified</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Revolutionizing digital escrow services
                    <br className="hidden sm:block" />
                    with trust and transparency
                    <br className="hidden sm:block" />
                    at the core
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            About Us
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Escrowpay is India's first and largest digital escrow partner,
              providing secure transaction solutions for businesses of all
              sizes.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our platform combines cutting-edge technology with robust banking
              partnerships to deliver escrow services that are not just secure,
              but also simple and efficient.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With a decade of experience in the financial technology sector, we
              understand the unique challenges businesses face in securing their
              transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Impact Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: "Trusted by Leading Banks",
                content:
                  "India's top RBI regulated banks have enabled us to offer state-of-the-art escrow solutions.",
              },
              {
                title: "Thousands of Businesses",
                content:
                  "We serve thousands of businesses daily with tailor-made scalable escrow services.",
              },
              {
                title: "10 Years of Excellence",
                content:
                  "We have transformed how businesses in India approach secure transactions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image without container - just the frame */}
            <img
              src="/team/whyy.png"
              alt="Why Choose Escrowpay"
              className="lg:w-1/2 w-full h-auto object-cover rounded-lg shadow-md border border-gray-200"
            />

            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Why Choose Escrowpay
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Built for Businesses",
                    content:
                      "We make escrow services easy to use, no matter your business size or sector.",
                  },
                  {
                    title: "Proven Track Record",
                    content:
                      "With years of expertise and partnerships with leading banks.",
                  },
                  {
                    title: "Efficient & Transparent",
                    content:
                      "Ensuring funds are disbursed only when terms are met—quickly and transparently.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 bg-[#f9f7f4] p-1.5 sm:p-2 rounded-full mt-0.5 sm:mt-1">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-0.5 sm:mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
