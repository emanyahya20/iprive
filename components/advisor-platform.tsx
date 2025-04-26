"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AdvisorPlatform() {
  // Define all options with their selected state
  const categories = [
    {
      name: "Investment advisory",
      bgColor: "bg-[#b8d8f8]",
      options: [
        { name: "Start Investing", selected: false },
        { name: "Buy Global Real Estate", selected: true },
        { name: "Explore Citizenship", selected: false },
      ],
    },
    {
      name: "Family Office advisory",
      bgColor: "bg-[#f9f7f4]",
      options: [
        { name: "Create Entry Strategy", selected: true },
        { name: "Explore Rare Auctions", selected: false },
        { name: "Buy Private Jets", selected: true },
      ],
    },
    {
      name: "Legal advice",
      bgColor: "bg-[#d8e8d8]",
      options: [
        { name: "Create a will", selected: false },
        { name: "Create a trust", selected: false },
        { name: "Protect my business", selected: false },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="max-w-xl md:pt-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-4 md:mb-6">
              A Bespoke Wealth Platform, Designed Around You
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              At IPRIVE, we don't just manage wealth — we preserve legacies,
              unlock global opportunities, and build multigenerational
              resilience. Whether you're a business founder, investor, or
              inheritor of wealth, our advisors understand the nuances of your
              world — from private assets and structured holdings to real
              estate, venture capital, and global mobility. Confidential.
              Composed. Crafted for those who value more than just returns.
            </p>
          </div>

          {/* Right Column - Content with overlapping boxes */}
          <div className="relative">
            {/* Person Image Container */}
            <div className="relative w-full flex justify-center">
              <div className="h-64 sm:h-80 md:h-96 w-full max-w-md">
                <Image
                  src="/section1.png"
                  alt="Financial advisor"
                  width={450}
                  height={380}
                  className="h-full w-auto object-cover mx-auto"
                />
              </div>
            </div>

            {/* Planning box with overlap */}
            <div className="relative mt-4 md:mt-[-60px]">
              {/* Logo Circle */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/itrustmore.png"
                  alt="Circle Image"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Card content */}
              <div className="bg-white p-4 md:p-6 shadow-sm">
                <div className="pt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4 md:mb-6">
                    What are you planning for?
                  </h3>

                  {/* Categories displayed responsively */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {categories.map((category, idx) => (
                      <div key={idx} className="flex flex-col space-y-2">
                        {/* Category Header */}
                        <div
                          className={`py-2 px-1 text-center ${category.bgColor}`}
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
                              className={`w-full text-left py-2 px-3 flex items-center text-xs ${
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
    </section>
  );
}
