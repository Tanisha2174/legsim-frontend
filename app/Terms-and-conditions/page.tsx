"use client";

export default function TermsConditions() {
  return (
    <main className="bg-[#ffffff] flex flex-col min-h-screen">
      {/* Terms & Conditions Content */}
      <section className="w-full mx-auto flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#462A03] pb-8 mb-6 text-center">
          Terms & Conditions
        </h1>

        <div className="px-4 sm:px-8 md:px-32 lg:px-64">
          <p className="text-2xl text-[#6C4104] mb-2">
            Welcome to LEGSIM. By accessing and using our website, services, and resources, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <p className="text-2xl text-[#6C4104] mb-6">
            Please read them carefully before proceeding. If you do not agree with any part of these terms, you should refrain from using our services.
          </p>

          {[
            {
              title: "1. General Terms",
              content: [
                "1.1 These terms and conditions govern your use of LEGSIM’s website and legal services.",
                "1.2 We reserve the right to update, modify, or change these terms at any time without prior notice. It is your responsibility to review these terms regularly.",
                "1.3 Our services are provided 'as is' without any warranties or guarantees of success in legal matters."
              ]
            },
            {
              title: "2. Eligibility & Use of Services",
              content: [
                "2.1 Our legal services are available to individuals, startups, businesses, and organizations seeking legal assistance within our areas of expertise.",
                "2.2 You agree to provide accurate and truthful information when engaging our services or submitting inquiries.",
                "2.3 You shall not use our services for any unlawful activities, fraud, misrepresentation, or violation of intellectual property rights."
              ]
            },
            {
              title: "3. Company Name Registration & Compliance",
              content: [
                "3.1 Uniqueness: Company names registered through our services must not be identical or misleadingly similar to existing businesses or trademarks.",
                "3.2 Restricted Names: Certain names may be prohibited under the Companies Act 2013, including names that are offensive, deceptive, or misleading.",
                "3.3 Approval Process: The final approval of any company name is subject to government regulations and Registrar of Companies (RoC) verification."
              ]
            },
            {
              title: "4. Intellectual Property Rights (IPR) Protection",
              content: [
                "4.1 We assist in trademark, patent, and copyright registration to protect your brand and intellectual assets.",
                "4.2 LEGSIM does not guarantee the approval of any application by government authorities, as it depends on legal examination and compliance.",
                "4.3 Clients must ensure that their applications do not infringe on existing intellectual property rights."
              ]
            },
            {
              title: "5. Service Fees & Payment Terms",
              content: [
                "5.1 Our fees are transparent and displayed on our website or provided in official quotations.",
                "5.2 Payments must be made in full before the commencement of services, unless otherwise agreed upon.",
                "5.3 All fees are exclusive of government taxes and regulatory charges, which must be borne by the client.",
                "5.4 Refunds are processed only under exceptional circumstances where LEGSIM is unable to deliver the agreed-upon services."
              ]
            },
            {
              title: "6. Limitation of Liability",
              content: [
                "6.1 LEGSIM provides legal consultation and support services, but we do not offer direct representation in courts or legal proceedings.",
                "6.2 We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.",
                "6.3 We do not guarantee specific legal outcomes, as they depend on regulatory authorities and legal frameworks."
              ]
            },
            {
              title: "7. Confidentiality & Data Protection",
              content: [
                "7.1 We prioritize the confidentiality of client information and take reasonable measures to protect it.",
                "7.2 By using our services, you consent to LEGSIM collecting and processing your data in accordance with our Privacy Policy.",
                "7.3 We do not sell, share, or misuse your personal or business information."
              ]
            },
            {
              title: "8. Governing Law & Dispute Resolution",
              content: [
                "8.1 These terms and conditions are governed by the laws of India.",
                "8.2 Any disputes shall be first attempted to be resolved through negotiation or mediation. If unresolved, they shall be subject to the jurisdiction of courts in New Delhi, India."
              ]
            }
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-[#462A03] mt-6">{section.title}</h2>
              <p className="text-2xl text-[#6C4104] mt-4">
                {section.content.map((point, idx) => (
                  <span key={idx}>
                    {point}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}

          <p className="text-2xl text-[#6C4104] mt-6">
            If you have any questions regarding these Terms & Conditions, you may contact us.<br />
            By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
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
