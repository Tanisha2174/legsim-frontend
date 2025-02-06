"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#462A03] mb-8 text-center md:text-left md:pl-48">
            WHO WE ARE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Image Section */}
            <div className="relative h-[250px] sm:h-[400px] flex justify-center md:pl-32">
              <img
                src="/images/image.png"
                alt="Team meeting"
                className="w-full sm:w-[90%] h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-6 text-center md:text-left px-4 sm:px-6 md:pr-32">
              <p className="text-[#6C4104] text-lg sm:text-2xl md:text-3xl md:pr-32">
              At LEGSIM, we are committed to simplifying legal processes for
                businesses, nonprofits, and individuals. Our mission is to
                provide accessible, efficient, and affordable legal solutions,
                ensuring compliance and protection at every step. With a team of
                experienced legal professionals, we specialize in business
                registrations, intellectual property protection, compliance
                management, dispute resolution, and more. Whether you’re a
                startup, a growing enterprise, or an NGO, we streamline complex
                legal requirements so you can focus on what truly
                matters—building and scaling your vision. We believe that legal
                services should be transparent, hassle-free, and tailored to
                your needs. That’s why we leverage technology and expertise to
                offer seamless legal support, guiding you through every stage
                with clarity and confidence. At LEGSIM, your legal security is
                our priority. Let’s build a strong foundation for your success!
              </p>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="w-full mx-auto md:pl-32 px-4 sm:px-6 md:px-64 pt-12">
            <h2 className="md:text-4xl sm:text-4xl font-bold text-[#462A03] mb-6 md:pl-20">
              What We Do
            </h2>
            <ul className="md:text-3xl sm:text-2xl text-[#6C4104] list-disc list-inside space-y-4 mb-12 md:pl-20 md:pr-32">
              <li>
                <strong>Company, Society & Trust Registration</strong> – Helping
                businesses and nonprofit organizations register legally and
                efficiently.
              </li>
              <li>
                <strong>IPR Protection</strong> – Safeguarding your brand,
                trademarks, copyrights, and patents.
              </li>
              <li>
                <strong>Regulatory Compliance & Tax Filings</strong> – Ensuring
                businesses meet all legal and financial requirements.
              </li>
              <li>
                <strong>Licenses & Certifications</strong> – Assisting in
                obtaining essential business licenses and industry-specific
                approvals.
              </li>
              <li>
                <strong>Legal Consultancy & Dispute Resolution</strong> –
                Providing expert legal advice and representation.
              </li>
            </ul>
            

            {/* Our Mission */}
            <h2 className="md:text-4xl sm:text-4xl font-bold text-[#462A03] mb-6 md:pl-20">
              Our Mission
            </h2>
            <p className="md:text-3xl sm:text-2xl text-[#6C4104] leading-relaxed mb-12 md:pl-20 md:pr-32">
            Our mission is to simplify legal processes and empower businesses by providing affordable, transparent, and high-quality legal solutions. 
            We aim to be a one-stop legal partner, ensuring that our clients operate legally, securely, and with confidence.
            </p>

            {/* Why Choose Us */}
            <h2 className="md:text-4xl sm:text-4xl font-bold text-[#462A03] mb-6 md:pl-20 pl-20">
              Why Choose LEGSIM?
            </h2>
            <ul className="md:text-3xl sm:text-2xl text-[#6C4104] space-y-4 mb-12 md:pl-20 md:pr-32">
              <li>✔ <strong>Expert Guidance</strong> – A team of skilled legal professionals dedicated to your success.</li>
              <li>✔ <strong>End-to-End Support</strong> – From registration to compliance, we handle everything.</li>
              <li>✔ <strong>Tailored Solutions</strong> – Services customized to meet your specific business and legal needs.</li>
              <li>✔ <strong>Efficiency & Transparency</strong> – A seamless process with clear communication and no hidden costs.</li>
            </ul>
            

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-2xl sm:text-4xl font-semibold text-[#462A03] mb-6">
                Contact us today for expert legal solutions.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#462A03] hover:bg-[#6C4104] text-[#FFF7EB] text-lg sm:text-xl font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
