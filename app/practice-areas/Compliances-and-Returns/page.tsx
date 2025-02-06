"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Define types for the services data
interface PreCardContent {
  title: string;
  description: string;
}

interface ServiceItem {
  name: string;
  description: string;
  href: string;
}

interface ServicesData {
  preCardContent: PreCardContent;
  services: ServiceItem[];
}

const CompliancesReturns = () => {
  const [services, setServices] = useState<ServicesData | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://legsim-backend-production.up.railway.app/api/services/Compliances%20and%20Returns');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  if (!services) return <div>Loading...</div>;

  return (
    <main className="bg-[#FFF7EB] min-h-screen flex flex-col">
      <section className="py-12 bg-[#F9F7F2] flex-grow px-6 sm:px-8 lg:px-16">
        <div className="w-full mx-auto pl-4 sm:pl-16 md:pl-32 lg:pl-48 pr-4 sm:pr-8 lg:pr-16">
          <div className="flex items-center">
            <div className="w-80 border-t-2 pr-4 border-[#AC6604]"></div>
            <h2 className="font-kumbh text-[20px] sm:text-[24px] text-[#AC6604] tracking-wider uppercase">
              {services.preCardContent.title}
            </h2>
          </div>

          <p className="mt-4 text-[16px] sm:text-[19px] pr-4 sm:pr-8 lg:pr-32 pt-4 pb-4 text-[#462A03] font-inter font-medium leading-relaxed">
            {services.preCardContent.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {services.services.map((service, index) => (
              <div key={index} className="bg-[#FFF7EB] p-6 rounded-2xl shadow-lg flex flex-col items-start relative hover:shadow-2xl transition transform hover:scale-105">
                <h3 className="text-[21px] sm:text-[24px] font-semibold font-open text-[#462A03]">{service.name}</h3>
                <p className="text-[16px] sm:text-[18px] text-[#462A03] font-open font-regular mt-2 leading-relaxed">{service.description}</p>
                <Link href={service.href} passHref>
                  <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-[#FFE5C0] rounded-full cursor-pointer hover:bg-[#FFD699] transition">
                    <ArrowUpRight className="w-8 h-8 text-[#462A03]" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
};

export default CompliancesReturns;


