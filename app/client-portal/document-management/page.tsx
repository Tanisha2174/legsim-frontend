"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Pencil, Trash2, Download } from "lucide-react";

export default function DocumentManagement() {
  const documents = Array(9).fill({
    name: "File1.pdf",
    category: "Contract",
    date: "Jan 24, 2025",
    type: "PDF File",
    size: "244 KB"
  });

  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      <div className="ml-64 mr-20 p-8">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-[#462A03]">Documents</h1>
            <Button 
              className="bg-[#462A03] text-xl hover:bg-[#6C4104] text-[#FFE5C0]"
            >
              ADD FILE
            </Button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <Input 
              type="search" 
              placeholder="Search any document" 
              className="max-w-xl  text-xl border-[#AC6604] focus:ring-[#6C4104]"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#FFE5C0] text-2xl">
                <tr>
                  <th className="px-6 py-3 text-left text-[#462A03]">Name</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Category</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Date</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Type</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Size</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FFE5C0]">
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-[#AC6604] mr-2" />
                        <span className="text-[#6C4104] text-xl">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-[#FFE5C0] text-xl  text-[#462A03] px-2 py-1 rounded">
                        {doc.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xl text-[#6C4104]">{doc.date}</td>
                    <td className="px-6 py-4 text-xl text-[#6C4104]">{doc.type}</td>
                    <td className="px-6 py-4 text-xl text-[#6C4104]">{doc.size}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-6 w-6 text-[#462A03]" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4 text-[#462A03]" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4 text-[#462A03]" />
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