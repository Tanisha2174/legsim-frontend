"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    location: ""
  });

  const [roles, setRoles] = useState([]);
  const [locations, setLocations] = useState([]);

  // Fetch roles and locations from the backend
  useEffect(() => {
    const fetchRolesAndLocations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/roles-and-locations");
        const data = await response.json();
        setRoles(data.roles);
        setLocations(data.locations);
      } catch (error) {
        console.error("Error fetching roles and locations:", error);
      }
    };

    fetchRolesAndLocations();
  }, []);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/job-applications/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Error submitting application:", data.message);
      }
    } catch (error) {
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <main className="bg-[#ffffff] min-h-screen">
      <section className="w-full mx-auto py-16 px-6">
        <h1 className="md:text-6xl text-4xl md:pl-32 md:pr-32 font-open font-bold text-[#462A03]">
          Start your career with <span className="text-[#AC6604]">LEGSIM!</span>
        </h1>
        <p className="md:text-3xl text-xl md:pl-32 md:pr-32 pt-8 font-medium text-[#6C4104] mt-4">
          You can walk-in to any of our offices and meet our Recruiters to explore opportunities with LEGSIM and join our team.
        </p>

        <div className="grid md:grid-cols-2 md:pr-80 md:pl-32 gap-12 mt-12">
          {/* Left: Image */}
          <div>
            <img src="images/image.jpg" alt="Team Meeting" className="rounded-xl shadow-lg" />
          </div>

          {/* Right: Application Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-[#462A03] mb-6">Apply Online!</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="border-[#AC6604] text-xl"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="border-[#AC6604] text-xl"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                className="border-[#AC6604] text-xl"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="tel"
                placeholder="Phone No."
                name="phone"
                className="border-[#AC6604] text-xl"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                className="w-full p-3 border text-xl border-[#AC6604] rounded-lg focus:outline-none"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Roles Available</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <select
                className="w-full p-3 text-xl border border-[#AC6604] rounded-lg focus:outline-none"
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="">Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <Button className="w-full bg-[#462A03] hover:bg-[#6C4104] text-[#FFE5C0] pt-8 text-xl py-3 rounded-lg">
                APPLY NOW
              </Button>
            </form>
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
}
