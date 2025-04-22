"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export default function KnowledgeCenter() {
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
          <source src="/knowledgecenter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Knowledge Centre</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Insights into secure payments and digital transactions
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Knowledge Centre
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Welcome to the Knowledge Centre at Escrowpay, where we provide
              valuable insights into the world of secure payments, escrow
              services, and the latest trends shaping the financial and digital
              transaction landscape. Here, you can explore articles, blogs, case
              studies, and other resources designed to help you stay informed
              and make smarter decisions in your business or personal
              transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Industry Insights, Trends, and Best Practices
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              In an ever-evolving digital world, understanding how to protect
              your transactions and ensure fairness is crucial. As the leader in
              escrow payment services, Escrowpay offers in-depth articles on:
            </p>

            <div className="space-y-4">
              {[
                "Escrow Payment Solutions: Discover how escrow services work, the benefits they provide for both buyers and sellers, and why they are a must-have in today's online marketplace.",
                "Cybersecurity and Fraud Prevention: Learn about the latest security measures to protect your payments from fraud, hacking, and identity theft.",
                "Global Payment Trends: Stay up-to-date with the global trends shaping the digital payment industry, including the rise of cryptocurrencies, blockchain technology, and international trade regulations.",
                "How Escrow Services Benefit E-commerce: E-commerce is booming, but so are the risks. Learn how escrow can create a safer environment for transactions between buyers and sellers.",
                "Best Practices for Using Escrow Services: Whether you're a first-time user or an experienced business, learn how to make the most of escrow services to ensure smoother transactions.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 bg-[#FDF8F0] p-1.5 sm:p-2 rounded-full mt-0.5 sm:mt-1">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Why Trust Escrowpay for Your Payments
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Escrowpay, we are more than just a payment solution. We are
              dedicated to providing the most secure and efficient way to handle
              your financial transactions. Our team of experts consistently
              analyzes the latest industry trends and innovations to keep you
              informed, ensuring you stay one step ahead in the market.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              For knowledge and insights, explore the Trustmore Group, the
              parent company behind Escrowpay. Trustmore Group is a global
              leader in payment solutions and risk management, and its knowledge
              hub offers even deeper insights into the financial tech world.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <Link
                href="https://www.itrustmore.com/knowledge-centre" // Replace with actual Trustmore knowledge center URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit the Trustmore Knowledge Centre
              </Link>{" "}
              to explore a broader range of articles, reports, and industry
              research from Trustmore Group, which covers cutting-edge
              technology, risk management strategies, and more in-depth analysis
              of the payments landscape.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
