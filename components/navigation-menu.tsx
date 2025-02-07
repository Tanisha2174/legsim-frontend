"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#ffffff] text-[#000000] py-2 sm:py-4"> {/* Reduced padding */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 sm:h-16"> {/* Reduced height */}
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-12 sm:h-16" /> {/* Reduced logo size */}
          </Link>
          <span className="hidden md:block text-xl font-semibold">
            Available 24/7 | Free Consultations
          </span>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact-us">
              <button className="bg-[#6C4104] hover:bg-[#AC6604] text-[#ffffff] px-6 py-2 rounded-lg text-xl font-semibold">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#462A03] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Reduced icon size */}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FFE5C0] border-b border-[#AC6604]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-evenly h-14 sm:h-16"> {/* Reduced height */}
            <Link href="/" className="text-[#462A03] hover:text-[#AC6604] text-xl font-medium">
              Home
            </Link>
            <Link href="/who-we-are" className="text-[#462A03] hover:text-[#AC6604] text-lg font-medium">
              Who we are
            </Link>
            
            {/* Dropdown Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href="/practice-areas">
                <button className="flex items-center text-[#462A03] hover:text-[#AC6604] text-lg font-medium focus:outline-none">
                  Practice Areas & Focus
                  <ChevronDown className="ml-1 h-5 w-5" />
                </button>
              </Link>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-[#FFE5C0] rounded-md shadow-lg py-2 z-50">
                  {[
                    "Company Registration",
                    "IPR Registration",
                    "Consumer Case Filing/Consultancy",
                    "Licences and Certification",
                    "Compliances and Returns",
                    "Legal and Business Consultancy Services",
                  ].map((item, index) => {
                    const slug =
                      item === "Consumer Case Filing/Consultancy"
                        ? "Consumer-Case-Filing_Consultancy"
                        : item.replace(/\s+/g, "-");

                    return (
                      <Link
                        key={index}
                        href={`/practice-areas/${slug}`}
                        className="block px-4 py-2 text-[#462A03] text-lg hover:bg-[#462A03] hover:text-[#FFE5C0] transition"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/startups-msme" className="text-[#462A03] hover:text-[#AC6604] text-lg font-medium">
              Start-ups & MSME
            </Link>
            <Link href="/contact-us" className="text-[#462A03] hover:text-[#AC6604] text-lg font-medium">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFE5C0] px-4 py-2 space-y-2"> {/* Reduced padding & spacing */}
            <Link
              href="/"
              className="block text-[#462A03] hover:text-[#AC6604] text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/who-we-are"
              className="block text-[#462A03] hover:text-[#AC6604] text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Who we are
            </Link>

            {/* Mobile Dropdown Menu */}
            <Link href="/practice-areas">
              <button
                className="flex items-center justify-between w-full text-[#462A03] hover:text-[#AC6604] text-lg font-medium"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Practice Areas & Focus
                <ChevronDown className="h-5 w-5" />
              </button>
            </Link>
            {isDropdownOpen && (
              <div className="pl-4 space-y-1"> {/* Reduced spacing */}
                {[
                  "Company Registration",
                  "IPR Registration",
                  "Consumer Case Filing/Consultancy",
                  "Licences and Certification",
                  "Compliances and Returns",
                  "Legal and Business Consultancy Services",
                ].map((item, index) => {
                  const slug =
                    item === "Consumer Case Filing/Consultancy"
                      ? "Consumer-Case-Filing_Consultancy"
                      : item.replace(/\s+/g, "-");

                  return (
                    <Link
                      key={index}
                      href={`/practice-areas/${slug}`}
                      className="block text-[#462A03] text-lg hover:bg-[#462A03] hover:text-[#FFE5C0] transition px-2 py-1 rounded"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            )}

            <Link
              href="/startups-msme"
              className="block text-[#462A03] hover:text-[#AC6604] text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Start-ups & MSME
            </Link>
            <Link
              href="/contact-us"
              className="block text-[#462A03] hover:text-[#AC6604] text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
