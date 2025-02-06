"use client";

export default function RefundPolicy() {
  return (
    <main className="bg-[#ffffff] flex flex-col min-h-screen"> 
  {/* Refund Policy Content */}
  <section className="w-full mx-auto flex-grow py-16 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#462A03] pb-8 mb-6 text-center">
      Refund Policy
    </h1>

    <div className="px-4 sm:px-8 md:px-32 lg:px-64">
      <p className="text-2xl text-[#6C4104] mb-2">
        LEGSIM strives to provide high-quality legal services. However, we understand that there may be instances where a refund is necessary.
      </p>
      <p className="text-2xl text-[#6C4104] mb-6">
        This Refund Policy outlines the conditions under which refunds may be provided.
      </p>

      {[
        {
          title: "1. Refund Eligibility",
          content: [
            "Refunds may be considered under exceptional circumstances if we are unable to deliver the agreed-upon services."
          ]
        },
        {
          title: "2. Non-Refundable Services",
          content: [
            "Certain services, such as consultations or legal opinions, may not be eligible for a refund once delivered."
          ]
        },
        {
          title: "3. Refund Request Process",
          content: [
            "To request a refund, please contact us within 7 days of service delivery with a valid reason for the refund."
          ]
        },
        {
          title: "4. Refund Approval",
          content: [
            "Refunds are processed on a case-by-case basis and are subject to our review and approval.",
            "Refunds, if approved, will be issued via the original payment method."
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
