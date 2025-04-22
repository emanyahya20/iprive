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
                  <span className="block">Our Leadership</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Part of a Global Financial Powerhouse
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
            At Escrowpay, we are backed by the strength and expertise of
            Trustmore Group
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              A leading global services group in wealth management, private
              aviation, and financial services. Our team operates with the same
              level of precision, discretion, and excellence that defines the
              Trustmore Group legacy.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We serve an elite clientele, ensuring seamless access to bespoke
              financial solutions, exclusive investment opportunities, and
              world-class service. Our leadership's strategic vision fuels
              innovation across all our businesses, making us a trusted partner
              for high-net-worth individuals and global enterprises.
            </p>
            <div className="flex justify-center mt-8">
              <Link
                href="https://www.itrustmore.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-800 bg-bg-white hover:bg-[#f9f7f4] transition-colors border border-gray-200"
              >
                Discover the leadership behind our success
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
