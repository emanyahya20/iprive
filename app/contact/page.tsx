import ContactUs from "@/components/contact-us"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <ContactUs />
      <Footer />
    </div>
  )
}
