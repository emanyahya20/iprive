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
                    <span className="truncate">Watch Video</span>{" "}
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

        {/* Advisor Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                {/* Advisor visualization */}
                <div className="relative">
                  {/* Main image */}
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/section2.png"
                      alt="Business professional"
                      width={600}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Overlapping elements */}
                  <div className="absolute bottom-0 right-4 translate-y-1/3 w-16 h-16 rounded-full bg-[#f9b55a] flex items-center justify-center">
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
                  inspired by the world's most respected Swiss banks. Privileged
                  Access to Global Markets, Luxury Assets, and Private Deals.
                  Bespoke, Human-Led Advisory — powered by data, driven by
                  relationships. At IPRIVE, we're more than wealth managers —
                  we're curators of enduring value, custodians of generational
                  legacy, and architects of financial freedom. Your world, your
                  ambitions, our expertise. Discover the IPRIVE experience.
                </p>
                <Link
                  href="/contact"
                  className="text-[oklch(0.257_0.09_281.288)] hover:underline font-medium inline-flex items-center"
                >
                  Let's Design Your Legacy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wealth Management Section */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="pt-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  Your Wealth, Our Commitment
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  At IPRIVE, we understand that wealth is more than just
                  numbers—it embodies your aspirations, achievements, and
                  legacy. Our bespoke wealth management services are designed to
                  align with your unique financial journey, offering
                  personalized strategies that encompass investment management,
                  estate planning, and philanthropic advisory. With a deep
                  understanding of global markets and a commitment to
                  discretion, we partner with you to navigate the complexities
                  of wealth with confidence and clarity.
                </p>
              </div>

              {/* Three Column Features */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-[oklch(0.257_0.09_281.288)]">
                    Tailored Strategies for Discerning Clients
                  </h3>
                  <p className="text-gray-600">
                    Our approach is centered on understanding your individual
                    goals and crafting strategies that reflect your values and
                    ambitions. Whether it's optimizing your investment
                    portfolio, planning for generational wealth transfer, or
                    exploring philanthropic opportunities, our advisors provide
                    insights and solutions that are as unique as you are.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-[oklch(0.257_0.09_281.288)]">
                    Global Reach, Personal Touch
                  </h3>
                  <p className="text-gray-600">
                    With a presence in key financial hubs, including our
                    strategic office in Dubai, IPRIVE offers a global
                    perspective combined with local expertise. This positioning
                    allows us to provide you with access to exclusive investment
                    opportunities and insights into emerging markets, ensuring
                    your wealth strategy is both comprehensive and
                    forward-looking.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-[oklch(0.257_0.09_281.288)]">
                    Seamless Collaboration with Trusted Advisors
                  </h3>
                  <p className="text-gray-600">
                    Our platform facilitates effortless collaboration between
                    you and your dedicated advisory team. Through secure digital
                    channels, you can engage in meaningful conversations, access
                    tailored reports, and make informed decisions—all while
                    enjoying the personalized service that defines IPRIVE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Image Frame on the Left */}
              <div className="order-1 md:order-1 w-full md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
                  <Image
                    src="/section4.png"
                    alt="IPRIVE Concierge"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content on the Right */}
              <div className="order-2 md:order-2 w-full md:w-1/2">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  Meet your IPRIVE Concierge
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At IPRIVE Global Private Wealth, your experience is personal,
                  discreet, and seamless — because it's handled by real people
                  who understand your world. Our IPRIVE Concierge team isn't
                  just a service desk — they are highly-qualified, experienced
                  private wealth professionals, trained in global investments,
                  legacy planning, and high-value advisory services. Each
                  concierge is personally dedicated to curating opportunities,
                  navigating complexities, and making your wealth journey
                  effortless.
                </p>
                <h2 className="text-2xl sm:text-2xl font-medium mb-6 text-[oklch(0.257_0.09_281.288)] leading-tight">
                  It's not automated. It's not outsourced. It's deeply personal,
                  discreet, and entirely yours.
                </h2>
                <Link href="/contact">
                  <Button className="bg-white text-gray-800 hover:bg-gray-100 border-2 border-gray-800 rounded-[8px] px-6 py-3 text-base">
                    Connect with a concierge
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
