"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PrivateLimited() {
  const [data, setData] = useState(null);
  const category = "Licenses and Certification";
  const subService = "Shops and Establishment Act Registration"; // Static, replace with dynamic if needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedCategory = category.replace(/\s+/g, "-"); // Convert to URL-friendly format
        const formattedSubService = subService.replace(/\s+/g, "-");

        console.log("Formatted Category:", formattedCategory); // Log to verify
        console.log("Formatted Sub-service:", formattedSubService); 

        const response = await fetch(
          `http://localhost:5000/api/${formattedCategory}/${formattedSubService}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (category && subService) {
      fetchData();
    }
  }, [category, subService]);

  if (!data) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  // Ensure headings and regulations are arrays before calling .map()
  const headings = Array.isArray(data.headings) ? data.headings : [];
  const regulations = Array.isArray(data.regulations) ? data.regulations : [];

  return (
    <main className="bg-[#ffffff] flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl md:pl-16 md:text-6xl font-bold text-[#462A03]">{data.title}</h1>

        <p className="text-[#6C4104] md:pl-16 mt-6 text-lg sm:text-2xl md:text-2xl  max-w-7xl">
          {data.description}
        </p>

        {headings.map((heading, index) => (
          <div key={index}>
            <h2 className="text-2xl md:pl-16 sm:text-3xl md:text-3xl mb-4 font-semibold text-[#462A03] mt-8">
              {heading.headingTitle}
            </h2>
            <ul className="space-y-4 pl-4 sm:pl-8 md:pl-16 text-lg md:text-2xl sm:text-xl text-[#6C4104]">
              {heading.content.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-xl md:text-2xl">✅</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Regulations */}
        {regulations.map((reg, index) => (
          <div key={index}>
            <h2 className="text-2xl md:pl-16 sm:text-3xl md:text-3xl font-semibold text-[#462A03] mt-10">
              {reg.headingTitle}
            </h2>
            <p className="text-[#6C4104] md:pl-16 text-lg md:text-2xl sm:text-xl mt-4">{reg.description}</p>
            <ul className="mt-4 text-lg sm:text-xl md:text-2xl pl-4 sm:pl-8 md:pl-16 text-[#6C4104] space-y-4">
              {reg.points.map((point, idx) => (
                <li key={idx}>
                  <strong>🔹 {point.title}:</strong> {point.description}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex pl-4 sm:pl-8 md:pl-16 pb-12 pr-4 sm:pr-8 md:pr-16 space-x-4 mt-8">
          <Link href="/Terms-and-conditions">
            <button className="border border-[#6C4104] text-lg sm:text-xl px-4 py-2 rounded-lg hover:bg-[#FFE5C0]">
              Terms & Conditions
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="bg-[#AC6604] text-lg sm:text-xl text-white px-4 py-2 rounded-lg hover:bg-[#6C4104]">
              Get Started →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#462A03] text-[#FFE5C0]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 pl-4 sm:pl-8 lg:pl-48 pr-4 sm:pr-8 lg:pr-48 text-lg gap-4">
            <div>
              <h3 className="font-bold mb-4">LEGSIM</h3>
              <ul className="space-y-2">
                <li><a href="/who-we-are" className="hover:text-[#AC6604]">About LEGSIM</a></li>
                <li><a href="/career" className="hover:text-[#AC6604]">Careers</a></li>
                <li><a href="/contact-us" className="hover:text-[#AC6604]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social Media</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#AC6604]">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#AC6604]">Instagram</a></li>
                <li><a href="#" className="hover:text-[#AC6604]">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Usage</h3>
              <ul className="space-y-2">
                <li><a href="/Terms-and-conditions" className="hover:text-[#AC6604]">Terms & Conditions</a></li>
                <li><a href="/PrivacyPolicy" className="hover:text-[#AC6604]">Privacy Policy</a></li>
                <li><a href="/RefundPolicy" className="hover:text-[#AC6604]">Refund Policy</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="/ConfidentialityPolicy" className="hover:text-[#AC6604]">Confidentiality Policy</a></li>
                <li><a href="/DisclaimerPolicy" className="hover:text-[#AC6604]">Disclaimer Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#6C4104] mt-8 pt-8 text-center">
            <p className="text-lg">© 2024 LEGSIM Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
