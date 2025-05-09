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

export default function GlobalRealEstateAdvisory() {
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
          <source src="/global.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Global Real Estate Advisory</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Exclusive Access. Unmatched Opportunities. Private
                    Transactions.
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
          {" "}
          {/* changed max-w-3xl to max-w-7xl */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Global Real Estate Advisory
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mx-auto">
              At IPRIVE, we understand that for the world's elite, real estate
              is far more than an asset class — it's a statement of success, a
              store of legacy, and a foundation for global presence.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our Global Real Estate Advisory connects you to exclusive,
              off-market, and investment-grade properties across some of the
              world's most prestigious addresses. Whether you seek luxury
              residences, trophy assets, income-generating properties, or
              strategic investments, we offer privileged access to the finest
              opportunities, discreetly and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely aligned boxes with fixed height headings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Real Estate Services Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Each service box with guaranteed consistent alignment */}
              {[
                {
                  icon: <HomeIcon className="h-6 w-6 text-black" />,
                  title: "Prime Residential Investments",
                  desc: "Acquire luxury homes, penthouses, villas, and estates in the world's most desirable destinations — from London, Dubai, New York, Monaco, Singapore, to Mumbai.",
                },
                {
                  icon: <Building className="h-6 w-6 text-black" />,
                  title: "Commercial and Institutional-Grade Assets",
                  desc: "Invest in high-value commercial properties including office spaces, retail, hospitality, and mixed-use developments across global financial hubs.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-black" />,
                  title: "Lifestyle & Holiday Homes",
                  desc: "Own tranquil retreats in picturesque destinations — from beachfront villas in the Maldives to vineyard estates in Tuscany.",
                },
                {
                  icon: <Award className="h-6 w-6 text-black" />,
                  title: "Trophy & Landmark Properties",
                  desc: "Access heritage estates, landmark mansions, private islands, and historical properties that hold generational value.",
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-black" />,
                  title: "Portfolio Diversification & Advisory",
                  desc: "Structure your global real estate portfolio, balancing risk and return, aligned with your wealth, tax, and estate planning objectives.",
                },
                {
                  icon: <CreditCard className="h-6 w-6 text-black" />,
                  title: "Cross-Border Transaction Support",
                  desc: "Simplify complex international acquisitions with end-to-end support for seamless, tax-efficient, and confidential transactions.",
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
            Why Choose IPRIVE for Global Real Estate?
          </h2>

          <div className="space-y-4">
            {[
              "Privileged Access to Private, Off plan to Off-Market Listings",
              "Discreet, White-Glove Transaction Support",
              "Tax-Optimized Ownership Structures",
              "Real Estate Syndication for Larger Ticket Investments",
              "On-Ground Expertise in Key Global Markets",
              "Legacy Asset Curation and Portfolio Advisory",
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Let us open doors to the world's most remarkable addresses,
            exclusively for you.
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE, real estate isn't just about property — it's about
              legacy, lifestyle, and wealth strategy.
            </p>
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Explore opportunities with us at:{" "}
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
