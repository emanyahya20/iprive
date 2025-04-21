"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            {/* Logo Stack - Vertical Layout with proper spacing */}
            <div className="flex flex-col gap-6 mb-8">
              {/* First Logo - On Top */}
              <div className="h-12 w-auto">
                <img
                  src="/footerlogo/ft01.png"
                  alt="iPrive Logo"
                  className="h-full w-auto object-contain max-w-[180px]"
                />
              </div>

              {/* Second and Third Logos - Below */}
              <div className="flex items-center gap-6">
                {/* Second Logo */}
                <div className="h-10 w-auto">
                  <img
                    src="/footerlogo/ft1.png"
                    alt="Partner Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </div>

                {/* Third Logo - Clickable */}
                <a href="http://iTrustmore.com" target="_blank" rel="noopener noreferrer" className="h-10 w-auto block">
                  <img
                    src="/footerlogo/ft2.png"
                    alt="Trustmore Logo"
                    className="h-full w-auto object-contain max-w-[120px]"
                  />
                </a>
              </div>
            </div>

            <p className="text-gray-600">
              The trusted leader in digital escrow services for over 10 years, providing secure, seamless, and
              transparent transactions for businesses worldwide. Innovating payments with enterprise-grade security and
              personalized support for every deal.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/trustmoretech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2Ftrustmorehq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                  aria-label="X (Twitter)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Trustmorehq?mibextid=ZbWK4v1648226618021!5m2!1sen!2sin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/trustmoregroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCcwBLC05uEbmuFPkNCcDOuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[oklch(0.257_0.09_281.288)]"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="font-medium text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className={`font-medium ${
                    pathname === "/team"
                      ? "text-[oklch(0.257_0.09_281.288)]"
                      : "text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                  }`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className={`font-medium ${
                    pathname === "/media"
                      ? "text-[oklch(0.257_0.09_281.288)]"
                      : "text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                  }`}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-center"
                  className={`font-medium ${
                    pathname === "/knowledge-center"
                      ? "text-[oklch(0.257_0.09_281.288)]"
                      : "text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                  }`}
                >
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`font-medium ${
                    pathname === "/contact"
                      ? "text-[oklch(0.257_0.09_281.288)]"
                      : "text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://itrustmore.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://itrustmore.com/terms-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 hover:text-[oklch(0.257_0.09_281.288)]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Subscribe</h3>
            <p className="text-gray-600 mb-4">Stay updated with our latest news and offers</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-50 border-2 border-gray-800 text-gray-800 placeholder-gray-400 rounded-none focus:ring-0 focus:border-gray-800 focus:outline-none"
              />
              <Button
                type="submit"
                variant="outline"
                className="rounded-none border-2 font-semibold border-gray-800 text-gray-800 bg-transparent hover:bg-gray-100 hover:text-gray-800 active:bg-gray-200 active:text-gray-800 focus:ring-0 focus:ring-offset-0 focus:outline-none active:scale-[0.98] transition-all"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-gray-500 text-xs mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg mx-auto text-center">
          <p className="text-xs text-gray-600">
            Your iPrive digital escrow account is provided through RBI-licensed banks. We follow necessary security
            standards like PCI DSS etc.
            <span className="block">
              iPrive itself is not a bank and doesn't hold or claim to hold a banking license.
            </span>
          </p>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} iPrive by Trustmore Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
