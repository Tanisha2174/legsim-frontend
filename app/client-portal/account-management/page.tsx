"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AccountManagement() {
  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      <div className="ml-64 mr-64 p-8">
        <div className="w-full mx-auto">
          <div className="flex justify-between mt-12 items-center mb-8">
            <h1 className="text-5xl font-bold text-[#462A03]">Account Details</h1>
            <Button 
              className="bg-[#462A03] text-xl hover:bg-[#6C4104] text-[#FFE5C0]"
            >
              EDIT PROFILE
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Account Details */}
            <div className="text-2xl space-y-6">
              <div>
                <label className="block text-[#6C4104] mb-2">Name</label>
                <Input 
                  type="text" 
                  value="Tanisha"
                  readOnly
                  className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                />
              </div>
              <div>
                <label className="block text-[#6C4104] mb-2">Email Address</label>
                <Input 
                  type="email" 
                  value="example@gmail.com"
                  readOnly
                  className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                />
              </div>
              <div>
                <label className="block text-[#6C4104] mb-2">Password</label>
                <Input 
                  type="password" 
                  value="********"
                  readOnly
                  className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                />
              </div>
            </div>

            {/* Update Password */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-[#462A03] mb-6">Update Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#6C4104] text-2xl mb-2">Old Password</label>
                  <Input 
                    type="password" 
                    className="border-[#AC6604] focus:ring-[#6C4104]"
                  />
                </div>
                <div>
                  <label className="block text-2xl text-[#6C4104] mb-2">New Password</label>
                  <Input 
                    type="password" 
                    className="border-[#AC6604] focus:ring-[#6C4104]"
                  />
                </div>
                <Button 
                  className="w-full bg-[#462A03] text-xl hover:bg-[#6C4104] text-[#FFE5C0]"
                >
                  UPDATE
                </Button>
              </div>
            </div>
          </div>

          {/* Plan Overview */}
          <div className="mt-8 bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-[#462A03]">Plan Overview</h2>
              <Button 
                className="bg-[#462A03] text-xl hover:bg-[#6C4104] text-[#FFE5C0]"
              >
                UPGRADE PLAN
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex text-xl items-center">
                <span className="text-[#6C4104]">Current Plan: </span>
                <span className="ml-2 text-[#AC6604] font-semibold">STARTER BUNDLE</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xl font-medium px-2 py-0.5 rounded">ACTIVE</span>
              </div>
              <div className="flex items-center text-xl space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-[#6C4104]">10/10 Agreements Remaining</span>
              </div>
              <div className="flex items-center text-xl space-x-2">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                <span className="text-[#6C4104]">1 Mentorship session left</span>
              </div>
              
                <div className="flex items-center text-xl space-x-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#6C4104]">GST Filing: Completed for January</span>
                </div>
                <div className="flex items-center text-xl space-x-2">
                  <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                  <span className="text-[#6C4104]">ROC Filing: Pending (Due: March 31)</span>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}