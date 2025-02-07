"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  type Offering = {
    link: string;
    image: string;
    title: string;
    description: string;
  };
  
  const [offerings, setOfferings] = useState<Offering[]>([]);
  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const response = await fetch("https://legsim-backend-production.up.railway.app/api/offerings");
        const data = await response.json();
        setOfferings(data);
      } catch (error) {
        console.error("Error fetching offerings:", error);
      }
    };

    fetchOfferings();
  }, []);

  return (
    <main>
      {/* Hero Section */}
{/* Hero Section */}
<div className="relative min-h-[calc(100vh-24rem)] sm:min-h-[calc(100vh-24rem)] md:min-h-[calc(100vh-8rem)]">
  <div className="absolute inset-0">
    <img
      src="/images/image.jpg"
      alt="Office background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#462A03]/70"></div>
  </div>

  <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-2"> {/* Reduced top padding */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-10 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-20rem)]">
      
      {/* Left Column - Logo */}
      <div className="flex flex-col items-center px-4 md:px-20"> {/* Removed space-y */}
        {/* Mobile Logo Image */}
        <img
          src="/images/legsim_mobile.png"
          alt="Legsim Logo"
          className="w-full max-w-[550px] md:hidden h-auto"  // Increased width
        />

        {/* Desktop Logo Image */}
        <img
          src="/images/legsim.png"
          alt="Legsim Logo"
          className="w-[80%] sm:w-[75%] md:w-[150%] h-auto md:block hidden"
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="text-[#FFE5C0] text-center md:text-left space-y-0 sm:space-y-6 px-4 md:px-0 -mt-2"> {/* Pulled text closer to the image */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Growing Businesses.<br />
          Protecting Legacies.
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-[#ffffff] font-normal">
          Understanding Your Business <br />
          and Protecting Assets
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 pt-1 sm:pt-4"> {/* Reduced padding */}
          <Link href="/contact-us">
            <Button className="bg-[#AC6604] hover:bg-[#462A03] text-[#ffffff] text-lg font-normal px-6 sm:px-10 py-3 sm:py-4 rounded-md w-full md:w-auto">
              CONTACT US
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="text-[#462A03] border-[#FFE5C0] hover:bg-[#FFE5C0]/10 text-lg font-normal px-6 sm:px-10 py-3 sm:py-4 rounded-md w-full md:w-auto mt-2 md:mt-0"
            >
              FREE CONSULTATION
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Who We Help Section */}
      <section className="py-20 bg-[#ffffff]">
  <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title with Shorter Horizontal Line */}
    <div className="flex items-center justify-center">
      <div className="w-80 border-t-2 border-[#AC6604]"></div>
      <h2 className="text-4xl sm:text-3xl font-semibold mx-4 text-[#AC6604]">WHO WE HELP</h2>
      <div className="w-80 border-t-2 border-[#AC6604]"></div>
    </div>

    {/* First Row - Text and Image */}
    <div className="grid grid-cols-1 md:grid-cols-2 pl-0 md:pl-20 gap-8 mt-10">
      {/* Left Column - Text */}
      <div className="bg-[#ffffff] px-6 py-8 md:p-20 rounded-lg shadow-sm text-center md:text-left">
        <h3 className="text-3xl sm:text-2xl md:text-5xl font-extrabold md:pl-64 mb-4 text-[#462A03]">
          Small to large enterprises,
        </h3>
        <h3 className="text-3xl sm:text-2xl md:text-5xl font-extrabold md:pl-64 mb-4 text-[#462A03]">
          Entrepreneurs, Individuals
        </h3>
        <h3 className="text-3xl sm:text-2xl md:text-5xl font-extrabold md:pl-64 mb-4 text-[#462A03]">
          Seeking Legal Support,
        </h3>
        <h3 className="text-3xl sm:text-2xl md:text-5xl font-extrabold md:pl-64 mb-4 text-[#462A03]">
          NGOs & Trusts
        </h3>
      </div>

      {/* Right Column - Image (HIDDEN ON MOBILE) */}
      <div className="relative flex justify-center md:justify-start hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Team meeting"
          className="w-full sm:w-[90%] md:pr-64 h-[250px] md:h-[300px] object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Second Row - Image and Description */}
    <div className="grid grid-cols-1 md:grid-cols-2 pl-0 md:pl-20 pt-8">
      {/* Left Column - Image */}
      <div className="relative flex justify-center">
        <img
          src="/images/company2.webp"
          alt="Team meeting"
          className="w-full sm:w-[90%] md:pl-64 md:pr-8 h-[250px] md:h-[300px] object-cover rounded-lg"
        />
      </div>

      {/* Right Column - Text */}
      <div className="bg-[#ffffff] p-6 md:p-8 md:pr-64 rounded-lg shadow-sm text-center md:text-left">
        <p className="text-[#6C4104] text-lg md:text-2xl font-medium mb-6">
          LEGSIM isn't just a platform for handling legal requirements in India; we aim to be your trusted partner in achieving business success. Legal complexities can be a challenge for businesses of all sizes, and we understand that each organization has unique needs. Whether you're a startup registering your business, an SMB managing compliance, or an established company handling contracts and taxes, LEGSIM provides personalized, efficient, and cost-effective legal solutions.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/who-we-are">
            <Button
              variant="outline"
              className="text-[#462A03] border-[#462A03] hover:bg-[#6C4104]/10 text-xl md:text-2xl font-semibold px-6 md:px-8 py-3 md:py-5 rounded-3xl"
            >
              Learn more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* Our Offerings Section */}
      <section className="py-12 bg-[#ffffff]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#462A03] pb-8">
              OUR OFFERINGS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-64">
            {offerings.length > 0 ? (
              offerings.map((offering: Offering, index: number) => (
                <a
                  key={index}
                  href={offering.link}
                  className="bg-[#FFF7EB] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow block"
                >
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#462A03]">
                    {offering.title}
                  </h3>
                  <p className="text-[#583502] text-lg sm:text-xl font-normal">
                    {offering.description}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-center text-[#462A03] text-2xl">
                Loading offerings...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/MEETING.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#FFE5C0]/50 backdrop-blur-sm"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[#462A03]">
            REQUEST A FREE CONSULTATION
          </h2>
          <p className="text-[#6C4104] max-w-3xl mx-auto text-lg sm:text-xl font-medium">
          LEGSIM  is your trusted legal partner, providing expert guidance to startups, entrepreneurs, and established businesses. Whether you need assistance with company registration, intellectual property protection, compliance, or legal disputes, our experienced team offers tailored solutions to meet your specific needs.

We simplify complex legal processes, ensuring your business stays protected and compliant. With a client-centric approach, we prioritize transparency, efficiency, and strategic advice to help your business thrive.
          </p>
          <Link href="/contact-us">
            <button className="mt-6 bg-[#462A03] hover:bg-[#6C4104] text-[#FFE5C0] text-lg sm:text-xl font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              REQUEST A FREE CONSULTATION →
            </button>
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {/* <section className="py-20 bg-[#FFF7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-2">
              <span className="text-[#AC6604]">LEGSIM</span>
              <h2 className="text-3xl font-bold text-[#462A03]">RECENT BLOG POST</h2>
            </div>
            <Button 
              variant="outline" 
              className="border-[#462A03] text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0]"
            >
              READ MORE →
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"
                  alt="City skyline"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <div className="text-sm text-[#6C4104]">
                    By Rocco Cozza • October 16, 2024
                  </div>
                  <h3 className="font-bold text-[#462A03]">
                    Probate Process in Pennsylvania: What You Need to Know
                  </h3>
                  <div>
                    <Button 
                      variant="link"
                      className="text-[#462A03] hover:text-[#6C4104] p-0 flex items-center"
                    >
                      READ MORE <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Client Testimonials */}
      <section id="reviews" className="py-24 bg-[#FDFBF8]">
  <div className="max-w-[1400px] mx-auto px-8 lg:px-16 ">

    {/* Section Heading */}
    <div className="flex items-center justify-center">
      <div className="w-80 border-t-2 pb-20 border-[#462A03]"></div> {/* Shortened line */}
      <h2 className="text-4xl pb-20 font-bold mx-4 text-[#462A03]">WHAT OUR CLIENT'S SAY</h2>
      <div className="w-80 border-t-2 pb-20 border-[#462A03]"></div>
    </div>

    {/* Testimonial Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
      <div className="bg-[#FFF7EB] p-12 rounded-3xl shadow-xl">
        <div className="text-8xl text-[#462A03] mb-6">❝</div>
        <h3 className="font-bold text-[#462A03] text-3xl mb-6 leading-snug">
          A life-changing experience
        </h3>
        <p className="text-[#6C4104] text-xl leading-relaxed mb-8">
          Thanks to LEGSIM, I was able to resolve a long-standing legal issue that had been weighing me down for years. Their team was highly professional and compassionate throughout the process, making it easier for me to navigate through.
        </p>
        <div className="text-[#6C4104] text-xl font-semibold mb-6">— Emma Williams</div>
      </div>

      <div className="bg-[#FFF7EB] p-12 rounded-3xl shadow-xl">
        <div className="text-8xl text-[#462A03] mb-6">❝</div>
        <h3 className="font-bold text-[#462A03] text-3xl mb-6 leading-snug">
          Excellent legal support
        </h3>
        <p className="text-[#6C4104] text-xl leading-relaxed mb-8">
          The team at LEGSIM was exceptional in handling my case. They were always available for questions, provided clear explanations, and most importantly, they achieved a great outcome. I couldn’t have asked for better service.
        </p>
        <div className="text-[#6C4104] text-xl font-semibold mb-6">— Johnathan Marks</div>
      </div>

      <div className="bg-[#FFF7EB] p-12 rounded-3xl shadow-xl">
        <div className="text-8xl text-[#462A03] mb-6">❝</div>
        <h3 className="font-bold text-[#462A03] text-3xl mb-6 leading-snug">
          Professional and Reliable
        </h3>
        <p className="text-[#6C4104] text-xl leading-relaxed mb-8">
          I was impressed by the level of professionalism and reliability shown by LEGSIM. They handled everything smoothly, offering consistent support, and I felt confident that my interests were always being prioritized.
        </p>
        <div className="text-[#6C4104] text-xl font-semibold mb-6">— Sarah Lee</div>
      </div>
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