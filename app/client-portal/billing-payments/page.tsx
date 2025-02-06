"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BillingPayments() {
  const invoices = Array(9).fill({
    id: "456478775",
    transactionId: "456478775",
    service: "Contract Drafting",
    progress: "Paid",
    dueDate: "Jan 24, 2025"
  });

  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-5xl font-bold text-[#462A03]">Billing & Payments</h1>
          </div>

          <div className="flex justify-between items-center mb-6">
            <Input 
              type="search" 
              placeholder="Search any service" 
              className="max-w-xl border-[#AC6604] focus:ring-[#6C4104]"
            />
            <Button 
              variant="outline"
              className="border-[#AC6604] text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0]"
            >
              FILTERS
            </Button>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#FFE5C0]">
                <tr>
                  <th className="px-6 py-3 text-left text-[#462A03]">Invoice ID</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Service</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Progress</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Due Date</th>
                  <th className="px-6 py-3 text-left text-[#462A03]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FFE5C0]">
                {invoices.map((invoice, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-[#6C4104]">{invoice.id}</td>
                    <td className="px-6 py-4 text-[#6C4104]">{invoice.transactionId}</td>
                    <td className="px-6 py-4">
                      <span className="text-[#AC6604] hover:text-[#6C4104] cursor-pointer">
                        {invoice.service}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                        {invoice.progress}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#6C4104]">{invoice.dueDate}</td>
                    <td className="px-6 py-4">
                      <Button 
                        variant="link"
                        className="text-[#AC6604] hover:text-[#6C4104]"
                      >
                        Generate Invoice
                      </Button>
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