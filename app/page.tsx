import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Check, ArrowRight, Play } from "lucide-react";
import ServicesTabs from "@/components/services-tabs";
import AdvisorPlatform from "@/components/advisor-platform";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <main className="flex-grow">
        {/* Hero Section with Video Background */}
        <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-4 sm:px-0">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block whitespace-normal">
                    Welcome to IPRIVE Global Private Wealth
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Where Global Wealth Meets Timeless Trust
                  </span>
                </h1>

                {/* Description text */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                  At IPRIVE, we see wealth as more than capital, it's legacy,
                  influence, and vision. As the private wealth arm of the
                  Trustmore Group, we bring 25 years of trusted expertise to
                  guide you through the complexities of wealth, investment, and
                  global opportunities.
                </p>

                {/* Responsive Buttons - Modified for mobile */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-lg px-4 sm:px-6 md:px-8 backdrop-blur-sm text-sm sm:text-base [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)]"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-lg px-4 sm:px-6 md:px-8 backdrop-blur-sm text-sm sm:text-base [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)]"
                  >
                    <span className="truncate">Watch Demo</span>{" "}
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisor Platform Section */}
        <AdvisorPlatform />

        {/* Services Tabs Section */}
        <ServicesTabs />

        {/* Advisor Section - Based on "Advisors who just get equity and businesses" */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                {/* Advisor visualization */}
                <div className="relative">
                  {/* Main image */}
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/section1.png"
                      alt="Business professional"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Overlapping elements */}
                  <div className="absolute bottom-0 left-0 bg-[#0a2342] text-white p-6 rounded-tr-xl max-w-xs">
                    <div className="text-xl font-semibold">
                      Founding a company
                    </div>
                  </div>

                  {/* Profile circles */}
                  <div className="absolute -bottom-10 right-20 w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Advisor 1"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -right-4 bottom-20 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt="Advisor 2"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -right-8 bottom-48 w-16 h-16 rounded-full bg-[#f9b55a] flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  Why IPRIVE?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  25-Year Trustmore Legacy of excellence, transparency, and
                  trust. Global Expertise, Local Insight — with dedicated
                  offices in India and Dubai. Discreet, White-Glove Service
                  inspired by the world’s most respected Swiss banks. Privileged
                  Access to Global Markets, Luxury Assets, and Private Deals.
                  Bespoke, Human-Led Advisory — powered by data, driven by
                  relationships. At IPRIVE, we’re more than wealth managers —
                  we’re curators of enduring value, custodians of generational
                  legacy, and architects of financial freedom. Your world, your
                  ambitions, our expertise. Discover the IPRIVE experience.
                </p>
                <Link
                  href="/contact"
                  className="text-[oklch(0.257_0.09_281.288)] hover:underline font-medium inline-flex items-center"
                >
                  Let’s Design Your Legacy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section - Based on "Collaborating with your advisors, made easy" */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  Collaborating with your escrow team, made easy
                </h2>
                <div className="space-y-6 mt-8">
                  {[
                    "SECURE, DIGITAL CLIENT PORTAL",
                    "PROACTIVE EMAIL NOTIFICATIONS",
                    "CENTRALIZED TRANSACTION & FINANCIAL DOC STORAGE",
                    "SHARED BUSINESS ACCOUNTS",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-6 w-6 text-[oklch(0.257_0.09_281.288)]" />
                      </div>
                      <p className="text-lg text-gray-600 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                {/* Client Portal UI */}
                <div className="relative">
                  {/* Person image */}
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Person working on laptop"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Document sharing UI */}
                  <div className="absolute -bottom-12 -left-12 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0a2342] flex items-center justify-center text-white font-bold mr-3">
                        H
                      </div>
                      <div className="font-semibold">Annual Tax Filing</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#e6f7eb] flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="text-sm">
                          <div>Share tax docs</div>
                          <div className="text-gray-500 text-xs">
                            with your advisor
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button className="bg-[#0a2342] text-white text-sm py-1 px-4 rounded">
                          Upload
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                        <div className="flex-1 h-4 bg-gray-100 rounded"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                        <div className="flex-1 h-4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Section - Based on "Meet your Harness Concierge" */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                {/* Concierge Chat UI */}
                <div className="relative">
                  <div className="bg-[#0a2342] rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>

                  {/* Chat bubbles */}
                  <div className="absolute top-0 left-0 bg-white rounded-xl shadow-md p-4 max-w-xs">
                    <div className="flex items-start mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex-shrink-0 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="User"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <p>
                          How private and secure is my relationship with IPRIVE?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-md p-4 max-w-xs">
                    <div className="flex items-start mb-2">
                      <div className="bg-[#e6f7eb] rounded-lg p-3 text-sm mr-3">
                        <p>
                          Discretion is at the heart of everything we do — your
                          affairs stay strictly confidential, protected by the
                          same international standards trusted by the world’s
                          elite.
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="Advisor"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  Meet your iPrive Concierge
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At IPRIVE Global Private Wealth, your experience is personal,
                  discreet, and seamless — because it’s handled by real people
                  who understand your world. Our IPRIVE Concierge team isn’t
                  just a service desk — they are highly-qualified, experienced
                  private wealth professionals, trained in global investments,
                  legacy planning, and high-value advisory services.Each
                  concierge is personally dedicated to curating opportunities,
                  navigating complexities, and making your wealth journey
                  effortless.
                </p>
                <h2 className="text-2xl sm:text-2xl font-medium mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  It’s not automated. It’s not outsourced. It’s deeply personal,
                  discreet, and entirely yours.
                </h2>
                <Button className="bg-white text-gray-800 hover:bg-gray-100 border-2 border-gray-800 rounded-[8px] px-6 py-3 text-base">
                  Connect with a concierge
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="concierge" className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)]">
                    Ready to secure your transactions?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Join thousands of businesses that trust iPrive for their
                    financial security and transaction needs. Our team is ready
                    to help you get started.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-white text-gray-800 hover:bg-gray-100 border-2 border-gray-800 rounded-[8px] px-8 py-4 text-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 rounded-[8px] px-8 py-4 text-lg"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
                <div className="bg-white p-10 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                    Request a Demo
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                      />
                    </div>
                    <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 border-2 border-gray-800 rounded-[8px] py-3 text-lg">
                      Request Demo
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="#" className="underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
