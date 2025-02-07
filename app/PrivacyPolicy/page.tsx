"use client";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#ffffff] flex flex-col min-h-screen">
  {/* Privacy Policy Content */}
  <section className="w-full flex-grow mx-auto py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#462A03] pb-6 mb-4 text-center">
      Privacy Policy
    </h1>

    <div className="px-4 sm:px-8 md:px-16 lg:px-32">
      <p className="text-lg sm:text-xl md:text-2xl text-[#6C4104] mb-4 leading-relaxed">
        Your privacy is important to us at LEGSIM. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>
      <p className="text-lg sm:text-xl md:text-2xl text-[#6C4104] mb-6 leading-relaxed">
        By using our services, you consent to the collection and use of your data as outlined below.
      </p>

      {[
        {
          title: "1. Information Collection",
          content: [
            "We collect personal information such as your name, email address, and contact details when you use our services or communicate with us."
          ]
        },
        {
          title: "2. Data Use",
          content: [
            "Your personal information is used to provide you with our services, respond to your inquiries, and improve our offerings."
          ]
        },
        {
          title: "3. Data Protection",
          content: [
            "We take reasonable steps to protect your data from unauthorized access, alteration, and destruction."
          ]
        },
        {
          title: "4. Sharing of Information",
          content: [
            "We do not sell, rent, or share your personal information with third parties except as required by law."
          ]
        },
        {
          title: "5. Changes to Privacy Policy",
          content: [
            "We may update our Privacy Policy from time to time, and any changes will be posted on this page."
          ]
        }
      ].map((section, index) => (
        <div key={index}>
          <h2 className="text-xl sm:text-2xl font-bold text-[#462A03] mt-6">{section.title}</h2>
          <p className="text-lg sm:text-xl text-[#6C4104] mt-4 leading-relaxed">
            {section.content.map((point, idx) => (
              <span key={idx}>
                {point}
                <br />
              </span>
            ))}
          </p>
        </div>
      ))}

      <p className="text-lg sm:text-xl text-[#6C4104] mt-4 leading-relaxed">
        By continuing to use our services, you consent to our privacy practices.
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
