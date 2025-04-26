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

export default function JumboInsuranceWealthStructuring() {
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
          <source src="/jumbo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">
                    Legacy Planning & Wealth Structuring
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Protecting Legacies. Preserving Wealth.
                    <br />
                    Powering Global Prosperity.
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
            Legacy Planning & Wealth Structuring
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE Global Private Wealth, we understand that for
              high-net-worth individuals (HNWIs), ultra-high-net-worth
              individuals (UHNWIs), business owners, and family offices —
              protecting wealth is as critical as growing it. Our Legacy
              Planning & Wealth Structuring solutions are meticulously crafted
              to safeguard multi-million and billion-dollar portfolios, ensure
              seamless succession, and deliver tax-efficient financial security
              across generations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely aligned boxes with fixed height headings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Key Solutions & Offerings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Each service box with guaranteed consistent alignment */}
              {[
                {
                  icon: <HomeIcon className="h-6 w-6 text-black" />,
                  title: "High-Value Life Insurance & Keyman Cover",
                  desc: "Multi-crore and multi-million dollar life cover plans for individuals, promoters, business owners, and board members Keyman Protection Insurance securing the financial stability of your enterprise in case of unexpected leadership loss Bespoke plans with global underwriting, covering health, lifestyle, travel, and high-risk asset ownership.",
                },
                {
                  icon: <Building className="h-6 w-6 text-black" />,
                  title: "Succession & Legacy Structuring",
                  desc: "Creation of private trusts, family constitutions, and international holding structures to ensure seamless intergenerational wealth transfer Structuring of assets to mitigate estate taxes, inheritance complications, and cross-border legal exposure Wealth continuity planning tailored for promoters, industrialists, and HNW families.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-black" />,
                  title: "Global Wealth Preservation Vehicles",
                  desc: "Access to high-value insurance wrappers combined with investment solutions across asset classes — real estate, equities, debt, alternatives Structuring of wealth in tax-neutral jurisdictions, ensuring legal and regulatory alignment Liquidity solutions for estate tax coverage, succession payouts, and planned exits.",
                },
                {
                  icon: <Award className="h-6 w-6 text-black" />,
                  title: "Ultra-HNW Wealth Insurance Programs",
                  desc: "Legacy Planning covers starting from US $5mn to over US $150mn, placed with leading global insurers with over 100 years history and AAA ratings Comprehensive solutions including critical illness, global health plans, aviation covers, and international property risk protection Access to exclusive underwriters and bespoke reinsurance options for complex, high-value risk profiles.",
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
            Why Choose IPRIVE Legacy Planning & Structuring?
          </h2>

          <div className="space-y-4">
            {[
              "25+ Years of Trust, Expertise & Global Advisory Experience",
              "Partnerships with Global Insurers, Brokers, Reinsurers & Trust Law Firms",
              "Dedicated Relationship Director for Bespoke Structuring & Discreet Service",
              "Aligned with International Tax, Legal & Compliance Frameworks",
              "Built for Indian Promoters, Global Families, and International Boards",
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
            When Protection is Paramount, Precision is Power.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            IPRIVE Legacy Planning & Wealth Structuring stands as your shield —
            ensuring that wealth not only grows, but endures. From insuring
            leadership value, preserving intergenerational fortunes, to
            structuring legacies that outlive borders and time, we help clients
            secure what truly matters.
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Schedule a Private Consultation:{" "}
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
