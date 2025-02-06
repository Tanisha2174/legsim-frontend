"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useEffect, useState } from 'react';

export default function PracticeAreas() {
  const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/offerings');
        const data = await response.json();
        setOfferings(data);
      } catch (error) {
        console.error('Error fetching offerings:', error);
      }
    };

    fetchOfferings();
  }, []);

  return (
    <main className="bg-[#ffffff] min-h-screen">
  <section className="w-full mx-auto py-16 px-6">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl sm:text-5xl mb-8 font-extrabold mx-4 text-[#462A03]">OUR OFFERINGS</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 md:gap-20">
        {offerings.map((offering, index) => (
          <a
            key={index}
            href={offering.link}
            className="bg-[#FFF7EB] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow block"
          >
            <img
              src={offering.image}
              alt={offering.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#462A03]">{offering.title}</h3>
            <p className="text-[#583502] pt-1 text-lg sm:text-xl font-normal">{offering.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
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
