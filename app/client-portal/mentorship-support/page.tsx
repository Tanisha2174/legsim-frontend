"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function MentorshipSupport() {
  const sessions = Array(9).fill({
    date: "21 Mar 2025",
    type: "Compliance Due Date"
  });

  return (
    <main className="min-h-screen bg-[#FFF7EB]">
      <div className="ml-64 mr-20 p-8">
        <div className="w-full  mt-12 mx-auto">
          <h1 className="text-5xl font-bold text-[#462A03] mb-8">Mentorship & Support</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule Form */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-[#462A03] mb-6">
                Schedule a mentorship session now!
              </h2>
              <form className="space-y-6 text-2xl">
                <div>
                  <label className="block text-[#6C4104] mb-2">Assistant</label>
                  <Input 
                    type="text" 
                    placeholder="Select your assistant"
                    className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                  />
                </div>
                <div>
                  <label className="block text-[#6C4104] mb-2">Select your slot</label>
                  <Input 
                    type="date"
                    className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#6C4104] mb-2">Session Reason</label>
                    <Textarea 
                      placeholder="GST Filing"
                      className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6C4104] mb-2">Comments/Notes</label>
                    <Textarea 
                      placeholder="Prefer this time,if possible"
                      className="border-[#AC6604] text-xl focus:ring-[#6C4104]"
                    />
                  </div>
                </div>
                <Button 
                  className="w-full bg-[#462A03] text-xl hover:bg-[#6C4104] text-[#FFE5C0]"
                >
                  SUBMIT
                </Button>
              </form>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-3xl font-semibold text-[#462A03] mb-6">Schedule</h2>
              <div className="space-y-4">
                <h3 className="font-medium text-3xl pb-4 text-[#6C4104]">Upcoming Sessions</h3>
                {sessions.map((session, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-[#FFE5C0] p-2 rounded">
                      <div className="text-[#462A03] text-xl font-semibold">{session.date}</div>
                    </div>
                    <div className="text-[#6C4104] text-xl">{session.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}