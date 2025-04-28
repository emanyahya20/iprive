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
        "Ground Floor, 7A, Standard Chartered Tower",
        "DLF Cyber City, DLF Phase 2, Sector 24",
        "Gurugram, Haryana 122001",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.942780899109!2d77.09392331507731!3d28.49624808250033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f8b13f1e0a5%3A0x9d3b6e5b6e5b6e5b!2sStandard%20Chartered%20Tower%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin",
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  <span className="block">Get in Touch with IPRIVE</span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-3 sm:mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                    Your Trusted Payment Partner
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Information Section */}
      <section
        id="form"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#f9f7f4]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-white border-2 border-gray-800 hover:bg-[#f9f7f4] text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors w-full sm:w-auto"
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
