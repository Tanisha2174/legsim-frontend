"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StartupsAndMSME() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/startup-msme")
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]); // Assuming only one document exists
        setFilteredPackages(data[0].packages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.packages.filter((pkg) =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.features.some((feature) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredPackages(filtered);
    }
  }, [searchTerm, data]);

  if (!data) {
    return <p className="text-center text-2xl font-bold mt-10">Loading...</p>;
  }

  return (
    <main className="bg-[#ffffff] flex flex-col min-h-screen">
      <section className="w-full mx-auto flex-grow px-4 md:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#462A03] leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-[#6C4104] text-xl sm:text-2xl mt-6">
              {data.hero.description}
            </p>
          </div>
        </div>

        {/* Search Bar (Left-Aligned on Desktop, Right-Aligned on Mobile) */}
        <div className="flex justify-start md:justify-start mt-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2 h-6 w-6 text-[#AC6604]" />
            <Input
              type="text"
              placeholder="Search any service or feature"
              className="pl-10 py-3 border border-[#AC6604] text-xl rounded-2xl focus:ring-[#6C4104] w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {["Start-Up Packages", "Startups Yet to Register", "New MSMEs (Not registered in ROC)"].map(
          (category, index) => (
            <section key={index} className="mt-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#462A03]">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                {filteredPackages
                  .filter((pkg) => pkg.category === category)
                  .map((pkg, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFFBF5] rounded-xl shadow-lg p-6 border-t-8 border-[#AC6604] flex flex-col"
                    >
                      <h3 className="text-2xl font-bold text-[#462A03] mb-4">{pkg.name}</h3>
                      <p className="text-[#AC6604] text-4xl font-bold">{pkg.price}</p>
                      <p className="text-[#6C4104] pb-4 text-sm">{pkg.pricingDetails}</p>
                      <ul className="space-y-4 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-xl text-[#AC6604] mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Link href="/contact-us">
                          <Button className="w-full bg-[#462A03] text-[#FFE5C0] py-3 md:text-xl rounded-lg">
                            CONTACT US NOW →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )
        )}
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


