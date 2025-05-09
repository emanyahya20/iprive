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

export default function HighValuePrivateInvestments() {
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
          <source src="/private.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">High-Value Private Investments</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Unparalleled Access to Private Markets,
                    <br />
                    Beyond the Ordinary.
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
            High-Value Private Investments
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE, we believe that true wealth creation lies in
              opportunities that are rarely public, seldom advertised, and
              accessible only to a trusted circle.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our High-Value Private Investments division curates exclusive,
              invitation-only opportunities across global private markets —
              allowing our clients to participate in high-growth, high-return
              ventures beyond conventional public investments. We serve an elite
              clientele of HNIs, UHNIs, family offices, and institutional
              investors looking for capital preservation, strategic growth, and
              long-term wealth enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely aligned boxes with fixed height headings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Private Investment Offerings Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Each service box with guaranteed consistent alignment */}
              {[
                {
                  icon: <HomeIcon className="h-6 w-6 text-black" />,
                  title: "Pre-IPO & Private Equity Deals",
                  desc: "Gain early access to high-potential private companies before they hit public markets. From technology innovators, consumer brands, to emerging market disruptors, we identify strategic opportunities with clear exit strategies, robust governance, and proven leadership.",
                },
                {
                  icon: <Building className="h-6 w-6 text-black" />,
                  title: "Global Startup & Venture Capital Syndicates",
                  desc: "Participate in carefully vetted, high-growth early-stage and growth-stage startups across sectors like fintech, healthtech, AI, sustainable infrastructure, and consumer tech — alongside leading VCs and family offices.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-black" />,
                  title: "Alternative Assets",
                  desc: "Diversify into private debt, structured credit, income-yielding assets, luxury collectibles, art funds, infrastructure projects, and private REITs globally. These carefully structured opportunities are designed for portfolio stability, yield, and capital appreciation.",
                },
                {
                  icon: <Award className="h-6 w-6 text-black" />,
                  title: "Real Estate-Backed Investments",
                  desc: "Invest in development projects, rental income portfolios, and luxury real estate funds globally. Secure and profitable, these assets offer tangible value along with steady returns.",
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-black" />,
                  title: "Impact & ESG-Focused Investments",
                  desc: "Align wealth with purpose. We bring opportunities in sustainable, socially impactful, and ESG-compliant ventures, allowing clients to achieve responsible investing goals without compromising on returns.",
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
            Why Choose IPRIVE for Private Investments?
          </h2>

          <div className="space-y-4">
            {[
              "Exclusive, Private-Placement Opportunities",
              "Global Access with Local Due Diligence",
              "Institutional-Grade Deal Structuring & Governance",
              "Risk-Optimized, Diversified Investment Strategies",
              "Co-Investment Options with Leading Global Funds",
              "Absolute Confidentiality, White-Glove Handling",
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
            Legacy of Trust, Future of Private Wealth.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            For over 25 years, Trustmore Group has built a reputation for
            integrity, discretion, and performance-driven advisory. At IPRIVE,
            we extend this legacy to the private investment space — connecting
            you to a curated world of opportunities where capital meets
            credibility.
          </p>
          <div className="space-y-4 sm:space-y-6 mt-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Whether you seek growth capital investments, structured private
              deals, or niche alternative assets, our team ensures every
              opportunity is thoroughly screened, strategically aligned, and
              tailored to your wealth strategy.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Let us unlock exclusive private markets for you, globally.
              <br className="hidden md:inline" />
              Discover private opportunities at:{" "}
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
