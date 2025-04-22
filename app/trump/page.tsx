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
                  <span className="block">Trump Gold Card Advisory</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Exclusive Access. Privileged Living. Personalised Wealth
                    Privileges.
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
            Trump Gold Card Advisory
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE Global Private Wealth, we believe wealth isn't just
              measured in numbers — it's expressed through access, influence,
              and rare privileges reserved for the world's elite. The Trump Gold
              Card Advisory is an exclusive, invitation-based service for our
              global clientele, offering bespoke wealth benefits, lifestyle
              privileges, and preferential opportunities under the distinguished
              Trump brand umbrella.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              This program has been carefully curated for HNIs, business owners,
              investors, and board members by the US Government seeking an
              international badge of prestige, paired with tangible financial
              and lifestyle rewards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Key Benefits & Inclusions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Global Prestige & Priority Access
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Exclusive privileges at Trump International Hotels & Resorts
                  worldwide Priority upgrades, private concierge services, and
                  members-only events Special rates on luxury real estate
                  projects in key international destinations
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Financial Privileges & Wealth Structuring
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Access to exclusive investment programs in Trump-affiliated
                  ventures. Preferential rates on high-value asset acquisition —
                  real estate, private jets, yachts. Wealth advisory solutions
                  integrated with your Trump Gold Card privileges.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Compass className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Elite Lifestyle Experiences
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Invitations to high-profile global events, private galas, and
                  Trump Foundation engagements. Bespoke experiences including
                  golf, hospitality, art auctions, and global investment
                  summits.
                </p>
              </div>

              <div className="p-4 bg-[#f9f7f4] rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-black mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Business & Networking Privileges
                  </h3>
                </div>
                <p className="text-gray-800 text-sm">
                  Entry to ultra-exclusive global business networks, connecting
                  you with influential leaders, investors, and dignitaries.
                  Board-level introductions and opportunities through IPRIVE's
                  Global Alliance Network.
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
            Why Choose IPRIVE Trump Gold Card Advisory?
          </h2>

          <div className="space-y-4">
            {[
              "25 Years of Trust, Global Influence & Private Client Service Excellence",
              "Direct Access to Trump-Affiliated Lifestyle & Investment Programs",
              "Confidential, White-Glove Service for Global HNWIs, UHNWIs, and Family Offices",
              "End-to-End Wealth Structuring, Legacy Planning, and Lifestyle Advisory",
              "Dedicated Relationship Director for Your Trump Gold Card Journey",
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
            For the Few Who Lead the World.
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Trump Gold Card Advisory by IPRIVE is not just a membership — it's a
            statement of success, a passport to influence, and a gateway to a
            life lived at the highest standards of excellence.
          </p>
          <div className="mt-8">
            <p className="text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              Apply by Invitation Only:{" "}
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
