"use client";

import { Check, MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  const offices = [
    {
      name: "India Office",
      icon: (
        <MapPin className="w-5 h-5 text-[oklch(0.257_0.09_281.288)] mt-1" />
      ),
      details: [
        "1617 & 1618, Level 16, Emaar Digital Greens",
        "Sector 61, Gurugram 122002, Haryana",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.073981346786!2d77.0918133150786!3d28.44985898248704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f5f5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sEmaar%20Digital%20Greens%2C%20Sector%2061%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin",
      phone: "+919810336644",
      email: "care@itrustmore.com",
    },
    {
      name: "Dubai Office",
      icon: (
        <MapPin className="w-5 h-5 text-[oklch(0.257_0.09_281.288)] mt-1" />
      ),
      details: [
        "Level 41, Jumeirah Emirates Towers",
        "Sheikh Zayed Road, Dubai",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8673777212776!2d55.2819124!3d25.2178236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4292f9132cbd%3A0x653a96f2ced0a490!2sJumeirah%20Emirates%20Towers!5e0!3m2!1sen!2sae!4v1711162000000!5m2!1sen!2sae",
      phone: "+919810336644",
      email: "care@itrustmore.com",
    },
  ];

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
          <source src="/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Get in Touch with iPrive</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Your Trusted Payment Partner
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At IPRIVE, we are committed to providing seamless, secure, and
                efficient payment solutions to help you confidently manage your
                transactions. Whether you're buying, selling, or transferring
                funds, we are here to support you every step of the way.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We look forward to hearing from you and helping you make the
                most of our secure payment services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#FDF8F0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Industry Insights
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Everyone likes to be paid on agreed time. Yet, the litigation
                with regards to delayed payments is one of the highest in India.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Escrow services have become an essential component of modern
                business transactions, especially in industries where trust and
                security are paramount. With the rise of digital payments,
                online marketplaces, domestic & international trade, buyers and
                sellers are increasingly seeking reliable ways to protect their
                interests and ensure fair transactions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                Here are some key insights into the escrow payment industry:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                {
                  title: "Security is King",
                  content:
                    "The need for secure and reliable payment solutions has become critical. Escrow services offer a neutral, third-party platform that mitigates fraud and protects both buyers and sellers by holding funds until all conditions of a transaction are met.",
                },
                {
                  title: "Global Market Expansion",
                  content:
                    "As businesses increasingly operate on a global scale, the demand for international escrow services continues to rise. iPrive's ability to orchestrate through its partnerships multi-currency payments and facilitate cross-border transactions.",
                },
                {
                  title: "Rise of E-commerce",
                  content:
                    "E-commerce has surged, with billions of transactions taking place online each day. Escrow services are crucial in providing a safe environment for buyers and sellers who may be transacting for the first time.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              How We Stand Ahead Of Our Competition
            </h2>

            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-base sm:text-lg text-gray-600">
                At IPRIVE, we don't just follow industry standards – we set
                them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Unmatched Security Protocols",
                    content:
                      "While others may offer basic security, we go above and beyond with offering multi-factor authentication, end-to-end encryption, ensuring your transactions are as secure as possible.",
                  },
                  {
                    title: "Speed and Efficiency",
                    content:
                      "Our platform is designed for speed. We understand that time is money, and our escrow processing times are among the fastest in the industry.",
                  },
                  {
                    title: "Customer-Centric Approach",
                    content:
                      "Unlike many of our competitors, we offer personalized support with dedicated account manager who can guide you through every step of the transaction process.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-[#FDF8F0] p-2 rounded-full mt-0.5">
                      <Check className="h-5 w-5 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Competitive Pricing",
                    content:
                      "We offer some of the most competitive pricing in the market, ensuring that you get top-tier service without breaking the bank. Your investment in our products will save you money and make your business collections & payments very efficient.",
                  },
                  {
                    title: "Integration and Flexibility",
                    content:
                      "IPRIVE integrates seamlessly with your existing platform or marketplace via APIs, ensuring you can provide escrow services without disrupting your current operations. Plus, we offer customizable dashboard login solutions to meet your unique needs.",
                  },
                  {
                    title: "Unmatched Speed - Go live faster than ever",
                    content:
                      "IPRIVE ensures faster, transactions with real-time tracking, giving businesses complete peace of mind.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-[#FDF8F0] p-2 rounded-full mt-0.5">
                      <Check className="h-5 w-5 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                When it comes to secure, fast, and efficient escrow services,
                IPRIVE is the clear choice. We're not just a payment processor;
                we're your trusted partner in every transaction.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-900">
                Ready to elevate your transaction security? Reach out to us now,
                and let's discuss how we can help you build trust with your
                customers and streamline your payment processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Information Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form - Left Side */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#FDF8F0]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FDF8F0] border-2 border-gray-800 hover:bg-[#F0E6D6] text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    Contact Us
                  </button>
                </form>
              </div>

              {/* Office Information - Right Side */}
              <div className="lg:w-1/2 space-y-8 sticky top-8">
                <h2 className="text-[oklch(0.257_0.09_281.288)] font-bold text-2xl mb-6">
                  Our Offices
                </h2>

                {offices.map((office, index) => (
                  <div key={index} className="space-y-4">
                    <div className="bg-white p-6 rounded-xl border border-[oklch(0.257_0.09_281.288)/0.2] shadow-sm">
                      <h3 className="text-xl font-bold text-[oklch(0.257_0.09_281.288)] mb-4">
                        {office.name}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          {office.icon}
                          <div>
                            {office.details.map((detail, i) => (
                              <p key={i} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-[oklch(0.257_0.09_281.288)] mr-2" />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-[oklch(0.257_0.09_281.288)] mr-2" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={office.mapUrl}
                        className="w-full h-64 rounded-lg border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
