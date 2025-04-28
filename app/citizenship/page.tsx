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

export default function CitizenshipGlobalMobilitySolutions() {
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
          <source src="/citizenship.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Citizenship & Global Mobility</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Freedom to Live, Invest, and Belong — Anywhere.
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
            Citizenship & Global Mobility Solutions
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE Global Private Wealth, we understand that today's elite
              live, invest, and thrive without borders. Our Citizenship & Global
              Mobility Solutions are designed to empower individuals, families,
              and business leaders with the ability to secure second
              citizenships, permanent residencies, and exclusive investor visas,
              opening doors to greater freedom, financial security, and global
              opportunity.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Through our international network of government-approved partners,
              legal advisors, and immigration specialists, we deliver bespoke
              solutions tailored to your lifestyle ambitions, business goals,
              and legacy planning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Completely aligned boxes with fixed height headings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Global Capabilities Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Each service box with guaranteed consistent alignment */}
              {[
                {
                  icon: <HomeIcon className="h-6 w-6 text-black" />,
                  title: "Citizenship by Investment (CBI) Programs",
                  desc: "Gain direct citizenship through government-authorized investment programs in countries such as St. Kitts & Nevis, Grenada, Dominica, Vanuatu, Malta, Turkey, and Antigua & Barbuda — providing visa-free access to 100+ destinations, financial security, and enhanced family safety.",
                },
                {
                  icon: <Building className="h-6 w-6 text-black" />,
                  title: "Residency by Investment (Golden Visas)",
                  desc: "Secure EU and global residency rights through structured investments in countries like Portugal, Greece, Spain, UAE, Singapore, and Canada — giving you, your family, and your business seamless access to new markets, healthcare, education, and quality of life advantages.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-black" />,
                  title: "Investor Visas & Business Migration Programs",
                  desc: "Access exclusive investor visa programs including US Trump Gold Card, EB-5, UK Tier-1 Innovator, Australia Business Innovation Visa, and UAE Investor Residency options for business owners and wealth creators looking to expand their global footprint.",
                },
                {
                  icon: <Award className="h-6 w-6 text-black" />,
                  title: "Multi-Jurisdictional Residency Planning",
                  desc: "Design a future-ready global lifestyle strategy combining multiple residencies and citizenships — creating flexibility for wealth management, tax optimization, business expansion, and family succession planning.",
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-black" />,
                  title: "Family & Legacy Benefits",
                  desc: "Ensure your next generations have access to the best education, healthcare, and borderless travel with multi-generational citizenship privileges, estate planning advantages, and wealth protection benefits.",
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
            Why Choose IPRIVE for Global Mobility?
          </h2>

          <div className="space-y-4">
            {[
              "25-Year Heritage of Global Private Wealth Advisory under Trustmore Group",
              "Government-Approved Program Partnerships Worldwide",
              "Confidential, End-to-End Advisory and Legal Structuring",
              "Exclusive, Priority Processing Services",
              "Multi-Jurisdictional Wealth, Tax, and Lifestyle Planning Integration",
              "Dedicated Global Mobility Desk for HNWIs, Boards & Family Offices",
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
            Your passport should be as limitless as your ambition.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Whether you seek global business expansion, secure asset relocation,
            lifestyle upgrades, or a legacy beyond borders, IPRIVE Global
            Private Wealth is your discreet and trusted partner.
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Enquire about Citizenship & Mobility Programs:{" "}
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
