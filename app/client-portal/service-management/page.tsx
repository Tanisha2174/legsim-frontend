"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Eye } from "lucide-react";
import { Check, Search } from "lucide-react";

export default function ServiceManagement() {
  const services = Array(9).fill({
    type: "Contract Drafting",
    progress: "Pending",
    deadline: "Jan 24, 2025"
  });

  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      <div className="ml-64 mr-20 p-8">
        <div className="w-full mx-auto">
          <div className="flex justify-between mt-12 items-center mb-8">
            <h1 className="text-5xl font-bold text-[#462A03]">Service Management</h1>
          </div>

          <div className="flex justify-start md:justify-start mt-6 mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2 h-6 w-6 text-[#AC6604]" />
            <Input
              type="text"
              placeholder="Search any service"
              className="pl-10 py-3 border border-[#AC6604] text-xl rounded-2xl focus:ring-[#6C4104] w-full"
            />
          </div>
        </div>

          <div className="bg-white w-4/5 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#FFE5C0] text-2xl ">
                <tr>
                  <th className="px-6 py-3 text-center text-[#462A03]">Service Type</th>
                  <th className="px-6 py-3 text-center text-[#462A03]">Progress</th>
                  <th className="px-6 py-3 text-center text-[#462A03]">Deadline</th>
                  <th className="px-6 py-3 text-center text-[#462A03]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-center divide-[#FFE5C0]">
                {services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <span className="text-[#AC6604] hover:text-[#6C4104] text-xl cursor-pointer">
                        {service.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-orange-100 text-orange-800 text-xl font-medium px-3 py-2 rounded">
                        {service.progress}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xl text-[#6C4104]">{service.deadline}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <Button 
                          variant="link"
                          className="text-[#AC6604] text-xl hover:text-[#6C4104]"
                        >
                          View Details
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-6 w-6 text-[#462A03]" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-6 w-6 text-[#462A03]" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}