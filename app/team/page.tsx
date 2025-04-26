"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
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
          <source src="/team.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Our Team</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Your Trusted Partner in Wealth Management
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Behind IPRIVE is a team of seasoned wealth advisors, investment
            strategists, and legal experts
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Every IPRIVE advisor brings decades of experience from the top
              global banks, private equity firms, and international family
              offices — with one mission:{" "}
              <strong>
                to be your trusted partner in preserving, growing, and
                protecting your wealth.
              </strong>
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our team's combined expertise covers:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-base sm:text-lg text-gray-600">
              <li>Multi Jurisdictional wealth planning</li>
              <li>Global real estate advisory</li>
              <li>Private equity and venture investments</li>
              <li>Trust and estate structuring</li>
              <li>Citizenship and residency planning</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              What sets us apart is not just our global knowledge, but the trust
              we build with every client — for life, and beyond.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We invite you to meet the people who bring the IPRIVE vision to
              life.
            </p>
            <div className="flex justify-center mt-8">
              <Link
                href="https://itrustmore.com/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-800 bg-white hover:bg-[#f9f7f4] transition-colors border border-gray-200"
              >
                Learn more about our legacy through Trustmore Group
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
