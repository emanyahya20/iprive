// This component is no longer used in the current design
// Kept for reference in case we want to reintroduce a "How It Works" section in the future

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[oklch(0.257_0.09_281.288)] mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Our platform makes escrow services simple, secure, and transparent
            for all parties involved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[oklch(0.98_0.016_73.684)] w-16 h-16 flex items-center justify-center rounded-full mb-6 text-[oklch(0.257_0.09_281.288)] font-bold text-2xl">
              1
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Create an Account
            </h3>
            <p className="text-gray-600 mb-6">
              Sign up for an IPRIVE account and complete your verification
              process to get started with our secure escrow services.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[oklch(0.98_0.016_73.684)] w-16 h-16 flex items-center justify-center rounded-full mb-6 text-[oklch(0.257_0.09_281.288)] font-bold text-2xl">
              2
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Set Up Your Transaction
            </h3>
            <p className="text-gray-600 mb-6">
              Define the terms of your transaction, including payment details
              and conditions for release of funds.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-[oklch(0.98_0.016_73.684)] w-16 h-16 flex items-center justify-center rounded-full mb-6 text-[oklch(0.257_0.09_281.288)] font-bold text-2xl">
              3
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Secure Completion
            </h3>
            <p className="text-gray-600 mb-6">
              Funds are securely held until all conditions are met, then
              automatically released to the recipient.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
