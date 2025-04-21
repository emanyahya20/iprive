import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "iPrive has transformed how we handle large business transactions. Their platform is secure, intuitive, and their customer service is exceptional.",
      author: "Rajesh Kumar",
      title: "CEO, TechSolutions India",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a real estate developer, I need a reliable escrow service. iPrive provides exactly that with their transparent process and secure platform.",
      author: "Priya Sharma",
      title: "Director, Horizon Properties",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The financial advisory services from iPrive have helped our company navigate complex transactions with confidence and security.",
      author: "Vikram Singh",
      title: "CFO, Global Enterprises",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[oklch(0.257_0.09_281.288)] mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from businesses and individuals who have experienced the security and efficiency of iPrive's escrow
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="text-[oklch(0.257_0.09_281.288)]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="inline-block h-5 w-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
