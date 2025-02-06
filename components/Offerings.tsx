"use client";

import Image from "next/image";

const offerings = [
  {
    title: "Legal and Business Consultancy Services",
    image: "/images/consultancy.jpg",
  },
  {
    title: "Company / Society / Trust Registration",
    image: "/images/registration.jpg",
  },
  {
    title: "IPR Registration",
    image: "/images/ipr.jpg",
  },
  {
    title: "Consumer Case Filing / Consultancy",
    image: "/images/consumer.jpg",
  },
  {
    title: "Licences & Certification",
    image: "/images/licensing.jpg",
  },
  {
    title: "Compliances & Returns",
    image: "/images/compliance.jpg",
  },
];

const Offerings: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold text-yellow-700">LEGSIM</h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">OUR OFFERINGS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offerings.map((offering, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden relative group">
            <Image src={offering.image} alt={offering.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
              <p className="text-gray-600 mt-2">
                Running a business may seem overwhelming, but it doesn’t have to be. You just need the right business lawyer on your team!
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-full transition-transform transform group-hover:rotate-45">
              ➜
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
