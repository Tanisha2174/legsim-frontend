"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Bell } from "lucide-react";

export default function ClientPortal() {
  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      

      {/* Main Content */}
      <div className=" ml-64 mr-20 p-8">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="flex justify-between mt-8 items-center mb-12">
            <h1 className="text-5xl font-bold text-[#462A03]">Welcome Tanisha</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <Bell className="h-7 w-7 text-[#462A03]" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button 
                className="bg-[#462A03] hover:bg-[#6C4104] text-xl text-[#FFE5C0]"
              >
                CREATE NEW AGREEMENT
              </Button>
            </div>
          </div>


          {/* Plan Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold text-[#462A03]">Plan Overview</h2>
                <Button 
                  variant="outline"
                  className="border-[#AC6604] text-xl text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0]"
                >
                  UPGRADE PLAN
                </Button>
              </div>
              <div className=" text-xl space-y-4">
                <div>
                  <span className="text-[#6C4104]">Current Plan: </span>
                  <span className="text-[#AC6604] font-semibold">STARTER BUNDLE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#6C4104]">10/10 Agreements Remaining</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-[#6C4104]">1 Mentorship session left</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-5xl pb-12 pt-4 font-bold text-[#462A03]">12</div>
                <div className="text-[#6C4104] text-2xl">Total Agreements Drafted</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-5xl pb-12 pt-4  font-bold text-[#462A03]">5</div>
                <div className="text-[#6C4104] text-2xl">Mentorship Sessions</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-5xl pb-12 pt-4  font-bold text-[#462A03]">10</div>
                <div className="text-[#6C4104] text-2xl">Compliance Status</div>
              </div>
            </div>
          </div>

          {/* Tasks and Schedule */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-[#462A03] mb-4">Tasks for Today</h2>
              <ul className=" text-xl space-y-4">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-[#AC6604] rounded-full"></div>
                  <span className="text-[#6C4104]">Draft NDA Agreement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-[#AC6604] rounded-full"></div>
                  <span className="text-[#6C4104]">Submit GST Filing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-[#AC6604] rounded-full"></div>
                  <span className="text-[#6C4104]">Mentorship sessions scheduled</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-3xl font-semibold text-[#462A03] mb-4">Schedule</h2>
                <div className="space-y-4 text-xl">
                  {[21, 21, 21, 21].map((day, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-[#FFE5C0] p-2 rounded">
                        <div className="text-[#462A03] font-semibold">{day} Mar 2025</div>
                      </div>
                      <div className="text-[#6C4104] font-light text-2xl">Compliance Due Date</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="border-[#AC6604] text-xl text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0] justify-between"
                >
                  Draft Agreement
                  <ArrowUpRight className="h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#AC6604] text-xl text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0] justify-between"
                >
                  Schedule Mentorship
                  <ArrowUpRight className="h-6 w-6" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#AC6604] text-xl text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0] justify-between"
                >
                  View Compliance History
                  <ArrowUpRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}