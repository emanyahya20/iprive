import Image from "next/image"
import { Check } from "lucide-react"

export default function FinancialAdvice() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-[oklch(0.257_0.09_281.288)] leading-tight">
              Expert Financial Advice Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're a leader, an owner of a successful business, a head of total rewards for a company, or a
              member of the finance committee of a non-profit organization, our planning, tax, investment, and
              retirement plan specialists provide practical, real-world answers to today's pressing financial questions.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#f9f7f4] rounded-full p-1">
                  <Check className="h-5 w-5 text-[oklch(0.257_0.09_281.288)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Expert Guidance</h3>
                  <p className="text-gray-600">Access to financial experts with deep industry knowledge</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#f9f7f4] rounded-full p-1">
                  <Check className="h-5 w-5 text-[oklch(0.257_0.09_281.288)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Personalized Solutions</h3>
                  <p className="text-gray-600">Tailored financial strategies based on your specific needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#f9f7f4] rounded-full p-1">
                  <Check className="h-5 w-5 text-[oklch(0.257_0.09_281.288)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Comprehensive Planning</h3>
                  <p className="text-gray-600">Holistic approach to your financial goals and objectives</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="aspect-[4/3] bg-[#f9f7f4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=450&width=600"
                  alt="Financial Advice"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-semibold text-gray-800 mb-2">Personalized Approach</p>
                <p className="text-gray-600">
                  We take the time to understand your unique financial situation and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
