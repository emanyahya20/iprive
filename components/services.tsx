import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Business Escrow",
      description: "Secure large business transactions, mergers, acquisitions, and high-value purchases.",
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
          className="text-[oklch(0.257_0.09_281.288)] h-8 w-8"
        >
          <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
          <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
          <line x1="12" y1="22" x2="12" y2="13"></line>
          <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
        </svg>
      ),
    },
    {
      title: "Real Estate Escrow",
      description: "Protect property transactions with our specialized real estate escrow services.",
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
          className="text-[oklch(0.257_0.09_281.288)] h-8 w-8"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      title: "Financial Advisory",
      description: "Get expert financial advice tailored to your business needs from our trusted advisors.",
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
          className="text-[oklch(0.257_0.09_281.288)] h-8 w-8"
        >
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y2="10" y1="10"></line>
          <line x1="7" x2="7" y2="19" y1="10"></line>
          <line x1="17" x2="17" y2="19" y1="10"></line>
          <line x1="2" x2="22" y2="19" y1="19"></line>
        </svg>
      ),
    },
    {
      title: "Secure Payments",
      description: "Process payments securely with our advanced encryption and authentication systems.",
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
          className="text-[oklch(0.257_0.09_281.288)] h-8 w-8"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[oklch(0.257_0.09_281.288)] mb-6">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive escrow and financial services for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href="#"
                className="inline-flex items-center text-[oklch(0.257_0.09_281.288)] hover:text-[oklch(0.257_0.09_281.288)/80] font-medium"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
