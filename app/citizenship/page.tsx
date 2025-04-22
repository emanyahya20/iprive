"use client";

import Link from "next/link";

import {
  Check,
  Globe,
  MapPin,
  Briefcase,
  Navigation,
  Users,
  Compass,
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
          <source src="/realestate.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">
                    Citizenship & Global Mobility Solutions
                  </span>
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
        <div className="max-w-3xl mx-auto text-center">
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

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Global Capabilities Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Citizenship by Investment (CBI) Programs
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Gain direct citizenship through government-authorized
                  investment programs in countries such as St. Kitts & Nevis,
                  Grenada, Dominica, Vanuatu, Malta, Turkey, and Antigua &
                  Barbuda — providing visa-free access to 100+ destinations,
                  financial security, and enhanced family safety.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Residency by Investment (Golden Visas)
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Secure EU and global residency rights through structured
                  investments in countries like Portugal, Greece, Spain, UAE,
                  Singapore, and Canada — giving you, your family, and your
                  business seamless access to new markets, healthcare,
                  education, and quality of life advantages.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Investor Visas & Business Migration Programs
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Access exclusive investor visa programs including US Trump
                  Gold Card, EB-5, UK Tier-1 Innovator, Australia Business
                  Innovation Visa, and UAE Investor Residency options for
                  business owners and wealth creators looking to expand their
                  global footprint.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Compass className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Multi-Jurisdictional Residency Planning
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Design a future-ready global lifestyle strategy combining
                  multiple residencies and citizenships — creating flexibility
                  for wealth management, tax optimization, business expansion,
                  and family succession planning.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Family & Legacy Benefits
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Ensure your next generations have access to the best
                  education, healthcare, and borderless travel with
                  multi-generational citizenship privileges, estate planning
                  advantages, and wealth protection benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 bg-white p-1.5 sm:p-2 rounded-full mt-0.5 sm:mt-1">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                </div>
                <p className="text-sm sm:text-base text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-relaxed mb-8">
            Because your passport should be as
            <br className="hidden sm:inline" />
            limitless as your ambition.
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
