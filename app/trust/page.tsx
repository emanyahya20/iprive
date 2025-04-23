"use client";

import Link from "next/link";

import {
  Check,
  Building,
  FileText,
  Globe,
  Shield,
  Users,
  BookOpen,
} from "lucide-react";

export default function LegacyPlanning() {
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
          <source src="/trust.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">
                    Legacy Planning, Trust Formation & Executive Protection
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Preserving Wealth, Protecting Futures, and Securing
                    Leadership.
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
            Legacy Planning, Trust Formation & Executive Protection
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE Global Private Wealth, we understand that wealth is
              deeply personal — yet its implications extend far beyond
              individual portfolios, influencing businesses, families, and
              future generations. Our Legacy Planning, Trust Structuring, and
              Executive Protection solutions are crafted for both distinguished
              individuals and the boards of leading businesses seeking to
              safeguard what matters most.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We deliver tailor-made wealth preservation, succession planning,
              and leadership protection strategies that preserve value, ensure
              business continuity, and secure peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Our Signature Solutions Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Trust & Foundation Structures
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Craft custom domestic and offshore trusts, family foundations,
                  and holding structures that protect personal wealth, minimize
                  liabilities, and streamline succession — across generations
                  and jurisdictions.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Family Governance & Succession Advisory
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Develop family constitutions, governance frameworks, and
                  succession roadmaps that provide clarity, security, and
                  alignment — ensuring legacy assets are transferred smoothly,
                  with clear leadership transitions.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Board Advisory & Business Continuity Planning
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  For business owners and boards, we offer enterprise protection
                  strategies, succession policies, and business continuity
                  solutions designed to maintain operational control and
                  leadership resilience, no matter the circumstance.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Keyman Protection & Executive Insurance
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Secure your enterprise's leadership with bespoke Keyman
                  Protection plans and executive risk covers. In unforeseen
                  scenarios, these solutions offer critical financial
                  cushioning, safeguard investor confidence, and maintain
                  organizational stability.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Cross-Border Estate Structuring
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Specializing in multi-jurisdictional asset structuring,
                  inheritance tax mitigation, and estate compliance for globally
                  mobile individuals and international business owners.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Will Drafting & Estate Documentation
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Coordinate airtight, jurisdictionally compliant wills, trusts,
                  POAs, and estate transfer documentation, backed by our
                  international legal and fiduciary partners.
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
            Why IPRIVE for Individuals, Families, and Boards?
          </h2>

          <div className="space-y-4">
            {[
              "25 Years of Trustmore Group's Private Advisory Legacy",
              "White-Glove, Swiss-Standard Discretion & Confidentiality",
              "Comprehensive Wealth & Leadership Protection Solutions",
              "Seamless Cross-Border Execution & Compliance",
              "Exclusive Access to Global Structuring Expertise",
              "Dedicated Family Office & Corporate Advisory Teams",
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
            Legacy is not only what you pass on —{" "}
            <br className="hidden sm:inline" />
            it's what you protect while you lead.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            IPRIVE Global Private Wealth, backed by the trusted 25-year heritage
            of Trustmore Group, offers a secure, world-class environment for
            individuals, families, and business leaders to build, protect, and
            transition their wealth and leadership legacies — ensuring
            continuity and confidence at every stage.
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Connect with our Private Advisory team:{" "}
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
