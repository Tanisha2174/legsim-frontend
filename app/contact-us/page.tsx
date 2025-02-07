"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    files: []  as File[],
  });

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files : Array.from(e.target.files) as File[] });
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    (Object.keys(formData) as Array<keyof typeof formData>).forEach((key) => {
      if (key === "files") {
        formData[key].forEach((file) => {
          formDataToSend.append("files", file);
        });
      } else {
        formDataToSend.append(key, formData[key] as string);
      }
    });
  
    try {
      const response = await fetch("https://legsim-backend-production.up.railway.app/api/contact/submit", {
        method: "POST",
        body: formDataToSend,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <main>
      <div className="bg-[#ffffff]">
        <section className="py-20 sm:py-32 bg-[#FDFBF8]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-32 items-center">
              <div>
                <div className="flex items-center pb-6 sm:pb-8">
                  <div className="w-24 sm:w-48 border-t-2 border-[#AC6604]"></div>
                  <h2 className="text-xl sm:text-2xl font-normal mx-4 text-[#AC6604]">LEGSIM</h2>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#462A03] mb-6 sm:mb-8">
                  Questions?
                </h2>
                <p className="text-[#6C4104] text-lg sm:text-2xl leading-relaxed mb-6 sm:mb-8">
                  At LEGSIM, we believe that legal services should be accessible, efficient, and
                  affordable for everyone.
                </p>
                <button className="bg-[#462A03] hover:bg-[#6C4104] text-[#FFF7EB] text-lg font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 w-full sm:w-auto">
                  REQUEST A FREE CONSULTATION →
                </button>
              </div>

              {/* Form Section */}
              <div className="bg-[#FFF7EB] p-8 sm:p-12 rounded-3xl shadow-xl">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D2B48C] rounded-lg focus:outline-none"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-[#D2B48C] rounded-lg focus:outline-none"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#D2B48C] rounded-lg focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#D2B48C] rounded-lg focus:outline-none"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your legal needs"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#D2B48C] rounded-lg h-32 resize-none focus:outline-none"
                    required
                  />
                  <div>
                    <p className="text-[#6C4104] text-lg sm:text-xl">
                      Upload any relevant documents (if required):
                    </p>
                    <input
                      type="file"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      className="w-full h-12 p-2 bg-[#ffffff] border border-[#D2B48C] rounded-lg focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#462A03] hover:bg-[#6C4104] text-[#FFF7EB] text-lg font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
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
