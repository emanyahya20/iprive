"use client";

import Link from "next/link";

export default function MediaCenter() {
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
          <source src="/media.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced overlay for better mobile contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                {/* Mobile-optimized typography */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Welcome to Media Center</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Stay updated with our latest news,
                    <br className="hidden sm:block" />
                    insights, and company announcements
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Center Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Media Center
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              As the first and largest digital escrow services provider in
              India, we are proud to be part of Trustmore Group. For the last 10
              years, we have been at the forefront of transforming business
              transactions with enterprise-grade security, seamless integration,
              and unmatched transparency.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              For more detailed information about Escrowpay and our
              industry-leading payment solutions, or to explore the full
              spectrum of services provided by our parent company, Trustmore,
              please visit our{" "}
              <Link
                href="http://www.itrustmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Trustmore Website
              </Link>
              . Here you will find: Press Releases, Industry Insights, Case
              Studies, and Company Announcements.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              If you have media inquiries or require further details about
              Escrowpay or Trustmore, please contact our media relations team at{" "}
              <a
                href="mailto:care@itrustmore.com"
                className="text-blue-600 hover:underline"
              >
                care@itrustmore.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
