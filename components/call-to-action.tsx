import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[oklch(0.257_0.09_281.288)]">
                Ready to secure your transactions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of businesses that trust iPrive for their financial security and transaction needs. Our
                team is ready to help you get started.
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
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Request a Demo</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2 text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2 text-gray-700">
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#f9f7f4] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[oklch(0.257_0.09_281.288)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
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
  )
}
