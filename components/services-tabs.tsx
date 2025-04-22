"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: "01", title: "Individuals" },
    { id: "02", title: "Corporations" },
  ];

  // Helper function to convert service title to URL path
  const getServicePath = (title) => {
    return "/" + title.toLowerCase().replace(/[&\s]+/g, "-");
  };

  const services = [
    [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
          </svg>
        ),
        title: "Global Real Estate Advisory",
        description:
          "Access prime, off-market, and trophy properties across major financial capitals, emerging markets, and lifestyle destinations. From London penthouses to Dubai waterfront estates — curated for discerning investors seeking returns and prestige.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: "High-Value Private Investments",
        description:
          "We unlock exclusive access to direct private equity deals, structured products, luxury asset investments, and rare opportunities typically reserved for institutional players. Invest beyond the ordinary, with risk-managed strategies tailored to your ambitions.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        title: "Trust Formation & Legacy Planning",
        description:
          "Preserve and protect your wealth for generations with our expert trust structures, estate planning services, and family office solutions. Confidential, compliant, and crafted with absolute care for your family's future.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <path d="M2 20h20" />
            <path d="M3 20h18v-4H3v4Z" />
            <path d="M4 16h16v-4H4v4Z" />
            <path d="M12 4v8" />
            <path d="M8 4v8" />
            <path d="M16 4v8" />
          </svg>
        ),
        title: "Startup & Venture Capital Investments",
        description:
          "Participate in tomorrow's breakthroughs. From pre-IPO opportunities to disruptive tech ventures, our global network connects you with carefully vetted high-growth businesses poised to redefine industries.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M20 16H8" />
            <path d="M16 20H4" />
            <path d="M16 4h4" />
            <path d="M8 8h4" />
          </svg>
        ),
        title: "Citizenship & Global Mobility Solutions",
        description:
          "Enhance your global footprint through strategic citizenship, residency, and second passport programs. Benefit from smoother cross-border movement, tax efficiencies, and enhanced financial security for your family.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        ),
        title: "Trump Gold Card Advisory",
        description:
          "A distinctive program for ultra-high-net-worth individuals seeking unmatched privileges — from curated experiences to personal concierge banking and strategic access to top-tier financial and luxury services worldwide.",
      },
    ],
    [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
          </svg>
        ),
        title: "Global Real Estate Advisory",
        description:
          "Access prime, off-market, and trophy properties across major financial capitals, emerging markets, and lifestyle destinations. From London penthouses to Dubai waterfront estates — curated for discerning investors seeking returns and prestige.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <line x1="12" y1="2" x2="12" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: "High-Value Private Investments",
        description:
          "We unlock exclusive access to direct private equity deals, structured products, luxury asset investments, and rare opportunities typically reserved for institutional players. Invest beyond the ordinary, with risk-managed strategies tailored to your ambitions.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        title: "Trust Formation & Legacy Planning",
        description:
          "Preserve and protect your wealth for generations with our expert trust structures, estate planning services, and family office solutions. Confidential, compliant, and crafted with absolute care for your family's future.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <path d="M2 20h20" />
            <path d="M3 20h18v-4H3v4Z" />
            <path d="M4 16h16v-4H4v4Z" />
            <path d="M12 4v8" />
            <path d="M8 4v8" />
            <path d="M16 4v8" />
          </svg>
        ),
        title: "Startup & Venture Capital Investments",
        description:
          "Participate in tomorrow's breakthroughs. From pre-IPO opportunities to disruptive tech ventures, our global network connects you with carefully vetted high-growth businesses poised to redefine industries.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M20 16H8" />
            <path d="M16 20H4" />
            <path d="M16 4h4" />
            <path d="M8 8h4" />
          </svg>
        ),
        title: "Citizenship & Global Mobility Solutions",
        description:
          "Enhance your global footprint through strategic citizenship, residency, and second passport programs. Benefit from smoother cross-border movement, tax efficiencies, and enhanced financial security for your family.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#f9b55a]"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        ),
        title: "Trump Gold Card Advisory",
        description:
          "A distinctive program for ultra-high-net-worth individuals seeking unmatched privileges — from curated experiences to personal concierge banking and strategic access to top-tier financial and luxury services worldwide.",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#4c7c64]"
          >
            <path d="M12 2v20" />
            <path d="M8 10H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
            <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
            <path d="M8 20H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1" />
            <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
          </svg>
        ),
        title: "Jumbo Investment & Wealth Structuring",
        description:
          "For complex, multi-million-dollar portfolios, we offer bespoke jumbo investment mandates, family office setups, and multi-asset structuring strategies — built on discretion, governance, and performance.",
      },
    ],
  ];

  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[oklch(0.257_0.09_281.288)] mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive services tailored to your specific needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row border-b border-gray-200 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 pb-4 text-left ${
                activeTab === index
                  ? "border-b-2 border-[oklch(0.257_0.09_281.288)]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-sm text-gray-500 mb-1">{tab.id}</div>
              <div
                className={`text-xl font-semibold ${
                  activeTab === index ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {tab.title}
              </div>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <div key={index} className="border-t border-gray-200 pt-8">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Link component structure for easy replacement later */}
              {service.title === "Global Real Estate Advisory" ? (
                <Link
                  href="/global"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title === "High-Value Private Investments" ? (
                <Link
                  href="/private"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title === "Trust Formation & Legacy Planning" ? (
                <Link
                  href="/trust"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title === "Startup & Venture Capital Investments" ? (
                <Link
                  href="/startup"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title ===
                "Citizenship & Global Mobility Solutions" ? (
                <Link
                  href="/citizenship"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title === "Trump Gold Card Advisory" ? (
                <Link
                  href="/trump"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : service.title === "Jumbo Investment & Wealth Structuring" ? (
                <Link
                  href="/jumbo"
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <Link
                  href={getServicePath(service.title)}
                  className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium text-sm"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
