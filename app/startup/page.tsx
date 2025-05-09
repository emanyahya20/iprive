"use client";

import Link from "next/link";

import {
  Check,
  Building,
  Home as HomeIcon,
  Globe,
  BarChart2,
  Award,
  CreditCard,
} from "lucide-react";

export default function StartupVentureCapitalAdvisory() {
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
          <source src="/startup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">
                    Startup & Venture Capital Investment Advisory
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Invest Early. Lead Boldly. Shape Tomorrow.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Startup & Venture Capital Investment Advisory
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE Global Private Wealth, we recognize that the world's
              most discerning investors don't just chase returns — they create
              legacies. Our Startup & Venture Capital Investment Advisory opens
              exclusive doors for HNWIs, family offices, corporate boards, and
              private investment syndicates to access carefully curated,
              high-growth opportunities in India and global innovation markets.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Through our established investment alliances, fund partnerships,
              and private deal networks, we empower clients to diversify into
              alternative asset classes that offer accelerated growth, long-term
              value creation, and a voice in shaping the industries of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely aligned boxes with fixed height headings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Key Capabilities Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Each service box with guaranteed consistent alignment */}
              {[
                {
                  icon: <HomeIcon className="h-6 w-6 text-black" />,
                  title: "Curated Startup Deal Flow",
                  desc: "Access a handpicked portfolio of early-stage, growth-stage, and pre-IPO ventures across sectors such as Fintech, Healthtech, AI, SaaS, Clean Energy, and Consumer Brands — vetted for scalability, innovation, and investment readiness.",
                },
                {
                  icon: <Building className="h-6 w-6 text-black" />,
                  title: "Venture Capital Fund Access",
                  desc: "Participate in exclusive, globally managed venture funds and alternative investment vehicles through our partner network, offering exposure to high-potential startup ecosystems in Silicon Valley, Singapore, London, Dubai, and Mumbai.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-black" />,
                  title: "Private Syndication & Co-Investment Models",
                  desc: "Collaborate with other UHNW investors and family offices through exclusive private syndication platforms and co-investment opportunities, allowing shared expertise, reduced risk, and enhanced returns.",
                },
                {
                  icon: <Award className="h-6 w-6 text-black" />,
                  title: "Portfolio Structuring & Exit Planning",
                  desc: "Receive comprehensive investment structuring, risk management, and exit strategy planning, including secondary sales, strategic buyouts, and IPO preparation — ensuring liquidity options and maximizing capital appreciation.",
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-black" />,
                  title: "Startup Due Diligence & Valuation Support",
                  desc: "Benefit from in-depth financial, legal, and operational due diligence services powered by our proprietary evaluation models and partnerships with global legal, compliance, and valuation experts.",
                },
              ].map((service, index) => (
                <div key={index} className="p-4 bg-[#f9f7f4] rounded-lg h-full">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-0">{service.icon}</div>
                    <div className="ml-3 flex-1">
                      <div className="h-16 flex items-start">
                        <h3 className="text-lg font-medium text-gray-800">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-800 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - With properly aligned checkmarks */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Why Choose IPRIVE for Startup Investments?
          </h2>

          <div className="space-y-4">
            {[
              "25-Year Legacy of Private Investment Excellence under Trustmore Group",
              "Global Reach with Local Access — India, UAE, Singapore, UK, US",
              "Exclusive, Non-Public Investment Pipelines",
              "End-to-End Structuring, Due Diligence, and Advisory Services",
              "Strong Focus on Aligned, Impactful, and High-Growth Ventures",
              "Dedicated Private Investment Desk for Families, Boards & HNWIs",
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-gray-900" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 ml-3">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-relaxed mb-8">
            Because the next unicorn, market disruptor,{" "}
            <br className="hidden sm:inline" />
            or future industry leader is being built today.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Whether you're a seasoned private investor, a forward-thinking board
            member, or a family office visionary, IPRIVE Global ensures you're
            not just participating in the future —{" "}
            <span className="font-semibold">you're shaping it</span>.
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Start your Venture Capital journey:{" "}
              <Link
                href="mailto:iprive@itrustmore.com"
                className="text-blue-600 hover:underline"
              >
                iprive@itrustmore.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
