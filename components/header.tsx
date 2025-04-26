"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToConcierge = () => {
    const conciergeSection = document.getElementById("concierge");
    if (conciergeSection) {
      conciergeSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // List of pages that should have transparent header by default
  const transparentHeaderPages = [
    "/",
    "/about",
    "/team",
    "/contact",
    "/knowledge-center",
    "/trust",
    "/trump",
    "/startup",
    "/private",
    "/jumbo",
    "/global",
    "/citizenship",
  ];

  // Check if current page should have transparent header
  const shouldHaveTransparentHeader = transparentHeaderPages.includes(pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : shouldHaveTransparentHeader
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logos with explicit margin */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/ft01.png"
                alt="Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <div className="w-8"></div> {/* Explicit spacer element */}
            <a
              href="http://iTrustmore.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/ft2.png"
                alt="Trustmore Logo"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-8">
            <div className="flex space-x-2">
              <Link
                href="/"
                className={`text-base font-semibold px-1.5 ${
                  pathname === "/"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-base font-semibold px-1.5 ${
                  pathname === "/about"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/team"
                className={`text-base font-semibold px-1.5 ${
                  pathname === "/team"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-white"
                }`}
              >
                Team
              </Link>

              <Link
                href="/knowledge-center"
                className={`text-base font-semibold px-1.5 ${
                  pathname === "/knowledge-center"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-white"
                }`}
              >
                Knowledge Center
              </Link>
              <Link
                href="/contact"
                className={`text-base font-semibold px-1.5 ${
                  pathname === "/contact"
                    ? isScrolled
                      ? "text-gray-900"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white hover:text-white"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Desktop Buttons - Updated with conditional text color */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              className={`bg-transparent rounded-[8px] border-2 font-medium px-4 py-1.5 text-sm ${
                isScrolled || !shouldHaveTransparentHeader
                  ? "border-gray-800 text-gray-800"
                  : "border-white text-white"
              } hover:bg-transparent transition-colors`}
            >
              Client Login
            </button>
            <button
              onClick={scrollToConcierge}
              className={`bg-transparent rounded-[8px] border-2 font-medium px-4 py-1.5 text-sm ${
                isScrolled || !shouldHaveTransparentHeader
                  ? "border-gray-800 text-gray-800"
                  : "border-white text-white"
              } hover:bg-transparent transition-colors`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled || !shouldHaveTransparentHeader
                ? "text-gray-900"
                : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-white shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/media"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Media
            </Link>
            <Link
              href="/knowledge-center"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge Center
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <button className="w-full bg-transparent rounded-[8px] border-2 font-bold py-2 border-gray-800 text-gray-800 hover:bg-transparent transition-colors">
                Client Login
              </button>
              <button
                onClick={scrollToConcierge}
                className="w-full bg-transparent rounded-[8px] border-2 font-bold py-2 border-gray-800 text-gray-800 hover:bg-transparent transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
