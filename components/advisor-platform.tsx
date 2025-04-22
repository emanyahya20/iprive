"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AdvisorPlatform() {
  // Define all options with their selected state
  const categories = [
    {
      name: "Tax advice",
      bgColor: "bg-[#b8d8f8]",
      options: [
        { name: "Crypto, NFTs", selected: false },
        { name: "Equity taxes", selected: true },
        { name: "Exercise options", selected: false },
      ],
    },
    {
      name: "Financial advice",
      bgColor: "bg-[#f9f7f4]",
      options: [
        { name: "Starting a business", selected: true },
        { name: "Retirement", selected: false },
        { name: "Buying a house", selected: true },
      ],
    },
    {
      name: "Legal advice",
      bgColor: "bg-[#d8e8d8]",
      options: [
        { name: "Create a will", selected: false },
        { name: "Create a trust", selected: false },
        { name: "Selling my business", selected: false },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              A platform for tax and financial advice tailored to you
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover and work with advisors who have experience in your
              specific situation, including knowledge about company equity,
              small business, and crypto.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Invited by your advisor?{" "}
              <a
                href="#"
                className="text-[oklch(0.257_0.09_281.288)] hover:underline"
              >
                Learn more
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#f9b55a] hover:bg-[#f9b55a]/90 text-white border-0 rounded-md px-8 py-6 text-base font-medium">
                GET STARTED
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-100 rounded-md px-8 py-6 text-base font-medium"
              >
                HOW IT WORKS
              </Button>
            </div>
          </div>

          {/* Right Column - Image and Card */}
          <div className="relative">
            {/* Person Image - Smaller height */}
            <div className="relative w-full">
              <div className="h-[380px] w-full">
                <Image
                  src="/placeholder.svg?height=380&width=450"
                  alt="Financial advisor"
                  width={450}
                  height={380}
                  className="h-full w-auto object-cover"
                />
              </div>

              {/* Card positioned below the image */}
              <div className="relative mt-[-40px]">
                {/* Logo Circle - Positioned to overlap between image and card */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-[#0a2342] flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">iP</span>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                      What are you planning for?
                    </h3>

                    {/* All categories displayed at once */}
                    <div className="grid grid-cols-3 gap-4">
                      {categories.map((category, idx) => (
                        <div key={idx} className="flex flex-col space-y-2">
                          {/* Category Header */}
                          <div
                            className={`py-2 px-1 text-center rounded-md ${category.bgColor}`}
                          >
                            <span className="text-gray-900 font-medium">
                              {category.name}
                            </span>
                          </div>

                          {/* Category Options */}
                          <div className="space-y-2">
                            {category.options.map((option, optIdx) => (
                              <button
                                key={optIdx}
                                className={`w-full text-left py-2 px-3 rounded-md flex items-center text-xs ${
                                  option.selected
                                    ? "bg-[#0a2342] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                              >
                                {option.selected && (
                                  <Check className="h-3 w-3 mr-1 flex-shrink-0" />
                                )}
                                <span className="truncate">{option.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
