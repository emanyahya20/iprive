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
                <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            About Us
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              IPRIVE Global Private Wealth is a bespoke wealth management
              platform built exclusively for distinguished individuals,
              families, and institutions around the world.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Rooted in the legacy of the Trustmore Group — a name synonymous
              with trust, innovation, and excellence for over 25 years — we
              provide a seamless gateway to global real estate opportunities,
              private investments, legacy planning, citizenship programs, and
              high-value wealth structuring.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At IPRIVE, we believe wealth is more than an asset. It is a
              responsibility, a legacy, and a means to create lasting impact.
              Our approach is deeply personal, fully independent, and globally
              integrated — ensuring every strategy is tailored precisely to the
              unique goals of our clients. Explore the larger vision that drives
              us at{" "}
              <a
                href="https://itrustmore.com/about"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Trustmore Group
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
