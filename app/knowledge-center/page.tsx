"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function KnowledgeCenter() {
  return (
    <main className="bg-white">
      {/* Hero Video Section */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/kc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Knowledge Center</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Insights into emerging investment opportunities and wealth
                    management
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Knowledge Center
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE, we believe that knowledge empowers better decisions.
              Our Knowledge Centre is designed as a world-class resource hub,
              bringing you insights into emerging investment opportunities,
              global wealth trends, regulatory updates, and strategies for
              multi-generational wealth preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Our Areas of Focus
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We regularly publish thought leadership articles, whitepapers, and
              expert perspectives to help our clients stay ahead in a complex
              and evolving world.
            </p>

            <div className="space-y-4">
              {[
                "Global Real Estate Market Insights: Explore trends, opportunities, and analysis of real estate markets around the world to inform your investment decisions.",
                "Private Investment Trends: Discover emerging opportunities in private equity, venture capital, and alternative investments across various sectors and regions.",
                "Legacy and Estate Planning: Learn strategies for preserving and transferring wealth across generations while navigating complex legal and tax considerations.",
                "Global Mobility and Citizenship: Stay informed about residence and citizenship options, international tax planning, and strategies for global families.",
                "Risk Management and Wealth Structuring: Understand approaches to protecting your assets and optimizing your wealth structure in changing regulatory environments.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 bg-[#FDF8F0] p-1.5 sm:p-2 rounded-full mt-0.5 sm:mt-1">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Shaping the Future of Wealth
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE, we are dedicated to providing comprehensive insights
              and analysis to help you navigate the complexities of wealth
              management in an ever-changing global landscape.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              For a deeper dive into our vision of shaping the future of wealth,
              explore the Trustmore Group, where you'll find additional
              resources and expertise to support your financial journey.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <Link
                href="https://itrustmore.com/knowledge-center"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the Trustmore Group
              </Link>{" "}
              to discover more about our approach to wealth management,
              investment strategies, and our commitment to helping you secure
              your financial legacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
