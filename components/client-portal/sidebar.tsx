"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClientPortalSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/client-portal", label: "Dashboard", icon: "⬛" },
    { href: "/client-portal/service-management", label: "Service Management", icon: "🔧" },
    { href: "/client-portal/document-management", label: "Document Management", icon: "📄" },
    { href: "/client-portal/mentorship-support", label: "Mentorship & Support", icon: "👥" },
    { href: "/client-portal/billing-payments", label: "Billing & Payments", icon: "💰" },
    { href: "/client-portal/account-management", label: "Account Management", icon: "⚙️" }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed h-full w-96 bg-[#FFE5C0] p-6 z-40 transition-transform duration-300 ease-in-out",
        "md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="space-y-2">
            <div className="h-12 w-12 bg-[#462A03]  rounded-full flex items-center justify-center">
              <span className="text-[#FFE5C0] text-2xl">T</span>
            </div>
            <button className="text-[#462A03] text-2xl pt-4 font-medium hover:text-[#6C4104] flex items-center">
              My Profile
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                  pathname === item.href
                    ? "bg-[#462A03] text-2xl text-[#FFE5C0]"
                    : "text-[#462A03] text-2xl hover:bg-[#462A03]/10"
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}