"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#FFF7EB] flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md mx-4">
        <h1 className="text-2xl font-bold text-[#462A03] mb-2">Login</h1>
        
        <div className="mb-6">
          <span className="text-[#6C4104]">Don't have an account yet? </span>
          <Link href="/signup" className="text-[#AC6604] hover:text-[#6C4104] font-semibold">
            Sign Up
          </Link>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-[#462A03] mb-1">Email Address</label>
            <Input 
              type="email" 
              className="w-full border-[#AC6604] focus:ring-[#6C4104]"
            />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-[#462A03]">Password</label>
              <Link href="/forgot-password" className="text-[#AC6604] hover:text-[#6C4104] text-sm">
                Forgot Password?
              </Link>
            </div>
            <Input 
              type="password" 
              className="w-full border-[#AC6604] focus:ring-[#6C4104]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-[#AC6604] data-[state=checked]:bg-[#462A03]" />
            <label htmlFor="remember" className="text-sm text-[#6C4104]">
              Remember me
            </label>
          </div>

          <Button 
            className="w-full bg-[#462A03] hover:bg-[#6C4104] text-[#FFE5C0]"
          >
            LOGIN
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#AC6604]"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#6C4104]">or login with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="border-[#AC6604] text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0]"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Google
            </Button>
            <Button 
              variant="outline" 
              className="border-[#AC6604] text-[#462A03] hover:bg-[#462A03] hover:text-[#FFE5C0]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Phone no
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}